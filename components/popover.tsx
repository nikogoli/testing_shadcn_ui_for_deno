// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
import * as PopoverPrimitive from '../modules/esm.sh/_@radix-ui/react-popover@1.0.7.js'
import * as AltPopoverPrimitive from "../modules/lib/components/popover.d.ts"

import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"


const Popover = PopoverPrimitive.Root


const PopoverTrigger = PopoverPrimitive.Trigger


const PopoverContent = React.forwardRef<
  ElementRef<typeof AltPopoverPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AltPopoverPrimitive.Content>
>(({ class:className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        `z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none
         data-[state=open]:data-[side=left]:animate-slidein-fromright
         data-[state=open]:data-[side=right]:animate-slidein-fromleft
         data-[state=open]:data-[side=top]:animate-slidein-frombottom
         data-[state=open]:data-[side=bottom]:animate-slidein-fromtop
         data-[state=closed]:animate-zoomout-95`,
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName


export { Popover, PopoverTrigger, PopoverContent }