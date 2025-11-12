'use client';

import { cn } from '@/lib/utils';

export function Table({ className, children }) {
  return <table className={cn("w-full table-auto border-collapse", className)}>{children}</table>;
}

export function TableHeader({ children }) {
  return <thead className="bg-muted text-left">{children}</thead>;
}

export function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

export function TableRow({ className, children }) {
  return <tr className={cn("border-b last:border-none", className)}>{children}</tr>;
}

export function TableHead({ className, children }) {
  return <th className={cn("px-4 py-2 font-semibold text-foreground", className)}>{children}</th>;
}

export function TableCell({ className, children }) {
  return <td className={cn("px-4 py-2 text-foreground/80", className)}>{children}</td>;
}
