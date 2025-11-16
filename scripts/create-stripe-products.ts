// scripts/create-stripe-products.ts
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-10-29.clover",
});

async function main() {
  console.log("🚀 Creando productos y precios en Stripe…");

  const products = [
    {
      name: "Starter",
      description: "Plan básico",
      price_mxn: 49,
    },
    {
      name: "Premium",
      description: "Plan intermedio",
      price_mxn: 199,
    },
    {
      name: "Profesional",
      description: "Plan avanzado",
      price_mxn: 349,
    },
  ];

  for (const p of products) {
    console.log(`➡ Creando producto: ${p.name}`);

    const product = await stripe.products.create({
      name: p.name,
      description: p.description,
      active: true,
    });

    console.log(`   ✔ Producto creado: ${product.id}`);

    const price = await stripe.prices.create({
      unit_amount: p.price_mxn * 100,
      currency: "mxn",
      recurring: { interval: "month" },
      product: product.id,
    });

    console.log(`   💵 Precio mensual creado: ${price.id}`);
  }

  console.log("🎉 Listo. Productos creados sin errores.");
}

main().catch((err) => {
  console.error("❌ ERROR:", err);
});
