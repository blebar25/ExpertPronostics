import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { hash } from 'bcrypt';

export async function GET() {
  try {
    // 1. Supprimer l'utilisateur premium s'il existe déjà
    await prisma.subscription.deleteMany({
      where: {
        user: {
          email: 'premium@test.com'
        }
      }
    });

    await prisma.user.deleteMany({
      where: {
        email: 'premium@test.com'
      }
    });

    // 2. Créer le mot de passe hashé
    const hashedPassword = await hash('password123', 10);

    // 3. Créer l'utilisateur premium avec son abonnement
    const premiumUser = await prisma.user.create({
      data: {
        email: 'premium@test.com',
        password: hashedPassword,
        name: 'Premium User',
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

    // 4. Vérifier que tout a été créé correctement
    const verifiedUser = await prisma.user.findUnique({
      where: { email: 'premium@test.com' },
      include: { subscription: true }
    });

    return NextResponse.json({
      message: 'Utilisateur premium créé avec succès',
      user: verifiedUser
    });
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur premium:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de l\'utilisateur premium' },
      { status: 500 }
    );
  }
}
