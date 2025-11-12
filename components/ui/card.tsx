'use client';

import * as React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = ({ children, ...props }: CardProps) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};
