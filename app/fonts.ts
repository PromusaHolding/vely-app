import localFont from "next/font/local";

export const geistSans = localFont({
  src: [
    { path: "./fonts/Geist/Geist-Sans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Geist/Geist-Sans-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-geist-sans",
});

export const geistMono = localFont({
  src: [
    { path: "./fonts/Geist/Geist-Mono-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Geist/Geist-Mono-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-geist-mono",
});
