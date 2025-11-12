'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './button';
import { Sparkles, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled ? 'bg-white/90 border-rose-200 shadow-md backdrop-blur-sm' : 'bg-white/80 border-rose-100 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg transition-transform hover:scale-110">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">DecoVision</h2>
            <p className="text-xs text-primary">Diseñador Pro</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2">
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

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white/90 backdrop-blur-sm border-b border-rose-200">
          <Button asChild variant="ghost" className="w-full">
            <Link href="/pricing">Precios</Link>
          </Button>
          <Button asChild variant="secondary" className="w-full">
            <Link href="/admin">Admin</Link>
          </Button>
          <Button asChild className="w-full">
            <Link href="/login">Iniciar Sesión</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/signup">Registro</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
