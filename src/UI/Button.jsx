import React from "react";

// যদি class-variance-authority ইনস্টল না থাকে:
// npm install class-variance-authority
import { cva } from "class-variance-authority";

// Simple cn helper function
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Button Variants
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero:
          "bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg hover:shadow-glow hover:-translate-y-1 transition-all duration-300",
        "hero-outline":
          "border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-semibold",
        urgent:
          "bg-urgent text-primary-foreground animate-pulse-slow hover:animate-none hover:bg-urgent/90 shadow-lg font-semibold",
        success:
          "bg-success text-success-foreground hover:bg-success/90 shadow-md",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Button Component
export const Button = React.forwardRef(function Button(
  { className, variant, size, children, ...props },
  ref
) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
