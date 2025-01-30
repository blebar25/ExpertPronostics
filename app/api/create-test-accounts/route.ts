import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { hash } from 'bcrypt';

export async function GET() {
  try {
    // Créer un compte sans abonnement
    const noSubPassword = await hash('password123', 10);
    const noSubUser = await prisma.user.create({
      data: {
        email: 'no-sub@test.com',
        password: noSubPassword,
        name: 'User Sans Abonnement'
      }
    });

    // Créer un compte avec abonnement premium
    const premiumPassword = await hash('password123', 10);
    const premiumUser = await prisma.user.create({
      data: {
        email: 'premium@test.com',
        password: premiumPassword,
        name: 'User Premium',
        subscription: {
          create: {
            type: 'PREMIUM',
            startDate: new Date(),
            endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 an
            active: true,
            lastPaymentDate: new Date()
          }
        }
      }
    });

    return NextResponse.json({
      message: 'Comptes de test créés avec succès',
      accounts: {
        noSub: { email: noSubUser.email, password: 'password123' },
        premium: { email: premiumUser.email, password: 'password123' }
      }
    });
  } catch (error) {
    console.error('Erreur lors de la création des comptes de test:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
