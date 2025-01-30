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
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
    }

    // 2. Supprimer l'ancien abonnement s'il existe
    if (user.subscription) {
      await prisma.subscription.delete({
        where: { id: user.subscription.id }
      });
    }

    // 3. Créer un nouvel abonnement standard
    const subscription = await prisma.subscription.create({
      data: {
        userId: user.id,
        type: 'STANDARD',
        startDate: new Date(),
        endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 an
        active: true,
        lastPaymentDate: new Date()
      }
    });

    // 4. Vérifier que l'abonnement a été créé
    const updatedUser = await prisma.user.findUnique({
      where: { email: 'test@test.com' },
      include: { subscription: true }
    });

    return NextResponse.json({
      message: 'Abonnement standard ajouté avec succès',
      user: updatedUser
    });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'ajout de l\'abonnement' },
      { status: 500 }
    );
  }
}
