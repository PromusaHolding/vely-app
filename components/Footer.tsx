'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {

  // Función para scroll al inicio
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-white/70 py-12 backdrop-blur-md">
      {/* Fondo con parallax sutil */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary to-accent opacity-10 animate-slow-pulse"></div>

      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 space-y-6">

        {/* Logo Vely con scroll arriba */}
        <motion.img
          src="/logos/vely-logo.svg"
          alt="Vely"
          className="h-16 w-auto mx-auto cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={scrollToTop}
        />

        {/* Redes sociales */}
        <motion.div
          className="flex justify-center gap-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {[
            { href: 'https://www.facebook.com', src: '/icons/facebook-logo.svg', alt: 'Facebook' },
            { href: 'https://www.instagram.com', src: '/icons/instagram-logo.svg', alt: 'Instagram' },
            { href: 'https://www.tiktok.com', src: '/icons/tiktok-logo.svg', alt: 'TikTok' },
          ].map((social) => (
            <Link key={social.alt} href={social.href} target="_blank" className="inline-block">
              <motion.img
                src={social.src}
                alt={social.alt}
                className="h-10 w-10"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </Link>
          ))}
        </motion.div>

        {/* Acceso desarrollo discreto y creativo */}
        <Link
          href="/admin"
          className="absolute bottom-2 right-2 h-6 w-6 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full opacity-20 hover:opacity-60 transition-opacity shadow-md flex items-center justify-center"
          aria-label="Acceso desarrollo"
          title="Acceso desarrollo"
        >
          <span className="sr-only">Dev Access</span>
        </Link>

        {/* Copyright */}
        <p className="text-gray-600 text-sm md:text-base opacity-90 mt-4">
          © 2024 Vely. Diseña decoraciones increíbles para eventos.
        </p>
      </div>
    </footer>
  );
}
