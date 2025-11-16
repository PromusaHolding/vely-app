// test-env.js
// Esto carga las variables de tu archivo .env.local
require('dotenv').config({ path: '.env.local' });

// Esto imprime tus llaves de Stripe en la consola
console.log('SECRET:', process.env.STRIPE_SECRET_KEY);
console.log('PUBLIC:', process.env.STRIPE_PUBLIC_KEY);
