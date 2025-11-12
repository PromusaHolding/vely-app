'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Palette, Sparkles, Image as ImageIcon, CheckCircle } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;

}

const features: Feature[] = [
  {
    title: "Sugerencias de Color con IA",
    description: "Genera paletas de colores únicas basadas en el tema de tu evento con nuestra IA creativa.",
    icon: <Palette className="h-8 w-8 text-white" />,
  },
  {
    title: "Asistente de Diseño con IA",
    description: "Obtén conceptos de diseño completos, desde la disposición de globos hasta combinaciones de accesorios, todo generado por IA.",
    icon: <Sparkles className="h-8 w-8 text-white" />,
  },
  {
    title: "Presupuestos y Compras con IA",
    description: "Analiza tus diseños y genera automáticamente una lista de compras detallada y una estimación de costos.",
    icon: <CheckCircle className="h-8 w-8 text-white" />,
  },
  {
    title: "Visualización en RA",
    description: "Muestra a tus clientes cómo se verán los diseños en el espacio real antes del evento usando Realidad Aumentada.",
    icon: <ImageIcon className="h-8 w-8 text-white" />,
  },
];

export default function ProFeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-rose-50 to-pink-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent via-rose-500 to-primary bg-clip-text text-transparent" style={{ fontFamily: `'Outfit', sans-serif` }}>
            Desbloquea tu Potencial con Herramientas Avanzadas
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Las funciones Pro y Empresarial están diseñadas para ahorrarte tiempo, impresionar a tus clientes y hacer crecer tu negocio.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="flex flex-col items-center justify-start p-6 h-full rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
