import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { hash } from 'bcrypt';

export async function GET() {
  try {
    // Vérifier les utilisateurs existants
    const users = await prisma.user.findMany({
      where: {
        email: {
          in: ['test@test.com', 'no-sub@test.com', 'premium@test.com']
        }
      },
      include: {
        subscription: true
      }
    });

    // Si aucun utilisateur n'existe, les créer
    if (users.length === 0) {
      const hashedPassword = await hash('password123', 10);

      // Créer les utilisateurs
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
        },
        include: {
          subscription: true
        }
      });

      const noSubUser = await prisma.user.create({
        data: {
          email: 'no-sub@test.com',
          password: hashedPassword,
          name: 'User Sans Abonnement'
        }
      });

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
        },
        include: {
          subscription: true
        }
      });

      return NextResponse.json({
        message: 'Utilisateurs de test créés',
        users: [standardUser, noSubUser, premiumUser]
      });
    }

    return NextResponse.json({
      message: 'Utilisateurs de test existants',
      users
    });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la vérification/création des utilisateurs' },
      { status: 500 }
    );
  }
}
