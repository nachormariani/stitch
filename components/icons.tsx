import type { ReactNode } from "react";

type IconProps = {
  children: ReactNode;
  variant?: "default" | "solid";
};

function IconFrame({ children, variant = "default" }: IconProps) {
  const classes =
    variant === "solid"
      ? "border border-black bg-black text-white shadow-none"
      : "border border-line bg-surface text-slate-500 shadow-soft";

  return (
    <div
      className={`flex h-11 w-11 items-center justify-center rounded-2xl ${classes}`}
    >
      {children}
    </div>
  );
}

export function NodeIcon({ variant }: { variant?: "default" | "solid" }) {
  return (
    <IconFrame variant={variant}>
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
        <path
          d="M7 7h4v4H7V7Zm6 0h4v4h-4V7ZM10 13h4v4h-4v-4Zm-5 1h4m6 0h4M12 5v2m0 10v2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </IconFrame>
  );
}

export function EyeIcon({ variant }: { variant?: "default" | "solid" }) {
  return (
    <IconFrame variant={variant}>
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
        <path
          d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </IconFrame>
  );
}

export function SparkIcon({ variant }: { variant?: "default" | "solid" }) {
  return (
    <IconFrame variant={variant}>
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
        <path
          d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm7 12 1 2.8L23 19l-3 1.2L19 23l-1.2-2.8L15 19l2.8-1.2L19 15Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </IconFrame>
  );
}

export function DashboardIcon({ variant }: { variant?: "default" | "solid" }) {
  return (
    <IconFrame variant={variant}>
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
        <path
          d="M4 4h7v7H4V4Zm9 0h7v4h-7V4ZM13 10h7v10h-7V10ZM4 13h7v7H4v-7Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </IconFrame>
  );
}

export function BoxIcon({ variant }: { variant?: "default" | "solid" }) {
  return (
    <IconFrame variant={variant}>
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
        <path
          d="m4 8 8-4 8 4-8 4-8-4Zm0 0v8l8 4 8-4V8m-8 4v8"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </IconFrame>
  );
}

export function CartIcon({ variant }: { variant?: "default" | "solid" }) {
  return (
    <IconFrame variant={variant}>
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
        <path
          d="M3 5h2l2.4 9.5a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 8H7m2 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm10 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </IconFrame>
  );
}
