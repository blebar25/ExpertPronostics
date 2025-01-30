import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

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

    // 3. Créer un nouvel abonnement standard
    const newSubscription = await prisma.subscription.create({
      data: {
        userId: user.id,
        type: 'STANDARD',
        startDate: new Date(),
        endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
        active: true,
        lastPaymentDate: new Date()
      }
    });

    // 4. Vérifier le nouvel état
    const updatedUser = await prisma.user.findUnique({
      where: { email: 'test@test.com' },
      include: { subscription: true }
    });

    return NextResponse.json({
      message: 'Abonnement réinitialisé avec succès',
      previousSubscription: user.subscription,
      newSubscription,
      currentState: updatedUser
    });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la réinitialisation de l\'abonnement' },
      { status: 500 }
    );
  }
}
