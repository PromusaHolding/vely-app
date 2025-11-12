import './globals.css';
import { geistSans, geistMono } from './fonts';

export const metadata = {
  title: 'Vely',
  description: 'Plataforma creativa de decoración, diseño y gestión de eventos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
