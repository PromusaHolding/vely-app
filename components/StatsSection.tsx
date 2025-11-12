'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Palette, Image as ImageIcon } from 'lucide-react';

function AnimatedNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(counter);
  }, [value]);

  return <>{count.toLocaleString()}</>;
}

export default function StatsSection() {
  return (
    <section id="stats" className="border-y border-rose-100 py-12 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <p className="mb-2 bg-gradient-to-r from-primary to-rose-600 bg-clip-text text-4xl font-bold text-transparent">
              <AnimatedNumber value={1000} />+
            </p>
            <p className="text-gray-600">Usuarios Activos</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100">
              <Palette className="h-8 w-8 text-primary" />
            </div>
            <p className="mb-2 bg-gradient-to-r from-primary to-rose-600 bg-clip-text text-4xl font-bold text-transparent">
              <AnimatedNumber value={5000} />+
            </p>
            <p className="text-gray-600">Diseños Creados</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100">
              <ImageIcon className="h-8 w-8 text-primary" />
            </div>
            <p className="mb-2 bg-gradient-to-r from-primary to-rose-600 bg-clip-text text-4xl font-bold text-transparent">
              <AnimatedNumber value={500} />+
            </p>
            <p className="text-gray-600">Recursos Disponibles</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
