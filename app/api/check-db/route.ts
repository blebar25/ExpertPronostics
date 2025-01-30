import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // Récupérer tous les utilisateurs avec leurs abonnements
    console.log('Récupération des utilisateurs...');
    const users = await prisma.user.findMany({
      include: {
        subscription: true
      }
    });
    console.log('Utilisateurs trouvés:', users);

    // Récupérer tous les abonnements
    console.log('Récupération des abonnements...');
    const subscriptions = await prisma.subscription.findMany();
    console.log('Abonnements trouvés:', subscriptions);

    // Récupérer spécifiquement l'utilisateur test
    console.log('Recherche de l\'utilisateur test...');
    const testUser = await prisma.user.findUnique({
      where: {
        email: 'test@test.com'
      },
      include: {
        subscription: true
      }
    });
    console.log('Utilisateur test:', testUser);

    return NextResponse.json({
      users,
      subscriptions,
      testUser
    });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la vérification de la base de données' },
      { status: 500 }
    );
  }
}
