interface BrandMarkProps {
  size?: number;
  className?: string;
}

/**
 * Skyward brand mark — blue square + white upward chevron (brand guide).
 */
export function BrandMark({ size = 40, className = "" }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect width="40" height="40" fill="#1B5FAD" />
      <path
        d="M11.5 24.5L20 13.5L28.5 24.5"
        stroke="white"
        strokeWidth="3.75"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
