export function Logo({ size = 44, className = "" }: { size?: number; className?: string }) {
  return (
    <img
      src="/cason-logo.png"
      alt="Cason Landscaping"
      height={size}
      className={className}
      style={{ height: size, width: "auto", objectFit: "contain" }}
    />
  );
}
