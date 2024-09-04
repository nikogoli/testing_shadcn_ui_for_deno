// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
// @deno-types="../modules/lib/components/scroll-area.d.ts"
import * as ScrollAreaPrimitive from "../modules/esm.sh/_@radix-ui/react-scroll-area@1.1.0.proxied.js"
import * as ScrollAreaTypes from "../modules/lib/components/scroll-area.d.ts"

import { cn } from "../modules/lib/utils.ts"
import {
  ElementRef,
  ComponentPropsWithoutRef,
} from "../modules/lib/type-utils.ts"


const ScrollArea = React.forwardRef<
  ElementRef<typeof ScrollAreaTypes.Root>,
  ComponentPropsWithoutRef<typeof ScrollAreaTypes.Root>
>(({ class:className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName


const ScrollBar = React.forwardRef<
  ElementRef<typeof ScrollAreaTypes.Scrollbar>,
  ComponentPropsWithoutRef<typeof ScrollAreaTypes.Scrollbar>
>(({ class:className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.Scrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.Scrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName


export {
  ScrollArea,
  ScrollBar
}