interface ChevronIconProps {
  className?: string;
  size?: number;
}

export function ChevronIcon({ className = "", size = 20 }: ChevronIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 3L3 20h18L12 3z" />
    </svg>
  );
}
