'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function PricingHeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-0 md:pt-32 md:pb-0 bg-gradient-to-br from-white via-pink-50 to-rose-100">
      {/* Fondo con patrón sutil */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge superior */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            Planes para cada etapa de tu negocio
          </span>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold leading-tight text-gray-900 md:text-7xl bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent"
          style={{ fontFamily: `'Outfit', sans-serif` }}
        >
          Precios Transparentes,
          <br />
          Resultados Increíbles
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 md:text-xl mb-0 pb-0"
        >
          Desde proyectos personales hasta grandes eventos, encuentra la opción que
          se adapta a ti. Sin complicaciones, sin letras pequeñas.
        </motion.p>
      </div>
    </section>
  );
}
