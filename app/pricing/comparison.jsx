'use client';

import { Card } from '@/components/ui/card';
import { Check, Minus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell
} from '@/components/ui/table';
import { pricingTiers, comparisonFeatures } from './data';

export default function ComparisonSection() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text sm:text-5xl">
            Compara las Características
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Encuentra el plan que se ajusta a tus necesidades de un solo vistazo.
          </p>
        </div>

        <Card className="rounded-2xl shadow-xl border-rose-100 bg-background/80 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-headline text-lg w-1/3">Característica</TableHead>
                {pricingTiers.map((tier) => (
                  <TableHead key={tier.name} className="font-headline text-lg text-center">
                    {tier.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            {comparisonFeatures.map((section) => (
              <TableBody key={section.section}>
                <TableRow className="bg-muted/50">
                  <TableCell colSpan={4} className="font-bold text-primary pt-6">
                    {section.section}
                  </TableCell>
                </TableRow>

                {section.items.map((item) => (
                  <TableRow key={item.feature} className="hover:bg-muted/30">
                    <TableCell className="font-medium">{item.feature}</TableCell>

                    <TableCell className="text-center">
                      {typeof item.starter === 'boolean' ? (
                        item.starter ? <Check className="mx-auto h-5 w-5 text-green-500" /> : <Minus className="mx-auto h-5 w-5 text-muted-foreground/50" />
                      ) : (
                        <span className="text-sm">{item.starter}</span>
                      )}
                    </TableCell>

                    <TableCell className="text-center">
                      {typeof item.premium === 'boolean' ? (
                        item.premium ? <Check className="mx-auto h-5 w-5 text-green-500" /> : <Minus className="mx-auto h-5 w-5 text-muted-foreground/50" />
                      ) : (
                        <Badge variant="secondary">{item.premium}</Badge>
                      )}
                    </TableCell>

                    <TableCell className="text-center">
                      {typeof item.enterprise === 'boolean' ? (
                        item.enterprise ? <Check className="mx-auto h-5 w-5 text-green-500" /> : <Minus className="mx-auto h-5 w-5 text-muted-foreground/50" />
                      ) : (
                        <Badge>{item.enterprise}</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ))}
          </Table>
        </Card>
      </div>
    </section>
  );
}
