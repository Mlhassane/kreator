import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "dark" | "outline" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-clay text-white shadow-[0_14px_34px_-16px_rgba(217,80,43,0.9)] hover:bg-clay-dark hover:-translate-y-0.5",
  dark: "bg-ink text-cream hover:bg-ink-2 hover:-translate-y-0.5 shadow-[0_14px_34px_-18px_rgba(19,17,16,0.9)]",
  outline:
    "border border-ink/15 bg-transparent text-ink hover:border-ink/35 hover:bg-ink/[0.04]",
  ghost: "text-ink hover:bg-ink/[0.06]",
  light:
    "bg-cream text-ink hover:bg-white hover:-translate-y-0.5 shadow-[0_14px_34px_-18px_rgba(0,0,0,0.5)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 gap-1.5 px-4 text-[13px]",
  md: "h-11 gap-2 px-5 text-sm",
  lg: "h-13 gap-2.5 px-7 text-[15px]",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
  type?: never;
  onClick?: never;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(
    "inline-flex select-none items-center justify-center rounded-full font-medium tracking-[-0.01em] transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
