import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Types d'abonnement disponibles
export const SubscriptionTypes = {
  MONTHLY_STANDARD: 'MONTHLY_STANDARD',
  YEARLY_STANDARD: 'YEARLY_STANDARD',
  MONTHLY_PREMIUM: 'MONTHLY_PREMIUM',
  YEARLY_PREMIUM: 'YEARLY_PREMIUM'
} as const;

// Durées en millisecondes
const MONTH_IN_MS = 30 * 24 * 60 * 60 * 1000;
const YEAR_IN_MS = 365 * 24 * 60 * 60 * 1000;

export async function GET() {
  try {
    // 1. Trouver l'utilisateur test
    const user = await prisma.user.findUnique({
      where: { email: 'test@test.com' },
      include: { subscription: true }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Utilisateur test non trouvé' },
        { status: 404 }
      );
    }

    // 2. Supprimer l'ancien abonnement s'il existe
    if (user.subscription) {
      await prisma.subscription.delete({
        where: { id: user.subscription.id }
      });
    }

    // 3. Créer un nouvel abonnement annuel standard
    const now = new Date();
    const subscription = await prisma.subscription.create({
      data: {
        userId: user.id,
        type: SubscriptionTypes.YEARLY_STANDARD,
        startDate: now,
        endDate: new Date(now.getTime() + YEAR_IN_MS),
        active: true,
        lastPaymentDate: now
      }
    });

    // 4. Vérifier le résultat final
    const updatedUser = await prisma.user.findUnique({
      where: { email: 'test@test.com' },
      include: { subscription: true }
    });

    return NextResponse.json({
      message: 'Abonnement mis à jour avec succès',
      user: updatedUser,
      subscription: subscription,
      availableTypes: SubscriptionTypes
    });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour de l\'abonnement' },
      { status: 500 }
    );
  }
}
