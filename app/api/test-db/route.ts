import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // Test de connexion simple
    console.log('Test de connexion à la base de données...');
    
    // Vérifier que nous pouvons faire une requête simple
    const userCount = await prisma.user.count();
    console.log('Nombre d\'utilisateurs:', userCount);

    // Tenter de lister tous les utilisateurs
    const users = await prisma.user.findMany({
      include: {
        subscription: true
      }
    });
    console.log('Utilisateurs trouvés:', users);

    // Vérifier l'URL de la base de données
    const databaseUrl = process.env.DATABASE_URL;
    console.log('URL de la base de données:', databaseUrl);

    return NextResponse.json({
      status: 'Connexion réussie',
      userCount,
      users,
      databaseUrl: databaseUrl?.replace(/:[^:@]*@/, ':***@') // Masquer le mot de passe
    });
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
    return NextResponse.json({
      status: 'Erreur',
      error: error instanceof Error ? error.message : 'Erreur inconnue',
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 });
  }
}
