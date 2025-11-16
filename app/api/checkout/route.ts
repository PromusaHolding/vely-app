import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

const priceIds = {
  basico: {
    monthly: null, // Gratis, no se cobra
    semiannually: null,
    annually: null,
  },
  starter: {
    monthly: 'prod_TR3peGbOPSmT63',
    semiannually: 'prod_TR3qQofrdS5Mhv',
    annually: 'prod_TR3zeTCwFmwzDw',
  },
  premium: {
    monthly: 'prod_TR42fqRgcIp25J',
    semiannually: 'prod_TR43b8weFlQY1R',
    annually: 'prod_TR44ARqdjLMvtw',
  },
  profesional: {
    monthly: 'prod_TR45h6ZWd9DCEe',
    semiannually: 'prod_TR48l7WLZfeY8B',
    annually: 'prod_TR49R3jbtOSBa7',
  },
};

export async function POST(req: Request) {
  try {
    const { plan, billingCycle } = await req.json();

    // Dominio de tu sitio
    const YOUR_DOMAIN = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    // Si es plan gratis, redirige directamente a la página de gracias
    if (plan === 'basico') {
      return new Response(
        JSON.stringify({ url: `${YOUR_DOMAIN}/gracias?plan=basico` }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Obtiene Price ID según plan y ciclo
    const priceId = priceIds[plan]?.[billingCycle];

    if (!priceId) {
      return new Response(
        JSON.stringify({ error: 'Precio no encontrado para este plan y ciclo' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Crea sesión de Stripe
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${YOUR_DOMAIN}/gracias?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${YOUR_DOMAIN}/pricing`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message || 'Error en el checkout' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
