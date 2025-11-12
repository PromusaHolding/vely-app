'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Sparkles, Crown, TrendingUp, Heart, Zap } from 'lucide-react';

const features = [
  { icon: Palette, title: 'Editor Drag & Drop', description: 'Arrastra y suelta elementos para crear diseños profesionales en minutos' },
  { icon: Sparkles, title: 'Biblioteca Extensa', description: 'Accede a cientos de recursos: globos, flores, fondos y más' },
  { icon: Crown, title: 'Guarda tus Proyectos', description: 'Organiza múltiples propuestas para diferentes clientes y eventos' },
  { icon: TrendingUp, title: 'Tiempo Real', description: 'Diseña y muestra propuestas a tus clientes instantáneamente' },
  { icon: Heart, title: 'Para Profesionales', description: 'Herramientas diseñadas específicamente para decoradores de eventos' },
  { icon: Zap, title: 'Plan Premium', description: 'Recursos exclusivos y funcionalidades avanzadas disponibles' },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * index }}>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
