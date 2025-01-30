import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { hash } from 'bcrypt';

export async function GET() {
  try {
    // 1. Supprimer tous les comptes de test existants
    await prisma.subscription.deleteMany({
      where: {
        user: {
          email: {
            in: ['test@test.com', 'no-sub@test.com', 'premium@test.com']
          }
        }
      }
    });

    await prisma.user.deleteMany({
      where: {
        email: {
          in: ['test@test.com', 'no-sub@test.com', 'premium@test.com']
        }
      }
    });

    // 2. Créer le mot de passe hashé
    const hashedPassword = await hash('password123', 10);

    // 3. Créer le compte sans abonnement
    const noSubUser = await prisma.user.create({
      data: {
        email: 'no-sub@test.com',
        password: hashedPassword,
        name: 'User Sans Abonnement'
      }
    });

    // 4. Créer le compte standard
    const standardUser = await prisma.user.create({
      data: {
        email: 'test@test.com',
        password: hashedPassword,
        name: 'User Standard',
        subscription: {
          create: {
            type: 'STANDARD',
            startDate: new Date(),
            endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
            active: true,
            lastPaymentDate: new Date()
          }
        }
      }
    });

    // 5. Créer le compte premium
    const premiumUser = await prisma.user.create({
      data: {
        email: 'premium@test.com',
        password: hashedPassword,
        name: 'User Premium',
        subscription: {
          create: {
            type: 'PREMIUM',
            startDate: new Date(),
            endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
            active: true,
            lastPaymentDate: new Date()
          }
        }
      }
    });

    // 6. Vérifier que tout a été créé correctement
    const allUsers = await prisma.user.findMany({
      where: {
        email: {
          in: ['test@test.com', 'no-sub@test.com', 'premium@test.com']
        }
      },
      include: {
        subscription: true
      }
    });

    return NextResponse.json({
      message: 'Comptes de test réinitialisés avec succès',
      users: allUsers
    });
  } catch (error) {
    console.error('Erreur lors de la réinitialisation des comptes:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la réinitialisation des comptes' },
      { status: 500 }
    );
  }
}
