interface BlobProps {
  color: string;
  size?: number;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  variant?: 1 | 2 | 3;
  withBorder?: boolean;
  className?: string;
}

const blobStyles = {
  1: "rounded-[60%_40%_70%_30%_/_40%_60%_30%_70%]",
  2: "rounded-[70%_30%_50%_50%_/_30%_50%_70%_50%]",
  3: "rounded-[40%_60%_30%_70%_/_60%_30%_70%_40%]",
};

const positionStyles = {
  "top-left": "-top-20 -left-20",
  "top-right": "-top-20 -right-20",
  "bottom-left": "-bottom-20 -left-20",
  "bottom-right": "-bottom-20 -right-20",
};

export function Blob({
  color,
  size = 300,
  position,
  variant = 1,
  withBorder = false,
  className = "",
}: BlobProps) {
  return (
    <div
      className={`
        absolute ${positionStyles[position]} ${blobStyles[variant]}
        ${withBorder ? "border-[3px] border-black" : ""}
        ${className}
      `}
      style={{
        backgroundColor: color,
        width: size,
        height: size,
      }}
      aria-hidden="true"
    />
  );
}
