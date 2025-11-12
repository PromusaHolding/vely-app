'use client';

import { Badge, Switch } from '@/components/ui';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function PricingHeader() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute h-[30rem] w-[30rem] -translate-x-48 animate-blob rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute h-[30rem] w-[30rem] translate-x-48 animate-blob rounded-full bg-accent/20 blur-3xl animation-delay-2000" />
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"/>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20 text-center">
        <Badge variant="secondary" className="mb-4 text-base py-1 px-4">
          Planes para cada etapa de tu negocio
        </Badge>
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Precios Transparentes, <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>Resultados Increíbles</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
          Desde tus primeros pasos hasta la gestión de grandes eventos, tenemos un plan que se ajusta a tus necesidades.
        </p>

        {/* Toggle mensual/anual */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <span className={cn("font-medium", !isAnnual && "text-primary")}>Mensual</span>
          <Switch checked={isAnnual} onCheckedChange={setIsAnnual} aria-label="Toggle annual pricing"/>
          <span className={cn("font-medium", isAnnual && "text-primary")}>Anual</span>
          <Badge className='bg-green-100 text-green-800 hover:bg-green-100'>Ahorra 20%</Badge>
        </div>
      </div>
    </div>
  );
}
