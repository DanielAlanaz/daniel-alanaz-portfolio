type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 56 56"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="brand-mark-d"
        d="M8 8h15.5C37.2 8 47 16.1 47 28S37.2 48 23.5 48H8V8Z"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="brand-mark-a"
        d="M18 42 29.8 14 42 42M23.4 31h13.2"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle className="brand-mark-node" cx="47" cy="48" r="3" />
    </svg>
  );
}
