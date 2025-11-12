'use client';
import { motion } from 'framer-motion';
import { futureFeatures } from './data';
import { Badge } from '@/components/ui/badge';

export default function FutureSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-slate-900 p-8 md:p-16 overflow-hidden text-center">
          <h2 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text">En Constante Evolución</h2>
          <p className="mb-12 text-lg text-gray-300 mx-auto max-w-2xl">Estamos comprometidos con la innovación. Al unirte, obtienes las herramientas de hoy y mañana.</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {futureFeatures.map((f,index)=>(
              <motion.div key={f.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:index*0.1}} className="group relative rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white">
                  {/* Aquí se puede reemplazar por el ícono real */}
                  <span>Icon</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{f.description}</p>
                <Badge variant="outline" className="mt-4 border-primary/50 text-primary">Próximamente</Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
