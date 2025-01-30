import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // 1. Trouver l'utilisateur
    const user = await prisma.user.findUnique({
      where: { email: 'test@test.com' }
    });

    if (!user) {
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
    }

    // 2. Supprimer tous les abonnements existants pour cet utilisateur
    await prisma.$executeRaw`DELETE FROM "Subscription" WHERE "userId" = ${user.id}`;

    // 3. Créer un nouvel abonnement
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

    const subscription = await prisma.subscription.create({
      data: {
        userId: user.id,
        type: 'STANDARD',
        startDate: new Date(),
        endDate: oneYearFromNow,
        active: true,
        lastPaymentDate: new Date(),
      }
    });

    return NextResponse.json({
      message: 'Abonnement réinitialisé avec succès',
      subscription
    });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
