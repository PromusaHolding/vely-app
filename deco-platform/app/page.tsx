import React from "react";

export default function HomePage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-background font-body antialiased">
      {/* Logo SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12 text-primary"
      >
        <title>DecoVision Logo</title>
        <path d="M12 2a5 5 0 0 0-5 5c0 4.34 6 11 6 11s6-6.66 6-11a5 5 0 0 0-5-5Z"></path>
        <path d="M12.5 17.5c-1.5 1.5-3 1.5-4.5 0"></path>
        <path d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="currentColor"></path>
      </svg>

      {/* Loading / Estableciendo conexión */}
      <div className="flex items-center gap-2 text-muted-foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 animate-spin"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
        </svg>
        <span>Estableciendo conexión segura...</span>
      </div>
    </div>
  );
}
