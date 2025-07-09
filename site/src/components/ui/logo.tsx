import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 32, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle - representing sensor/detection area */}
      <circle
        cx="16"
        cy="16"
        r="14"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      
      {/* Inner hexagon - tech/infrastructure element */}
      <path
        d="M16 6L22.5 10.5V21.5L16 26L9.5 21.5V10.5L16 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Central dot - sensor core */}
      <circle
        cx="16"
        cy="16"
        r="2"
        fill="currentColor"
      />
      
      {/* Signal waves - representing monitoring/detection */}
      <path
        d="M12 12C13.1 13.1 13.1 14.9 12 16C13.1 17.1 13.1 18.9 12 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M20 12C18.9 13.1 18.9 14.9 20 16C18.9 17.1 18.9 18.9 20 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      
      {/* Corner accent dots - representing data points */}
      <circle cx="6" cy="6" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="26" cy="6" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="6" cy="26" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="26" cy="26" r="1" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function LogoText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Logo size={28} />
      <span className="font-bold text-lg">Kyle</span>
    </div>
  );
} 