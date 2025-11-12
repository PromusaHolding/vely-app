'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'ghost' | 'outline';
  asChild?: boolean;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', className, children, asChild, ...props }, ref) => {
    const classes = cn(
      'px-4 py-2 rounded-lg font-medium transition-colors',
      variant === 'secondary' && 'bg-rose-500 text-white hover:bg-rose-600',
      variant === 'ghost' && 'bg-transparent hover:bg-gray-100',
      variant === 'outline' && 'border border-gray-300 hover:bg-gray-50',
      className
    );

    if (asChild) {
      return <button ref={ref} className={classes} {...props}>{children}</button>;
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';