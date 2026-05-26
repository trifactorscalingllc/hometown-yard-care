export function Logo({ size = 44, className = "" }: { size?: number; className?: string }) {
  return (
    <img
      src="/cason-logo.png"
      alt="Cason Landscaping"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}
