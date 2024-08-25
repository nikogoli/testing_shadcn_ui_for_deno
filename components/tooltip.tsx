// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
// @deno-types="../modules/lib/components/tooltip.d.ts"
import * as TooltipPrimitive from '../modules/esm.sh/_@radix-ui/react-tooltip@1.0.7.js'
import * as TooltipTypes from "../modules/lib/components/tooltip.d.ts"

import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"


const TooltipProvider = TooltipPrimitive.Provider


const Tooltip = TooltipPrimitive.Root


const TooltipTrigger = TooltipPrimitive.Trigger


const TooltipContent = React.forwardRef<
  ElementRef<typeof TooltipTypes.Content>,
  ComponentPropsWithoutRef<typeof TooltipTypes.Content>
>(({ class:className, sideOffset=4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      `z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5
       text-sm text-popover-foreground shadow-md
       data-[side=left]:animate-slidein-from-right-50
       data-[side=right]:animate-slidein-from-left-50
       data-[side=top]:animate-slidein-from-bottom-50
       data-[side=bottom]:animate-slidein-from-top-50
       data-[state=closed]:animate-zoomout-95`,
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName


export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider
}