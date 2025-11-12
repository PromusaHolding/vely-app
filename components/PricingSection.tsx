'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Crown, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary via-rose-600 to-accent py-20 md:py-32 rounded-2xl">
      {/* Patrón cuadriculado semi-transparente */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <Crown className="mx-auto mb-6 h-16 w-16" />
          <h2 className="mb-6 text-4xl md:text-5xl font-bold">
            Eleva tu Negocio con un Plan de Pago
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-xl opacity-90">
            Accede a recursos exclusivos, diseños ilimitados y herramientas de IA que te darán una ventaja competitiva.
          </p>

          {/* Cards / Beneficios */}
          <div className="mx-auto mb-12 grid max-w-5xl grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3">
            {[
              'Diseños Ilimitados',
              'Recursos Premium Exclusivos',
              'Asistente de Diseño con IA',
              'Generador de Presupuestos con IA',
              'Visualización en RA',
              'Exportación sin Marca de Agua',
              'Exportación en Alta Calidad',
              'Soporte Prioritario 24/7',
              'Actualizaciones Constantes',
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 text-lg"
              >
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-300" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* Botón centrado y ajustado */}
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="px-20 py-6 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden flex justify-center items-center"
            >
              <Link href="/pricing" className="relative z-10 flex items-center justify-center gap-2">
                <span className="font-extrabold text-lg bg-gradient-to-r from-purple-500 via-rose-500 to-pink-500 bg-clip-text text-transparent flex items-center justify-center gap-2">
                  Ver Planes y Precios
                  <ArrowRight className="h-6 w-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-rose-500 to-pink-500" />
                </span>
                <span className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/40 via-white/20 to-white/40 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-[shine_1.5s_infinite]" />
              </Link>
            </Button>
          </div>

          <p className="mt-4 text-sm opacity-75">
            Comienza gratis y actualiza cuando quieras.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
