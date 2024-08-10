// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
import * as LabelPrimitive from '@radix-ui/react-label'
import * as AltLabelPrimitive from "../modules/lib/components/label.d.ts"
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"

const labelVariants = cva('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70')

const Label = React.forwardRef<
  ElementRef<typeof AltLabelPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AltLabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ class:className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
