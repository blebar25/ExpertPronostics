import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // 1. Trouver l'utilisateur
    const user = await prisma.user.findUnique({
      where: { email: 'test@test.com' },
      include: { subscription: true }
    });

    if (!user) {
      console.log('Utilisateur non trouvé');
      return NextResponse.json(
        { error: 'Utilisateur non trouvé' },
        { status: 404 }
      );
    }

    console.log('Utilisateur trouvé:', user);

    // 2. Supprimer l'ancien abonnement s'il existe
    if (user.subscription) {
      console.log('Suppression de l\'ancien abonnement');
      await prisma.subscription.delete({
        where: { id: user.subscription.id }
      });
    }

    // 3. Créer un nouvel abonnement
    console.log('Création d\'un nouvel abonnement');
    const newSubscription = await prisma.subscription.create({
      data: {
        userId: user.id,
        type: 'STANDARD',
        startDate: new Date(),
        endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 an
        active: true,
        lastPaymentDate: new Date()
      }
    });

    console.log('Nouvel abonnement créé:', newSubscription);

    // 4. Vérifier le résultat final
    const updatedUser = await prisma.user.findUnique({
      where: { email: 'test@test.com' },
      include: { subscription: true }
    });

    console.log('Utilisateur mis à jour:', updatedUser);

    return NextResponse.json({
      message: 'Abonnement créé avec succès',
      user: updatedUser
    });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de l\'abonnement' },
      { status: 500 }
    );
  }
}
