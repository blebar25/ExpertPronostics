import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { compare } from 'bcrypt';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    console.log('Tentative de connexion pour:', email);

    const user = await prisma.user.findUnique({
      where: { email },
      include: { subscription: true }
    });

    console.log('Utilisateur trouvé:', user ? 'Oui' : 'Non');

    if (!user) {
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
    }

    const isPasswordValid = await compare(password, user.password);
    console.log('Mot de passe valide:', isPasswordValid ? 'Oui' : 'Non');

    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Mot de passe incorrect' }, { status: 401 });
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        subscription: user.subscription
      }
    });
  } catch (error) {
    console.error('Erreur lors du debug auth:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
