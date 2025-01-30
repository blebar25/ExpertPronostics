import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const user = await prisma.user.findUnique({
      where: { email: 'test@test.com' },
      include: {
        subscription: true
      }
    });

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
