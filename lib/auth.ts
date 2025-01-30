import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error('Email et mot de passe requis');
          }

          console.log('Tentative de connexion pour:', credentials.email);

          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            },
            include: {
              subscription: true
            }
          });

          console.log('Utilisateur trouvé:', user);

          if (!user) {
            console.log('Utilisateur non trouvé:', credentials.email);
            throw new Error('Email ou mot de passe incorrect');
          }

          const isPasswordValid = await compare(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) {
            console.log('Mot de passe invalide pour:', credentials.email);
            throw new Error('Email ou mot de passe incorrect');
          }

          console.log('Connexion réussie pour:', credentials.email);
          console.log('Abonnement:', user.subscription);

          // Retourner l'utilisateur avec son abonnement
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            subscription: user.subscription
          };
        } catch (error) {
          console.error('Erreur d\'authentification:', error);
          throw error;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      console.log('JWT Callback - Token avant:', token);
      console.log('JWT Callback - User:', user);
      
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.subscription = user.subscription;
      }

      console.log('JWT Callback - Token après:', token);
      return token;
    },
    async session({ session, token }) {
      console.log('Session Callback - Session avant:', session);
      console.log('Session Callback - Token:', token);

      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.subscription = token.subscription;
      }

      console.log('Session Callback - Session après:', session);
      return session;
    },
    async redirect({ url, baseUrl }) {
      return '/dashboard';
    }
  },
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 jours
  },
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
};
