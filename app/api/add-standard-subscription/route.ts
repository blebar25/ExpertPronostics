import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const user = await prisma.user.findUnique({
      where: { email: 'test@test.com' }
    });

    if (!user) {
      return NextResponse.json({ error: 'Utilisateur test non trouvé' }, { status: 404 });
    }

    // Supprimer l'ancien abonnement s'il existe
    await prisma.subscription.deleteMany({
      where: { userId: user.id }
    });

    // Créer un nouvel abonnement standard valide pour 1 an
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

    return NextResponse.json({
      message: 'Abonnement standard ajouté avec succès',
      subscription
    });
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'abonnement:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'ajout de l\'abonnement' },
      { status: 500 }
    );
  }
}
