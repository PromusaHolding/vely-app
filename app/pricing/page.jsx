'use client';

import React from 'react';
import PricingHeroSection from '@/components/pricing/PricingHeroSection';
import PlansSection from '@/components/pricing/PlansSection';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 text-gray-800">
      {/* Hero Section */}
      <PricingHeroSection />

      {/* Sección de Planes */}
      <section id="plans" className="py-20">
        <PlansSection />
      </section>
    </div>
  );
}
