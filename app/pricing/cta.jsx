'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-primary/5 py-20 md:py-28">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl font-headline text-primary">¿Listo para llevar tu negocio al siguiente nivel?</h2>
        <p className="mx-auto mb-10 max-w-3xl text-xl opacity-90 text-muted-foreground">Únete a miles de decoradores que están transformando sus ideas en propuestas impactantes y optimizando su flujo de trabajo.</p>
        <Button asChild size="lg" className="bg-primary px-8 py-6 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105">
          <Link href="/signup">Comienza a diseñar gratis <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      </div>
    </section>
  );
}
