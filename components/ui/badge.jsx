'use client';

import { cn } from '@/lib/utils';

export function Badge({ className, variant = 'default', children }) {
  const base = 'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium';
  const variants = {
    default: 'bg-muted text-foreground',
    secondary: 'bg-rose-100 text-rose-800',
    outline: 'border border-foreground text-foreground',
  };

  return (
    <span className={cn(base, variants[variant], className)}>
      {children}
    </span>
  );
}
