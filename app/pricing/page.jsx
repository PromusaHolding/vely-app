"use client";
import React from "react";
import PricingTiers from "./tiers";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary via-rose-600 to-accent/60 text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Planes y Precios</h1>
          <p className="text-lg text-white/90">
            Elige el plan perfecto para tu negocio de decoración. Cambia o cancela cuando quieras.
          </p>
        </header>

        <PricingTiers />
      </div>
    </main>
  );
}
