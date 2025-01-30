import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { hash } from 'bcrypt';

export async function GET() {
  try {
    // 1. Supprimer l'ancien utilisateur et son abonnement
    await prisma.subscription.deleteMany({
      where: {
        user: {
          email: 'test@test.com'
        }
      }
    });

    await prisma.user.deleteMany({
      where: {
        email: 'test@test.com'
      }
    });

    // 2. Créer le nouveau mot de passe hashé
    const hashedPassword = await hash('password123', 10);

    // 3. Créer le nouvel utilisateur avec son abonnement
    const newUser = await prisma.user.create({
      data: {
        email: 'test@test.com',
        password: hashedPassword,
        name: 'Test User',
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

    // 4. Vérifier que tout a été créé correctement
    const verifiedUser = await prisma.user.findUnique({
      where: { email: 'test@test.com' },
      include: { subscription: true }
    });

    return NextResponse.json({
      message: 'Utilisateur test recréé avec succès',
      user: verifiedUser
    });
  } catch (error) {
    console.error('Erreur lors de la recréation de l\'utilisateur:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la recréation de l\'utilisateur' },
      { status: 500 }
    );
  }
}
