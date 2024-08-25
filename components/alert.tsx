// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
import { VariantProps, cva } from '../modules/esm.sh/class-variance-authority@0.7.0.js'

import { cn } from '../modules/lib/utils.ts'


const Variants = {
  variants: {
    variant: {
      default: `bg-background text-foreground [&>svg]:text-foreground`,
      destructive:
        `border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive`,
      noColorStyle: ''
    },
  },
  defaultVariants: {
    variant: 'destructive' as const,
  },
}

const classnamesByVariants = cva(
  `relative w-full rounded-lg border p-4
  [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px]
  [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4`,
  {...Variants}
)


const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof classnamesByVariants>
>(({ class:className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    class={cn(classnamesByVariants({ variant }), className)}
    {...props} />
))
Alert.displayName = 'Alert'


const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ class:className, ...props }, ref) => (
  <h5
    ref={ref}
    class={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props} />
))
AlertTitle.displayName = 'AlertTitle'


const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ class:className, ...props }, ref) => (
  <div
    ref={ref}
    class={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props} />
))
AlertDescription.displayName = 'AlertDescription'


export {
  Alert,
  AlertTitle,
  AlertDescription,
  Variants as AlertVariants
}