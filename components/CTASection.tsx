'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Palette, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-white/0 relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 bg-gradient-to-r from-primary to-rose-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            ¿Listo para Crear Diseños Inolvidables?
          </h2>
          <p className="mb-10 text-xl text-gray-600">
            Únete a miles de decoradores que ya están transformando sus ideas en propuestas impactantes.
          </p>
          <div className="flex justify-center">
            <Button
              asChild
            
              className="bg-gradient-to-r from-primary to-accent px-10 py-6 text-lg text-white hover:shadow-2xl transition-all duration-300 hover:scale-105 max-w-xs w-full flex items-center justify-center gap-2"
            >
              <Link href="/signup" className="flex items-center justify-center gap-2">
                <Palette className="h-6 w-6" />
                Comenzar a Diseñar Gratis
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
