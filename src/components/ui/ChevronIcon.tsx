interface ChevronIconProps {
  className?: string;
  size?: number;
}

/** Upward chevron from the Skyward brand guide */
export function ChevronIcon({ className = "", size = 20 }: ChevronIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M6 16L12 8L18 16"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
