'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { useCurrency } from '@/hooks/useCurrency';

const SafeCarousel = ({ children }: { children: React.ReactNode }) => (
  <div className="overflow-x-auto pb-6">
    <div className="flex gap-4">{children}</div>
  </div>
);

const pricingTiers = [
  {
    name: 'Básico',
    price: { monthly: 0, semiannually: 0, annually: 0 },
    frequency: { monthly: '/ siempre', semiannually: '/ siempre', annually: '/ siempre' },
    description: 'Ideal para aficionados y para dar tus primeros pasos en el diseño de eventos.',
    features: [
      'Hasta 1 diseño guardado',
      'Acceso a biblioteca de recursos esenciales',
      'Exportación con marca de agua',
    ],
    cta: 'Comenzar Gratis',
    isMostPopular: false,
    planKey: 'basico',
    className: 'bg-white',
    buttonVariant: 'outline',
    buttonClassName: 'text-primary border-primary hover:bg-primary/10 hover:text-primary',
    ringClassName: 'ring-slate-300',
  },
  {
    name: 'Starter',
    price: { monthly: 2.9, semiannually: 2.9 * 0.9, annually: 2.9 * 0.8 },
    frequency: { monthly: '/ mes', semiannually: '/ mes', annually: '/ mes' },
    description: 'Para decoradores que empiezan a profesionalizarse y necesitan más capacidad.',
    features: [
      'Hasta 10 diseños guardados',
      'Biblioteca de recursos ampliada',
      'Sugerencias de paletas con IA (Límite)',
      'Exportación sin marca de agua',
      'Soporte por correo electrónico',
    ],
    cta: 'Actualizar a Starter',
    isMostPopular: false,
    planKey: 'starter',
    className: 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white',
    buttonVariant: 'default',
    buttonClassName: 'bg-white text-blue-600 hover:bg-white/90',
    ringClassName: 'ring-cyan-500',
  },
  {
    name: 'Premium',
    price: { monthly: 11.57, semiannually: 11.57 * 0.9, annually: 11.57 * 0.8 },
    frequency: { monthly: '/ mes', semiannually: '/ mes', annually: '/ mes' },
    description: 'La solución completa para profesionales que buscan impresionar a sus clientes.',
    features: [
      'Diseños ilimitados',
      'Biblioteca de recursos Premium',
      'Portal de Colaboración con Cliente',
      'Asistente de Diseño con IA',
      'Calculadora de Precios',
      'Generador de Contratos',
      'Soporte prioritario por chat',
    ],
    cta: 'Actualizar a Premium',
    isMostPopular: true,
    planKey: 'premium',
    className: 'bg-gradient-to-b from-blue-600 to-cyan-400 text-white',
    buttonVariant: 'default',
    buttonClassName: 'bg-white text-blue-600 hover:bg-white/90',
    ringClassName: 'ring-blue-500',
  },
  {
    name: 'Profesional',
    price: { monthly: 20.25, semiannually: 49 * 0.9, annually: 49 * 0.8 },
    frequency: { monthly: '/ mes', semiannually: '/ mes', annually: '/ mes' },
    description: 'Para agencias y equipos que necesitan el máximo poder y personalización.',
    features: [
      'Todo en Premium, y además:',
      'Herramientas de Colaboración en Equipo',
      'Asistente de Presupuestos y Compras con IA',
      'Centro Profesional de Marketing',
      'Visualización en Realidad Aumentada (RA)',
      'Soporte dedicado y onboarding',
    ],
    cta: 'Actualizar a Profesional',
    isMostPopular: false,
    planKey: 'profesional',
    className: 'bg-gradient-to-r from-primary to-accent text-white',
    buttonVariant: 'default',
    buttonClassName: 'bg-white text-primary hover:bg-white/90',
    ringClassName: 'ring-primary',
  },
];

