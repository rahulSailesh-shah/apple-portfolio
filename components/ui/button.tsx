import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium uppercase tracking-wider ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-mono",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-all duration-200",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-200",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-200",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-all duration-200",
        link: "text-primary underline-offset-4 hover:underline transition-all duration-200",
        gradient:
          "bg-gradient-to-r from-[hsl(var(--hero-glow))] to-[hsl(var(--hero-accent))] text-white hover:opacity-90 transition-all duration-200",
        "gradient-outline":
          "border-2 border-transparent bg-gradient-to-r from-[hsl(var(--hero-glow))] to-[hsl(var(--hero-accent))] bg-clip-border relative before:absolute before:inset-0 before:rounded-md before:p-[2px] before:bg-gradient-to-r before:from-[hsl(var(--hero-glow))] before:to-[hsl(var(--hero-accent))] before:-z-10 before:blur-sm hover:opacity-90 transition-all duration-200",
        glass:
          "glass-panel text-foreground hover:bg-white/10 transition-all duration-200",
        cta:
          "bg-white text-black hover:bg-white/90 transition-all duration-200 font-medium",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
