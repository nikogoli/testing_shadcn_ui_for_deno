// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
import { VariantProps, cva } from "../modules/esm.sh/class-variance-authority@0.7.0.js"

import { cn } from "../modules/lib/utils.ts"


const Variants = {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/80",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
      outline: "border border-input hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/60",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "underline-offset-4 hover:underline text-primary",
      noColorStyle: '',
    },
    size: {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3 rounded-md",
      lg: "h-11 px-8 rounded-md",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "default" as const,
    size: "default" as const,
  },
}

const classnamesByVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50`,
  { ...Variants}
)


interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "size">,
    VariantProps<typeof classnamesByVariants> {}


const Button = React.forwardRef<
  HTMLButtonElement, ButtonProps
>(({ class:className, variant, size, ...props }, ref) => {
  return (
    <button
      class={cn(classnamesByVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"


export {
  Button,
  Variants as buttonVariants,
  classnamesByVariants as classnamesOfButtonByVariants
}