export default function PlansSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'semiannually' | 'annually'>('monthly');
  const { format } = useCurrency();

  const handleCheckout = async (planKey: string) => {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: planKey, billingCycle }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'No se pudo iniciar el pago');
      }
    } catch (err) {
      console.error(err);
      alert('Error al iniciar el pago');
    }
  };

  return (
    <section id="plans" className="isolate relative pt-0 px-4">
      <div className="mx-auto max-w-screen-2xl">
        {/* Selector de ciclo */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pb-12 text-center">
          <div className="flex items-center justify-center gap-2 rounded-full border bg-background/50 p-2">
            {['monthly', 'semiannually', 'annually'].map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBillingCycle(cycle as any)}
                className={cn(
                  'rounded-full px-6 py-2 text-sm font-medium',
                  billingCycle === cycle ? 'bg-primary text-white shadow' : 'bg-transparent text-muted-foreground'
                )}
              >
                {cycle === 'monthly' && 'Mensual'}
                {cycle === 'semiannually' && 'Semestral'}
                {cycle === 'annually' && 'Anual'}
                {cycle === 'semiannually' && (
                  <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">Ahorra 10%</Badge>
                )}
                {cycle === 'annually' && (
                  <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">Ahorra 20%</Badge>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grilla desktop */}
        <div className="hidden lg:grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={cn('relative flex h-full flex-col rounded-2xl border-0 shadow-2xl transition-all duration-300 hover:-translate-y-2 ring-4 ring-offset-4 ring-offset-background', tier.ringClassName)}>
                {tier.isMostPopular && (
                  <div className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 transform">
                    <div className="flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-1.5 text-sm font-semibold text-yellow-900 shadow-lg">
                      <Star className="h-4 w-4" /> Más Popular
                    </div>
                  </div>
                )}
                <div className={cn('flex-grow flex flex-col p-8 rounded-2xl', tier.className)}>
                  <CardHeader className="p-0 text-center">
                    <CardTitle className={cn('font-headline text-3xl', tier.name === 'Básico' && 'text-slate-900')}>
                      {tier.name}
                    </CardTitle>
                    <div className="mt-4 flex items-baseline justify-center gap-1">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={billingCycle}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className={cn('text-5xl font-bold tracking-tight', tier.name === 'Básico' && 'text-slate-900')}
                        >
                          {tier.price[billingCycle] === 0 ? 'Gratis' : format(tier.price[billingCycle])}
                        </motion.span>
                      </AnimatePresence>
                      <span className={cn('text-sm', tier.name === 'Básico' ? 'text-slate-600' : 'text-white/70')}>
                        {tier.price.monthly !== 0 ? tier.frequency[billingCycle] : tier.frequency.monthly}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 px-0 mt-8 mb-8">
                    <div className={cn('relative rounded-lg p-6 bg-white/10 backdrop-blur-sm min-h-[6rem] flex items-center justify-center', tier.name === 'Básico' && 'bg-slate-200/50')}>
                      <p className={cn('text-sm text-center', tier.name === 'Básico' ? 'text-slate-800' : 'text-white/90')}>
                        {tier.description}
                      </p>
                    </div>
                    <div className="my-6 h-px w-full bg-white/20" />
                    <ul className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className={cn('h-5 w-5 flex-shrink-0', tier.name === 'Básico' ? 'text-slate-500' : 'text-white/80')} />
                          <span className={cn(tier.name === 'Básico' ? 'text-slate-700' : 'text-white/90')}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="p-0 mt-auto">
                    <Button
                      size="lg"
                      variant={tier.buttonVariant as any}
                      className={cn('w-full py-6 text-lg', tier.buttonClassName)}
                      onClick={() => handleCheckout(tier.planKey)}
                    >
                      {tier.cta}
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <SafeCarousel>
            {pricingTiers.map((tier, tierIndex) => (
              <div key={tier.name} className="pl-4 basis-[90%] sm:basis-2/3">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: tierIndex * 0.1 }}
                >
                  <Card className={cn('relative flex h-full flex-col rounded-2xl border-0 shadow-xl transition-all duration-300 ring-4 ring-offset-4 ring-offset-background', tier.ringClassName)}>
                    {tier.isMostPopular && (
                      <div className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 transform">
                        <div className="flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-1.5 text-sm font-semibold text-yellow-900 shadow-lg">
                          <Star className="h-4 w-4" /> Más Popular
                        </div>
                      </div>
                    )}
                    <div className={cn('flex-grow flex flex-col p-6 sm:p-8 rounded-2xl', tier.className)}>
                      <CardHeader className="p-0 text-center">
                        <CardTitle className={cn('font-headline text-3xl', tier.name === 'Básico' && 'text-slate-900')}>{tier.name}</CardTitle>
                        <div className="mt-4 flex items-baseline justify-center gap-1">
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={billingCycle}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className={cn('text-5xl font-bold tracking-tight', tier.name === 'Básico' && 'text-slate-900')}
                            >
                              {tier.price[billingCycle] === 0 ? 'Gratis' : format(tier.price[billingCycle])}
                            </motion.span>
                          </AnimatePresence>
                          <span className={cn('text-sm', tier.name === 'Básico' ? 'text-slate-600' : 'text-white/70')}>
                            {tier.price.monthly !== 0 ? tier.frequency[billingCycle] : tier.frequency.monthly}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 px-0 mt-8 mb-8">
                        <div className={cn('relative rounded-lg p-6 bg-white/10 backdrop-blur-sm min-h-[6rem] flex items-center justify-center', tier.name === 'Básico' && 'bg-slate-200/50')}>
                          <p className={cn('text-sm text-center', tier.name === 'Básico' ? 'text-slate-800' : 'text-white/90')}>
                            {tier.description}
                          </p>
                        </div>
                        <div className="my-6 h-px w-full bg-white/20" />
                        <ul className="space-y-4">
                          {tier.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <CheckCircle className={cn('h-5 w-5 flex-shrink-0', tier.name === 'Básico' ? 'text-slate-500' : 'text-white/80')} />
                              <span className={cn(tier.name === 'Básico' ? 'text-slate-700' : 'text-white/90')}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter className="p-0 mt-auto">
                        <Button size="lg" variant={tier.buttonVariant as any} className={cn('w-full py-6 text-lg', tier.buttonClassName)} onClick={() => handleCheckout(tier.planKey)}>
                          {tier.cta}
                        </Button>
                      </CardFooter>
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </SafeCarousel>
        </div>
      </div>
    </section>
  );
}
