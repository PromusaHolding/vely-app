'use client';

import { useState, createContext, useContext } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const AccordionContext = createContext();

export function Accordion({ type = 'single', collapsible = true, children, className }) {
  const [openValue, setOpenValue] = useState(null);

  const toggleItem = (value) => {
    if (type === 'single') {
      setOpenValue(openValue === value ? null : value);
    }
  };

  return (
    <AccordionContext.Provider value={{ openValue, toggleItem, collapsible }}>
      <div className={cn('space-y-2', className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ value, children }) {
  return <div data-value={value}>{children}</div>;
}

export function AccordionTrigger({ children, className }) {
  const { openValue, toggleItem } = useContext(AccordionContext);
  const value = children; // Usamos el texto como valor único
  const isOpen = openValue === value;

  return (
    <button
      type="button"
      onClick={() => toggleItem(value)}
      className={cn(
        'flex w-full items-center justify-between rounded-lg bg-muted/10 px-4 py-3 text-left font-medium hover:bg-muted/20 transition',
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn('ml-2 h-5 w-5 transition-transform', isOpen && 'rotate-180')}
      />
    </button>
  );
}

export function AccordionContent({ children, className }) {
  const { openValue } = useContext(AccordionContext);
  const isOpen = !!openValue;
  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-300',
        isOpen ? 'max-h-96 mt-2' : 'max-h-0',
        className
      )}
    >
      {children}
    </div>
  );
}
