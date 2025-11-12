"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * PricingTiers component
 * - Hecho como componente independiente para editar sin tocar page.tsx
 * - Usa markup simple (no Card.Header) para evitar problemas de server/client
 */

export default function PricingTiers() {
  const tiers = [
    {
      id: "basic",
      name: "Básico",
      price: "$0",
      subtitle: "Ideal para comenzar",
      features: ["3 proyectos activos", "Exportación de propuestas", "Soporte básico"],
      cta: { href: "/signup", label: "Comenzar Gratis" },
      accent: "bg-white/90 text-gray-900",
    },
    {
      id: "pro",
      name: "Profesional",
      price: "$199",
      subtitle: "Por mes",
      features: ["Proyectos ilimitados", "Personalización de marca", "Soporte prioritario"],
      cta: { href: "/signup", label: "Elegir Plan" },
      accent: "bg-gradient-to-br from-rose-600 to-primary text-white shadow-2xl",
      highlighted: true,
    },
    {
      id: "enterprise",
      name: "Empresarial",
      price: "$499",
      subtitle: "Por mes",
      features: ["Múltiples usuarios", "Análisis avanzado", "Integraciones CRM"],
      cta: { href: "/contact", label: "Contáctanos" },
      accent: "bg-white/90 text-gray-900",
    },
  ];

  return (
    <section className="relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((t) => (
          <article
            key={t.id}
            className={`rounded-2xl p-6 md:p-8 shadow-lg transition-transform transform hover:-translate-y-1 ${t.accent} ${
              t.highlighted ? "scale-100 md:scale-105 ring-2 ring-white/10" : ""
            }`}
          >
            <header className="mb-4">
              <h3 className={`text-2xl font-bold ${t.highlighted ? "text-white" : ""}`}>{t.name}</h3>
              <div className="mt-2 flex items-baseline gap-3">
                <span className={`text-4xl font-extrabold ${t.highlighted ? "text-white" : ""}`}>{t.price}</span>
                <span className={`text-sm ${t.highlighted ? "text-white/80" : "text-gray-700"}`}>{t.subtitle}</span>
              </div>
            </header>

            <div className="mb-6">
              <ul className={`space-y-3 ${t.highlighted ? "text-white/90" : "text-gray-700"}`}>
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className={`inline-block h-4 w-4 rounded-full ${t.highlighted ? "bg-white/80" : "bg-rose-200"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <footer>
              <div className="mt-4">
                <Button
                  asChild
                  className={`w-full ${t.highlighted ? "bg-white text-rose-700 hover:bg-white/90" : "bg-gradient-to-r from-primary to-accent text-white hover:opacity-95"}`}
                >
                  <Link href={t.cta.href} className="w-full text-center inline-block py-2">
                    {t.cta.label}
                  </Link>
                </Button>
              </div>
              <p className={`mt-3 text-xs ${t.highlighted ? "text-white/80" : "text-white/80"}`}>
                ¿Necesitas facturación a medida?{" "}
                <Link href="/contact" className="underline">
                  Contáctanos
                </Link>
              </p>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
