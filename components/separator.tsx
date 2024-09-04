// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
// @deno-types="../modules/lib/components/separator.d.ts"
import * as SeparatorPrimitive from "../modules/esm.sh/_@radix-ui/react-separator@1.1.0.js"
import * as SeparatorTypes from "../modules/lib/components/separator.d.ts"

import { cn } from "../modules/lib/utils.ts"
import {
  ElementRef,
  ComponentPropsWithoutRef,
} from "../modules/lib/type-utils.ts"


const Separator = React.forwardRef<
  ElementRef<typeof SeparatorTypes.Root>,
  ComponentPropsWithoutRef<typeof SeparatorTypes.Root>
>(
  ({ class:className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName


export { Separator }