import React from "react";

export const AsasFlamejantes = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M10 50 C10 20, 40 10, 50 40 C60 10, 90 20, 90 50 C90 80, 60 90, 50 60 C40 90, 10 80, 10 50 Z" />
    <path
      d="M20 50 Q30 30 50 45 Q70 30 80 50 Q70 70 50 55 Q30 70 20 50"
      fill="#d4af37"
    />
  </svg>
);

export const MicrofoneCoroa = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
    <line x1="12" x2="12" y1="19" y2="22" />
    <path d="M8 2h8l-1-1h-6z" fill="#d4af37" stroke="none" />
  </svg>
);

export const CaveiraFly = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2C7.58 2 4 5.58 4 10C4 13.91 6.75 17.18 10.33 17.81L9 22H15L13.67 17.81C17.25 17.18 20 13.91 20 10C20 5.58 16.42 2 12 2ZM12 16C8.69 16 6 13.31 6 10C6 6.69 8.69 4 12 4C15.31 4 18 6.69 18 10C18 13.31 15.31 16 12 16Z" />
    <circle cx="9" cy="10" r="1.5" fill="#000" />
    <circle cx="15" cy="10" r="1.5" fill="#000" />
  </svg>
);

export const DiamanteDourado = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#d4af37">
    <path d="M12 2L2 12l10 10 10-10L12 2zm0 16.5L5.5 12 12 5.5 18.5 12 12 18.5z" />
  </svg>
);
