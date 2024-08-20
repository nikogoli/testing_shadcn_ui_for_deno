// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
import { VariantProps, cva } from '../modules/esm.sh/class-variance-authority@0.7.0.js'

import { cn } from '../modules/lib/utils.ts'


const Variants = {
  variants: {
    variant: {
      default: 'bg-primary hover:bg-primary/80 border-transparent text-primary-foreground',
      secondary: 'bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground',
      destructive: 'bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground',
      outline: 'text-foreground',
      noColorStyle: '',
    },
  },
  defaultVariants: {
    variant: 'default' as const,
  },
}

const classnamesByVariants = cva(
  'inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  { ...Variants }
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof classnamesByVariants> {}

function Badge({ class:className, variant, ...props }: BadgeProps) {
  return <div className={cn(classnamesByVariants({ variant }), className)} {...props} />
}

export { Badge, Variants as badgeVariants }
