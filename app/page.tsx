'use client';

import React from 'react';
import Link from 'next/link';
import { Button, Card } from '@/components/ui';

import { motion } from 'framer-motion';
import { Palette, ArrowRight, Sparkles } from 'lucide-react';

import StatsSection from '@/components/StatsSection';
import CardsSection from '@/components/CardsSection';
import ProFeaturesSection from '@/components/ProFeaturesSection';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function HeroSection() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 text-gray-800">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-rose-100 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Vely */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
            <img src="/logos/vely-logo.svg" alt="Vely" className="h-16 w-auto" />
            <div>
            </div>
          </div>

          {/* Botones de navegación */}
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost">
              <Link href="/pricing">Precios</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/admin">Admin</Link>
            </Button>
            <Button asChild>
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/signup">Registro</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">

            {/* Bienvenida impactante */}
            <motion.p
              className="mb-4 text-lg font-medium text-primary opacity-90 md:text-xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
            </motion.p>

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 backdrop-blur-sm justify-center mx-auto">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                ¡Transforma tus ideas en experiencias memorables!
              </span>
            </div>

            {/* Título principal */}
            <h1 className="mb-6 bg-gradient-to-r from-primary via-rose-500 to-accent bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-7xl" style={{ fontFamily: `'Outfit', sans-serif` }}>
              Crea Propuestas
              <br />
              Visuales Impactantes
            </h1>

            {/* Subtítulo */}
            <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-600 md:text-2xl">
              La herramienta perfecta para decoradores profesionales. Diseña, presenta y aprueba propuestas de decoración de eventos en tiempo real.
            </p>

            {/* Botones */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button asChild className="bg-gradient-to-r from-primary to-accent px-6 py-3 text-lg text-white hover:shadow-2xl transition-all duration-300">
                <Link href="/signup" className="flex items-center">
                  <Palette className="mr-2 h-5 w-5" />
                  Comenzar Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button variant="outline" className="border-2 border-rose-300 px-6 py-3 text-lg hover:bg-rose-50 transition-all duration-300" onClick={() => { document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Ver Características
              </Button>
            </div>
          </motion.div>

          {/* Video Canvas */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mx-auto max-w-5xl -mb-12">
            <Card className="relative overflow-hidden rounded-2xl border-2 border-rose-200 bg-white/80 shadow-2xl">
              <div className="aspect-video w-full">
                <video src="/videos/tuto.mp4" autoPlay muted loop className="h-full w-full object-cover rounded-lg" />
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Secciones */}
      <StatsSection />
      <CardsSection />
      <ProFeaturesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
