import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import prisma from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      console.log('Pas de session ou d\'ID utilisateur');
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }

    console.log('Recherche de l\'utilisateur avec ID:', session.user.id);

    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id
      },
      include: {
        subscription: true
      }
    });

    if (!user) {
      console.log('Utilisateur non trouvé');
      return NextResponse.json(
        { error: 'Utilisateur non trouvé' },
        { status: 404 }
      );
    }

    console.log('Abonnement trouvé:', user.subscription);

    return NextResponse.json({
      subscription: user.subscription,
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des détails de l\'abonnement:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
