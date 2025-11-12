'use client';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { faqs } from './data';

export default function FaqsSection() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text sm:text-5xl">Preguntas Frecuentes</h2>
          <p className="mt-4 text-lg text-muted-foreground">¿Tienes dudas? Aquí resolvemos las más comunes.</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq,index)=>(
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className='text-lg font-medium hover:text-primary'>{faq.question}</AccordionTrigger>
              <AccordionContent className='text-base text-muted-foreground'>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
