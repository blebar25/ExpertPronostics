import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import prisma from '@/lib/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

interface PriceIds {
  standard: {
    monthly: string;
    yearly: string;
  };
  premium: {
    monthly: string;
    yearly: string;
  };
}

const PRICE_IDS: PriceIds = {
  standard: {
    monthly: 'price_1QmWrfRx1jupNrDjHoEKsBS5',
    yearly: 'price_1QmWs0Rx1jupNrDjnkbzNmob'
  },
  premium: {
    monthly: 'price_1QmWsSRx1jupNrDjNW295euE',
    yearly: 'price_1QmWsdRx1jupNrDjS1Luqa7Q'
  }
};

export async function POST(req: Request) {
  try {
    const { plan, isAnnual, userId } = await req.json();

    if (!plan || typeof isAnnual !== 'boolean' || !userId) {
      return NextResponse.json(
        { error: 'Paramètres manquants ou invalides' },
        { status: 400 }
      );
    }

    if (plan !== 'standard' && plan !== 'premium') {
      return NextResponse.json(
        { error: 'Plan invalide' },
        { status: 400 }
      );
    }

    // Vérifier si l'utilisateur existe
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Utilisateur non trouvé' },
        { status: 404 }
      );
    }

    const priceId = PRICE_IDS[plan][isAnnual ? 'yearly' : 'monthly'];

    // Créer la session Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXTAUTH_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXTAUTH_URL}/offres?canceled=true`,
      customer_email: user.email,
      client_reference_id: user.id,
      metadata: {
        userId: user.id,
        plan: plan
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Erreur lors de la création de la session:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de la session' },
      { status: 500 }
    );
  }
}
