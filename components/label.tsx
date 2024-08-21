// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
import * as LabelPrimitive from '../modules/esm.sh/v132/_@radix-ui/react-label@2.0.2.js'
import * as AltLabelPrimitive from "../modules/lib/components/label.d.ts"

import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"


const Label = React.forwardRef<
  ElementRef<typeof AltLabelPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AltLabelPrimitive.Root>
>(({ class:className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName


export { Label }