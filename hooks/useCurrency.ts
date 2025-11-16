// /hooks/useCurrency.ts
"use client";

import { useEffect, useState } from "react";

export type CurrencyInfo = {
  code: string;
  symbol: string;
  rateToUSD: number;
};

const LATAM_CURRENCIES: Record<string, CurrencyInfo> = {
  MX: { code: "MXN", symbol: "$", rateToUSD: 0.058 },
  AR: { code: "ARS", symbol: "$", rateToUSD: 0.001 },
  BR: { code: "BRL", symbol: "R$", rateToUSD: 0.17 },
  CL: { code: "CLP", symbol: "$", rateToUSD: 0.0011 },
  CO: { code: "COP", symbol: "$", rateToUSD: 0.00024 },
  CR: { code: "CRC", symbol: "₡", rateToUSD: 0.0019 },
  DO: { code: "DOP", symbol: "RD$", rateToUSD: 0.017 },
  EC: { code: "USD", symbol: "$", rateToUSD: 1 },
  GT: { code: "GTQ", symbol: "Q", rateToUSD: 0.13 },
  HN: { code: "HNL", symbol: "L", rateToUSD: 0.040 },
  NI: { code: "NIO", symbol: "C$", rateToUSD: 0.027 },
  PA: { code: "PAB", symbol: "B/.", rateToUSD: 1 },
  PE: { code: "PEN", symbol: "S/", rateToUSD: 0.27 },
  PY: { code: "PYG", symbol: "₲", rateToUSD: 0.00013 },
  UY: { code: "UYU", symbol: "$U", rateToUSD: 0.025 },
  VE: { code: "VES", symbol: "Bs", rateToUSD: 0.028 },
};

export function useCurrency() {
  const [currency, setCurrency] = useState<CurrencyInfo>({
    code: "USD",
    symbol: "$",
    rateToUSD: 1,
  });

  // Detect country automatically
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data) => {
        const countryCode = data.country_code;

        if (LATAM_CURRENCIES[countryCode]) {
          setCurrency(LATAM_CURRENCIES[countryCode]);
        }
      })
      .catch(() => {});
  }, []);

  function format(amountUSD: number): string {
    const localAmount = amountUSD * (1 / currency.rateToUSD);

    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: currency.code,
      maximumFractionDigits: 0,
    }).format(localAmount);
  }

  return { currency, format };
}
