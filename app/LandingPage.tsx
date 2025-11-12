'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Palette,
  Sparkles,
  Users,
  Zap,
  Upload,
  Image as ImageIcon,
  ArrowRight,
  Wand2,
  FileText,
  Lightbulb,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  const features = [
    { icon: Palette, title: 'Editor Drag & Drop', description: 'Arrastra y suelta elementos para crear diseños profesionales en minutos' },
    { icon: ImageIcon, title: 'Biblioteca Extensa', description: 'Accede a cientos de recursos: globos, flores, fondos y más' },
    { icon: Upload, title: 'Guarda tus Proyectos', description: 'Organiza múltiples propuestas para diferentes clientes y eventos' },
    { icon: Zap, title: 'Tiempo Real', description: 'Diseña y muestra propuestas a tus clientes instantáneamente' },
    { icon: Users, title: 'Para Profesionales', description: 'Herramientas diseñadas específicamente para decoradores de eventos' },
  ];

  const stats = [
    { label: 'Usuarios Activos', value: '1000+', icon: Users },
    { label: 'Diseños Creados', value: '5000+', icon: Palette },
    { label: 'Recursos Disponibles', value: '500+', icon: ImageIcon },
  ];

  const premiumFeatures = [
    { icon: Wand2, title: 'Sugerencias de Color con IA', description: 'Genera paletas de colores únicas basadas en el tema de tu evento con nuestra IA creativa.' },
    { icon: Lightbulb, title: 'Asistente de Diseño con IA', description: 'Obtén conceptos de diseño completos, desde la disposición de globos hasta combinaciones de accesorios, todo generado por IA.' },
    { icon: FileText, title: 'Presupuestos y Compras con IA', description: 'Analiza tus diseños y genera automáticamente una lista de compras detallada y una estimación de costos.' },
    { icon: Users, title: 'Visualización en RA', description: 'Muestra a tus clientes cómo se verán los diseños en el espacio real antes del evento usando Realidad Aumentada.' },
  ];

  const balloonLayers = [
    {
      depth: 0.05,
      balloons: [
        { x: 40, y: 50, w: 80, h: 80, url: 'https://picsum.photos/seed/101/80/80', alt: 'Globo azul' },
        { x: 300, y: 120, w: 90, h: 90, url: 'https://picsum.photos/seed/102/90/90', alt: 'Globo lila' },
      ]
    },
    {
      depth: 0.1,
      balloons: [
        { x: 100, y: 150, w: 100, h: 100, url: 'https://picsum.photos/seed/201/100/100', alt: 'Globo rosa' },
        { x: 250, y: 80, w: 120, h: 120, url: 'https://picsum.photos/seed/202/120/120', alt: 'Globo dorado' },
      ]
    },
    {
      depth: 0.2,
      balloons: [
        { x: 200, y: 180, w: 130, h: 130, url: 'https://picsum.photos/seed/301/130/130', alt: 'Globo rojo' },
        { x: 400, y: 60, w: 140, h: 140, url: 'https://picsum.photos/seed/302/140/140', alt: 'Globo blanco' },
      ]
    }
  ];

  const getMouseOffset = (depth: number) => ({
    x: (mousePos.x - window.innerWidth/2) * depth,
    y: (mousePos.y - window.innerHeight/2) * depth,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 text-gray-800 overflow-x-hidden">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-rose-100 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">DecoVision</h2>
              <p className="text-xs text-primary">Diseñador Pro</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost"><Link href="/pricing">Precios</Link></Button>
            <Button asChild variant="secondary"><Link href="/admin">Admin</Link></Button>
            <Button asChild><Link href="/login">Iniciar Sesión</Link></Button>
            <Button asChild variant="outline"><Link href="/signup">Registro</Link></Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32 text-center">
        <div className="relative mx-auto max-w-5xl h-[550px] mb-16">
          {balloonLayers.map((layer, i) =>
            layer.balloons.map((b, idx) => {
              const offset = getMouseOffset(layer.depth);
              return (
                <motion.div
                  key={`layer-${i}-balloon-${idx}`}
                  animate={{
                    y: [0, -15, 0, 15, 0],
                    x: [0, 10, 0, -10, 0],
                    rotate: [-3, 3, -3],
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 10 + Math.random() * 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: Math.random() * 2,
                  }}
                  style={{
                    top: b.y + scrollY * layer.depth + offset.y,
                    left: b.x + offset.x,
                    width: b.w,
                    height: b.h,
                  }}
                  className="absolute rounded-full shadow-[0_15px_25px_rgba(0,0,0,0.2)] z-10 cursor-pointer hover:scale-110 hover:shadow-2xl transition-transform duration-300"
                >
                  <Image src={b.url} width={b.w} height={b.h} alt={b.alt} className="h-full w-full object-cover" />
                </motion.div>
              );
            })
          )}
          <motion.div
            animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.7, 1, 0.7], rotate: [-1, 1, -1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="absolute top-32 left-1/2 -translate-x-1/2 z-20"
          >
            <div className="flex h-24 w-64 items-center justify-center rounded-md bg-black/20 p-2 shadow-neon">
              <p className="font-bold text-white/90 text-3xl drop-shadow-[0_0_25px_hsl(var(--primary))] animate-pulse">
                Happy B-day!
              </p>
            </div>
          </motion.div>
        </div>

        <h1 className="mb-6 bg-gradient-to-r from-[#FF4D6D] via-[#FF80A1] to-[#FFB347] bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-7xl animate-fadeInUp">
          Crea Propuestas<br />Visuales Impactantes
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-700 md:text-2xl animate-fadeInUp delay-200">
          La herramienta perfecta para decoradores profesionales. Diseña, presenta y aprueba propuestas de decoración de eventos en tiempo real.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row animate-fadeInUp delay-400">
          <Button asChild className="bg-gradient-to-r from-primary to-accent px-8 py-6 text-lg text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <Link href="/signup"><Palette className="mr-2 h-5 w-5" />Comenzar Gratis<ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button variant="outline" className="border-2 border-rose-300 px-8 py-6 text-lg hover:bg-rose-50" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver Características
          </Button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
            <h2 className="mb-4 bg-gradient-to-r from-primary to-rose-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">Todo lo que Necesitas para Brillar</h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">Desde el concepto inicial hasta la propuesta final, DecoVision te acompaña en cada paso del proceso creativo.</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx*0.05 }}>
                <Card className="h-full rounded-2xl border-rose-100 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-100 to-pink-100">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-rose-100 bg-white/50 py-16 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx*0.1 }}>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <p className="mb-2 bg-gradient-to-r from-primary to-rose-600 bg-clip-text text-4xl font-bold text-transparent">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-20 md:py-32 bg-white/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
            <h2 className="mb-4 bg-gradient-to-r from-primary to-rose-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">Desbloquea tu Potencial con Herramientas Avanzadas</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">Las funciones Pro y Empresarial están diseñadas para ahorrarte tiempo, impresionar a tus clientes y hacer crecer tu negocio.</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {premiumFeatures.map((feature, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx*0.1 }}>
                <Card className="h-full rounded-2xl border-rose-100 bg-white/80 p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:border-primary">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-6 bg-gradient-to-r from-primary to-rose-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">¿Listo para Crear Diseños Inolvidables?</h2>
            <p className="mb-10 text-xl text-gray-600">Únete a miles de decoradores que ya están transformando sus ideas en propuestas impactantes.</p>
            <Button asChild className="bg-gradient-to-r from-primary to-accent px-10 py-6 text-lg text-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <Link href="/signup"><Palette className="mr-2 h-6 w-6" />Comenzar a Diseñar Gratis<ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-rose-100 bg-white/50 py-12 backdrop-blur-sm text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">DecoVision</span>
          </div>
          <p className="text-gray-600">© 2024 DecoVision. Diseña decoraciones increíbles para eventos.</p>
        </div>
      </footer>

    </div>
  );
}
