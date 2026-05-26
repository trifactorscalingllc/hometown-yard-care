export function Logo({ size = 44, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-label="Cason Landscaping"
      role="img"
    >
      <circle cx="50" cy="50" r="48" fill="#14110D" />
      <circle cx="50" cy="50" r="46" fill="none" stroke="#F4EDE0" strokeWidth="0.5" opacity="0.4" />
      {/* Left sprig */}
      <g fill="#6B8E5A" transform="translate(14,42)">
        <path d="M0 8 Q4 0 10 2 Q8 6 4 8 Q2 10 0 8 Z" />
        <path d="M2 14 Q6 6 12 8 Q10 12 6 14 Q4 16 2 14 Z" />
        <path d="M4 20 Q8 12 14 14 Q12 18 8 20 Q6 22 4 20 Z" />
      </g>
      {/* Right sprig (mirrored) */}
      <g fill="#6B8E5A" transform="translate(86,42) scale(-1,1)">
        <path d="M0 8 Q4 0 10 2 Q8 6 4 8 Q2 10 0 8 Z" />
        <path d="M2 14 Q6 6 12 8 Q10 12 6 14 Q4 16 2 14 Z" />
        <path d="M4 20 Q8 12 14 14 Q12 18 8 20 Q6 22 4 20 Z" />
      </g>
      {/* Wordmark */}
      <text
        x="50" y="46"
        textAnchor="middle"
        fill="#F4EDE0"
        fontFamily="Georgia, serif"
        fontSize="11"
        fontWeight="600"
        letterSpacing="1"
      >CASON</text>
      <text
        x="50" y="62"
        textAnchor="middle"
        fill="#F4EDE0"
        fontFamily="Georgia, serif"
        fontSize="8"
        letterSpacing="1.5"
      >LANDSCAPING</text>
      <line x1="32" y1="70" x2="68" y2="70" stroke="#B8954A" strokeWidth="0.8" />
      <text
        x="50" y="80"
        textAnchor="middle"
        fill="#B8954A"
        fontFamily="Georgia, serif"
        fontSize="5.5"
        letterSpacing="2"
      >STEPHENVILLE · TX</text>
    </svg>
  );
}