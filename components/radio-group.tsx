// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
import * as RadioGroupPrimitive from "../modules/esm.sh/_@radix-ui/react-radio-group@1.1.3.js"
import * as AltRadioGroupPrimitive from "../modules/lib/components/radio-group.d.ts"
import IconCircleFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/circle-filled.tsx"

import { cn } from "../modules/lib/utils.ts"
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"


const RadioGroup = React.forwardRef<
  ElementRef<typeof AltRadioGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AltRadioGroupPrimitive.Root>
>(({ class:className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName


const RadioGroupItem = React.forwardRef<
  ElementRef<typeof AltRadioGroupPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AltRadioGroupPrimitive.Item>
>(({ class:className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        `aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background
         focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
         [&+label]:cursor-pointer
         disabled:cursor-not-allowed disabled:opacity-50
         disabled:[&+label]:cursor-not-allowed disabled:[&+label]:opacity-50`,
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <IconCircleFilled class="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName


export { RadioGroup, RadioGroupItem }