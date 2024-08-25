// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
// @deno-types="../modules/lib/components/switch.d.ts"
import * as SwitchPrimitives from '../modules/esm.sh/_@radix-ui/react-switch@1.0.3.js'
import * as SwitchTypes from "../modules/lib/components/switch.d.ts"

import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"


const Switch = React.forwardRef<
  ElementRef<typeof SwitchTypes.Root>,
  ComponentPropsWithoutRef<typeof SwitchTypes.Root>
>(({ class:className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      `peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full
       border-2 border-transparent transition-colors
       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
       focus-visible:ring-offset-2 focus-visible:ring-offset-background 
       disabled:cursor-not-allowed disabled:opacity-50
       data-[state=checked]:bg-primary data-[state=unchecked]:bg-input
       [&+label]:cursor-pointer disabled:[&+label]:cursor-not-allowed`,
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        `pointer-events-none block h-5 w-5 rounded-full bg-background
         shadow-lg ring-0 transition-transform
         data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0`
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName


export { Switch }