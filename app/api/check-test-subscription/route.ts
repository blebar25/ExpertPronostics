import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // Recherche détaillée de l'utilisateur test et son abonnement
    const user = await prisma.user.findUnique({
      where: {
        email: 'test@test.com'
      },
      include: {
        subscription: true
      }
    });

    // Recherche directe dans la table des abonnements
    const subscriptions = await prisma.subscription.findMany({
      where: {
        user: {
          email: 'test@test.com'
        }
      }
    });

    // Compte le nombre total d'abonnements pour cet utilisateur
    const subscriptionCount = await prisma.subscription.count({
      where: {
        user: {
          email: 'test@test.com'
        }
      }
    });

    return NextResponse.json({
      user,
      directSubscriptions: subscriptions,
      totalSubscriptions: subscriptionCount,
      message: 'Détails de l\'utilisateur test et ses abonnements'
    });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la vérification de l\'abonnement' },
      { status: 500 }
    );
  }
}
