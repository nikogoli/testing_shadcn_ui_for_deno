// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
// @deno-types="../modules/lib/components/popover.d.ts"
import * as PopoverPrimitive from '../modules/esm.sh/_@radix-ui/react-popover@1.0.7.js'
import * as PopoverTypes from "../modules/lib/components/popover.d.ts"

import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"


const Popover = PopoverPrimitive.Root


const PopoverTrigger = PopoverPrimitive.Trigger


const PopoverContent = React.forwardRef<
  ElementRef<typeof PopoverTypes.Content>,
  ComponentPropsWithoutRef<typeof PopoverTypes.Content>
>(({ class:className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        `z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none
         data-[state=open]:data-[side=left]:animate-slidein-from-right-50
         data-[state=open]:data-[side=right]:animate-slidein-from-left-50
         data-[state=open]:data-[side=top]:animate-slidein-from-bottom-50
         data-[state=open]:data-[side=bottom]:animate-slidein-from-top-50
         data-[state=closed]:animate-zoomout-95`,
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName


export {
  Popover,
  PopoverTrigger,
  PopoverContent
}