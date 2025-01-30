import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { compare } from 'bcrypt';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    console.log('Test de connexion pour:', email);

    // 1. Trouver l'utilisateur
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
        name: true,
        subscription: true
      }
    });

    console.log('Utilisateur trouvé:', user ? 'Oui' : 'Non');
    if (user) {
      console.log('Hash du mot de passe stocké:', user.password);
    }

    if (!user) {
      return NextResponse.json(
        { error: 'Utilisateur non trouvé' },
        { status: 404 }
      );
    }

    // 2. Vérifier le mot de passe
    const isPasswordValid = await compare(password, user.password);
    console.log('Mot de passe valide:', isPasswordValid ? 'Oui' : 'Non');

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Mot de passe incorrect' },
        { status: 401 }
      );
    }

    // 3. Retourner les informations de l'utilisateur (sans le mot de passe)
    const { password: _, ...userWithoutPassword } = user;
    return NextResponse.json(userWithoutPassword);
  } catch (error) {
    console.error('Erreur lors du test de connexion:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
