type IconName =
  | "lawn-care"
  | "landscaping"
  | "mulching"
  | "bush-trimming"
  | "leaf-removal"
  | "overseeding"
  | "aeration"
  | "question";

export function ServiceIcon({ name, className = "h-9 w-9" }: { name: IconName; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "lawn-care":
      return (
        <svg {...common}>
          <path d="M6 32h36" />
          <path d="M10 32v-6h20v6" />
          <circle cx="14" cy="36" r="3" />
          <circle cx="26" cy="36" r="3" />
          <path d="M30 26l8-10" />
          <path d="M36 14h6v6" />
          <path d="M8 32c1-3 2-5 4-7M14 32c1-4 2-6 4-8M20 32c1-4 2-6 4-8" />
        </svg>
      );
    case "landscaping":
      return (
        <svg {...common}>
          <path d="M6 38h36" />
          <path d="M12 38c0-6 4-10 8-10s8 4 8 10" />
          <path d="M22 38v-14" />
          <path d="M22 24c0-3 2-5 5-5M22 28c0-3-2-5-5-5" />
          <path d="M32 38c0-4 3-7 6-7" />
          <path d="M38 31v7" />
        </svg>
      );
    case "mulching":
      return (
        <svg {...common}>
          <path d="M6 36h36" />
          <path d="M8 36c2-4 6-6 10-6s6 2 8 4 6 2 10-2" />
          <circle cx="14" cy="30" r="1.5" />
          <circle cx="22" cy="32" r="1.5" />
          <circle cx="30" cy="30" r="1.5" />
          <circle cx="36" cy="28" r="1.5" />
          <path d="M18 22c2-2 4-2 6 0M28 18c2-2 4-2 6 0" />
        </svg>
      );
    case "bush-trimming":
      return (
        <svg {...common}>
          <circle cx="18" cy="22" r="10" />
          <path d="M18 22v16" />
          <path d="M30 14l10 10M30 24l10-10" />
          <circle cx="32" cy="14" r="2" />
          <circle cx="32" cy="24" r="2" />
        </svg>
      );
    case "leaf-removal":
      return (
        <svg {...common}>
          <path d="M10 38c0-12 8-22 28-26-2 20-12 28-24 28-2 0-4-1-4-2z" />
          <path d="M10 38l16-16" />
        </svg>
      );
    case "overseeding":
      return (
        <svg {...common}>
          <path d="M6 36h36" />
          <path d="M14 28a4 4 0 018 0M22 28a4 4 0 018 0" />
          <circle cx="12" cy="20" r="1" fill="currentColor" />
          <circle cx="20" cy="14" r="1" fill="currentColor" />
          <circle cx="28" cy="18" r="1" fill="currentColor" />
          <circle cx="36" cy="12" r="1" fill="currentColor" />
          <circle cx="34" cy="22" r="1" fill="currentColor" />
        </svg>
      );
    case "aeration":
      return (
        <svg {...common}>
          <path d="M6 34h36" />
          <path d="M10 34v-4M16 34v-4M22 34v-4M28 34v-4M34 34v-4M40 34v-4" />
          <path d="M14 20l2-8M22 20l2-10M30 20l2-8M38 20l2-10" />
        </svg>
      );
    case "question":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="16" />
          <path d="M19 19a5 5 0 0110 1c0 3-5 3-5 6" />
          <circle cx="24" cy="32" r="0.5" fill="currentColor" />
        </svg>
      );
  }
}