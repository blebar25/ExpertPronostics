import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // Récupérer tous les utilisateurs
    const users = await prisma.user.findMany({
      include: {
        subscription: true
      }
    });

    // Récupérer tous les abonnements
    const subscriptions = await prisma.subscription.findMany();

    // Vérifier spécifiquement l'utilisateur test
    const testUser = await prisma.user.findUnique({
      where: { email: 'test@test.com' },
      include: { subscription: true }
    });

    return NextResponse.json({
      allUsers: users,
      allSubscriptions: subscriptions,
      testUser
    });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des données' },
      { status: 500 }
    );
  }
}
