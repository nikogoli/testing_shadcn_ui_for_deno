// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
// @deno-types="../modules/lib/components/toggle.d.ts"
import * as TogglePrimitive from '../modules/esm.sh/v132/_@radix-ui/react-toggle@1.0.3.js'
import * as ToggleTypes from "../modules/lib/components/toggle.d.ts"

import { VariantProps, cva } from '../modules/esm.sh/class-variance-authority@0.7.0.js'
import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"


const Variants = {
  variants: {
    variant: {
      default: 'bg-transparent',
      outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
    },
    size: {
      default: 'h-10 px-3',
      sm: 'h-9 px-2.5',
      lg: 'h-11 px-5',
    },
  },
  defaultVariants: {
    variant: 'default' as const,
    size: 'default' as const,
  }
}


const classnamesByVariants = cva(
  `inline-flex items-center justify-center rounded-md text-sm font-medium
   ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground
   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
   disabled:pointer-events-none disabled:opacity-50
   data-[state=on]:bg-accent data-[state=on]:text-accent-foreground`,
  { ... Variants }
)


const Toggle = React.forwardRef<
  ElementRef<typeof ToggleTypes.Root>,
  ComponentPropsWithoutRef<typeof ToggleTypes.Root> & VariantProps<typeof classnamesByVariants>
>(({ class:className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(classnamesByVariants({ variant, size, className }))}
    {...props} />
))

Toggle.displayName = TogglePrimitive.Root.displayName


export {
  Toggle,
  Variants as toggleVariants
}