import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // Récupérer tous les utilisateurs avec leurs abonnements
    const users = await prisma.user.findMany({
      include: {
        subscription: true
      }
    });

    return NextResponse.json({ users });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
