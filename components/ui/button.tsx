import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type SharedProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

type ButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

const variants = {
  primary:
    "border border-primary bg-primary text-white shadow-[0_8px_24px_rgba(15,23,42,0.14)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(15,23,42,0.18)]",
  secondary:
    "border border-black/15 bg-white text-foreground shadow-[0_6px_18px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 hover:bg-slate-50",
};

const baseClassName =
  "inline-flex items-center justify-center rounded-[1.15rem] px-6 py-3.5 text-base font-semibold tracking-[-0.03em] transition duration-200";

export function Button(props: ButtonProps | LinkProps) {
  if ("href" in props) {
    const linkProps = props as LinkProps;
    const {
      children,
      variant = "primary",
      className = "",
      href,
      ...rest
    } = linkProps;
    const classes = `${baseClassName} ${variants[variant]} ${className}`.trim();

    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonProps;
  const {
    children,
    variant = "primary",
    className = "",
    ...rest
  } = buttonProps;
  const classes = `${baseClassName} ${variants[variant]} ${className}`.trim();

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
