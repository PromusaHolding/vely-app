// app/landing/layout.tsx
import { ReactNode } from "react";
import Link from "next/link";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="font-sans bg-gray-100 text-gray-900">
        {/* Header */}
        <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-blue-600 cursor-pointer">
                DecoPlatform
              </span>
            </Link>
            <nav className="space-x-6">
              <a href="#features" className="hover:text-blue-600 transition">
                Características
              </a>
              <a href="#pricing" className="hover:text-blue-600 transition">
                Precios
              </a>
              <a href="#contact" className="hover:text-blue-600 transition">
                Contacto
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-24 scroll-smooth">{children}</main>

        {/* Footer */}
        <footer className="bg-white border-t mt-12">
          <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-600">
            © {new Date().getFullYear()} DecoPlatform. Todos los derechos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
