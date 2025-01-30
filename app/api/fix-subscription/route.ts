import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    console.log('Recherche de l\'utilisateur test@test.com...');
    const user = await prisma.user.findUnique({
      where: { email: 'test@test.com' },
      include: { subscription: true }
    });

    console.log('Utilisateur trouvé:', user);

    if (!user) {
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
    }

    if (user.subscription) {
      console.log('Suppression de l\'ancien abonnement...');
      await prisma.subscription.delete({
        where: { id: user.subscription.id }
      });
    }

    console.log('Création du nouvel abonnement...');
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

    const subscription = await prisma.subscription.create({
      data: {
        userId: user.id,
        type: 'STANDARD',
        startDate: new Date(),
        endDate: oneYearFromNow,
        active: true,
        lastPaymentDate: new Date()
      }
    });

    console.log('Nouvel abonnement créé:', subscription);

    // Vérifions que l'abonnement a bien été créé
    const updatedUser = await prisma.user.findUnique({
      where: { email: 'test@test.com' },
      include: { subscription: true }
    });

    console.log('Utilisateur mis à jour:', updatedUser);

    return NextResponse.json({
      message: 'Abonnement standard ajouté avec succès',
      user: updatedUser
    });
  } catch (error) {
    console.error('Erreur détaillée:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'ajout de l\'abonnement' },
      { status: 500 }
    );
  }
}
