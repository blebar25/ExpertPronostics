import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession();

    if (!session) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }

    const pronostics = await prisma.pronostic.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(pronostics);
  } catch (error) {
    console.error('Erreur lors de la récupération des pronostics:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des pronostics' },
      { status: 500 }
    );
  }
}
