// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
// @deno-types="../modules/lib/components/checkbox.d.ts"
import * as CheckboxPrimitive from '../modules/esm.sh/v132/_@radix-ui/react-checkbox@1.0.4.js'
import * as CheckboxTypes from "../modules/lib/components/checkbox.d.ts"

import IconCheck from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/check.tsx"

import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"


const Checkbox = React.forwardRef<
  ElementRef<typeof CheckboxTypes.Root>,
  ComponentPropsWithoutRef<typeof CheckboxTypes.Root>
>(({ class:className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      `peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background
       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
       disabled:cursor-not-allowed disabled:opacity-50
       data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground
       [&+label]:cursor-pointer
       disabled:[&+label]:cursor-not-allowed disabled:[&+label]:opacity-70`,
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
      <IconCheck class='h-4 w-4' />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName


export { Checkbox }