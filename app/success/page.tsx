'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SuccessPage() {
  const [message, setMessage] = useState('Procesando...');

  useEffect(() => {
    setTimeout(() => {
      setMessage('¡Pago completado! Gracias por tu suscripción.');
    }, 500);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-green-100 to-green-200 text-gray-800 p-4">
      <h1 className="text-4xl font-bold mb-4">¡Éxito!</h1>
      <p className="text-lg mb-8">{message}</p>
      <Link href="/">
        <Button size="lg">Volver al inicio</Button>
      </Link>
    </div>
  );
}
