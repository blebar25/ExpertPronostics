import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import prisma from '@/lib/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
  maxNetworkRetries: 3, // Ajout de tentatives de reconnexion
});

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Erreur de webhook:', err);
    return NextResponse.json(
      { error: 'Webhook error' },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.client_reference_id;
        const plan = session.metadata?.plan;

        if (!userId || !plan) {
          throw new Error('Missing userId or plan in session');
        }

        // Mise à jour du statut de l'abonnement
        await prisma.user.update({
          where: { id: userId },
          data: {
            subscription: {
              upsert: {
                create: {
                  stripeSubscriptionId: session.subscription as string,
                  plan: plan,
                  status: 'active',
                  currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // +30 jours
                },
                update: {
                  stripeSubscriptionId: session.subscription as string,
                  plan: plan,
                  status: 'active',
                  currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // +30 jours
                }
              }
            }
          }
        });
        break;
      }

      case 'customer.subscription.deleted':
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        const userId = subscription.metadata.userId;

        if (!userId) {
          throw new Error('Missing userId in subscription');
        }

        await prisma.subscription.update({
          where: {
            stripeSubscriptionId: subscription.id
          },
          data: {
            status: subscription.status === 'active' ? 'active' : 'canceled',
            currentPeriodEnd: new Date(subscription.current_period_end * 1000)
          }
        });
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Erreur de traitement du webhook:', error);
    return NextResponse.json(
      { error: 'Webhook processing error' },
      { status: 500 }
    );
  }
}