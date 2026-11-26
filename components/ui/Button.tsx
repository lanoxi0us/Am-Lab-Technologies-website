import { ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-lg font-display font-semibold tracking-[-0.01em] transition-all duration-200 ease-smooth active:translate-y-px disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-500 text-white shadow-[0_1px_2px_rgba(5,46,22,0.2)] hover:bg-brand-600 hover:shadow-glow-brand",
        secondary:
          "border border-neutral-900/15 bg-white/60 text-neutral-900 backdrop-blur-sm hover:border-brand-400 hover:bg-white hover:text-brand-700",
        "secondary-on-dark":
          "border border-white/25 text-white hover:border-brand-400 hover:bg-white/[0.07]",
        "on-dark":
          "bg-white text-neutral-900 hover:bg-brand-50 hover:text-brand-800",
        ghost: "text-neutral-900 hover:bg-neutral-900/[0.05]",
        "ghost-on-dark": "text-white hover:bg-white/10",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-5 py-2.5 text-base",
        lg: "px-7 py-3.5 text-base md:text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  href?: string;
  external?: boolean;
}

/**
 * Shared Button. Renders a <Link> when `href` is supplied, otherwise a
 * native <button>. Hover is a lift plus a soft green glow on the primary
 * variant — enough presence to feel premium, no colour inversion.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, external, children, ...props }, ref) => {
    const classes = cn(buttonStyles({ variant, size }), className);

    if (href) {
      const isInternal = href.startsWith("/") || href.startsWith("#");
      if (isInternal && !external) {
        return (
          <Link href={href} className={classes}>
            {children}
          </Link>
        );
      }
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
