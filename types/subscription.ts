export const SubscriptionTypes = {
  MONTHLY_STANDARD: 'MONTHLY_STANDARD',
  YEARLY_STANDARD: 'YEARLY_STANDARD',
  MONTHLY_PREMIUM: 'MONTHLY_PREMIUM',
  YEARLY_PREMIUM: 'YEARLY_PREMIUM'
} as const;

export type SubscriptionType = typeof SubscriptionTypes[keyof typeof SubscriptionTypes];

export interface SubscriptionPlan {
  type: SubscriptionType;
  name: string;
  description: string;
  price: number;
  duration: 'monthly' | 'yearly';
  features: string[];
  isPremium: boolean;
}

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    type: SubscriptionTypes.MONTHLY_STANDARD,
    name: 'Standard Mensuel',
    description: 'Accès aux pronostics standards',
    price: 9.99,
    duration: 'monthly',
    features: [
      'Accès aux pronostics standards',
      'Mises à jour quotidiennes',
      'Support par email'
    ],
    isPremium: false
  },
  {
    type: SubscriptionTypes.YEARLY_STANDARD,
    name: 'Standard Annuel',
    description: 'Accès aux pronostics standards avec réduction annuelle',
    price: 99.99,
    duration: 'yearly',
    features: [
      'Accès aux pronostics standards',
      'Mises à jour quotidiennes',
      'Support par email',
      'Économisez 20% par rapport au plan mensuel'
    ],
    isPremium: false
  },
  {
    type: SubscriptionTypes.MONTHLY_PREMIUM,
    name: 'Premium Mensuel',
    description: 'Accès à tous les pronostics premium',
    price: 19.99,
    duration: 'monthly',
    features: [
      'Accès à TOUS les pronostics',
      'Pronostics premium exclusifs',
      'Analyses détaillées',
      'Support prioritaire',
      'Statistiques avancées'
    ],
    isPremium: true
  },
  {
    type: SubscriptionTypes.YEARLY_PREMIUM,
    name: 'Premium Annuel',
    description: 'Accès à tous les pronostics premium avec réduction annuelle',
    price: 199.99,
    duration: 'yearly',
    features: [
      'Accès à TOUS les pronostics',
      'Pronostics premium exclusifs',
      'Analyses détaillées',
      'Support prioritaire',
      'Statistiques avancées',
      'Économisez 20% par rapport au plan mensuel'
    ],
    isPremium: true
  }
];
