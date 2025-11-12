'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Palette, Sparkles, Users, Image as ImageIcon } from 'lucide-react';

// Define tus cards
const cards = [
  {
    title: 'Editor Drag & Drop',
    description: 'Arrastra y suelta elementos para crear diseños profesionales en minutos',
    icon: <Palette className="h-6 w-6 text-white" />,
    color: 'from-primary to-accent',
  },
  {
    title: 'Biblioteca Extensa',
    description: 'Accede a cientos de recursos: globos, flores, fondos y más',
    icon: <ImageIcon className="h-6 w-6 text-white" />,
    color: 'from-rose-400 to-pink-500',
  },
  {
    title: 'Guarda tus Proyectos',
    description: 'Organiza múltiples propuestas para diferentes clientes y eventos',
    icon: <Sparkles className="h-6 w-6 text-white" />,
    color: 'from-yellow-400 to-orange-500',
  },
  {
    title: 'Tiempo Real',
    description: 'Diseña y muestra propuestas a tus clientes instantáneamente',
    icon: <Users className="h-6 w-6 text-white" />,
    color: 'from-green-400 to-teal-500',
  },
  {
    title: 'Para Profesionales',
    description: 'Herramientas diseñadas específicamente para decoradores de eventos',
    icon: <Sparkles className="h-6 w-6 text-white" />,
    color: 'from-purple-400 to-pink-500',
  },
  {
    title: 'Plan Premium',
    description: 'Recursos exclusivos y funcionalidades avanzadas disponibles',
    icon: <Palette className="h-6 w-6 text-white" />,
    color: 'from-blue-400 to-indigo-500',
  },
];

export default function CardsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Título y subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0 }}
          className="mb-12"
        >
          <h2
            className="mb-4 bg-gradient-to-r from-primary via-rose-500 to-accent bg-clip-text text-4xl md:text-5xl font-bold text-transparent"
            style={{ fontFamily: `'Outfit', sans-serif` }}
          >
            Todo lo que Necesitas para Brillar
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 text-lg md:text-xl">
            Desde el concepto inicial hasta la propuesta final, DecoVision te acompaña en cada paso del proceso creativo.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 shadow-xl rounded-2xl hover:shadow-2xl transition-shadow duration-300">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.color}`}>
                  {card.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
