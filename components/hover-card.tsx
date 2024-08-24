// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
import * as HoverCardPrimitive from '../modules/esm.sh/v132/_@radix-ui/react-hover-card@1.0.7.js'
import * as AltHoverCardPrimitive from "../modules/lib/components/hover-card.d.ts"

import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"


const HoverCard = HoverCardPrimitive.Root


const HoverCardTrigger = HoverCardPrimitive.Trigger


const HoverCardContent = React.forwardRef<
  ElementRef<typeof AltHoverCardPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AltHoverCardPrimitive.Content>
>(({ class:className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      `z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none
       data-[state=open]:data-[side=left]:animate-slidein-fromright
       data-[state=open]:data-[side=right]:animate-slidein-fromleft
       data-[state=open]:data-[side=top]:animate-slidein-frombottom
       data-[state=open]:data-[side=bottom]:animate-slidein-fromtop
       data-[state=closed]:animate-zoomout-95`,
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName


export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
}