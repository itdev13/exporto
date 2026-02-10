interface DashedLinesProps {
  className?: string;
}

export function DashedLines({ className = "" }: DashedLinesProps) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Diagonal dashed lines */}
      <line
        x1="0"
        y1="100"
        x2="400"
        y2="300"
        stroke="#E5E7EB"
        strokeWidth="2"
        strokeDasharray="12 12"
      />
      <line
        x1="0"
        y1="150"
        x2="400"
        y2="350"
        stroke="#E5E7EB"
        strokeWidth="2"
        strokeDasharray="12 12"
      />
      <line
        x1="50"
        y1="0"
        x2="400"
        y2="250"
        stroke="#E5E7EB"
        strokeWidth="2"
        strokeDasharray="12 12"
      />
    </svg>
  );
}
