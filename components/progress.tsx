// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
// @deno-types="../modules/lib/components/progress.d.ts"
import * as ProgressPrimitive from "../modules/esm.sh/@radix-ui/react-progress@1.1.0.js"
import * as ProgressTypes from "../modules/lib/components/progress.d.ts"

import { cn } from "../modules/lib/utils.ts"
import {
  ElementRef,
  ComponentPropsWithoutRef,
} from "../modules/lib/type-utils.ts"


const Progress = React.forwardRef<
  ElementRef<typeof ProgressTypes.Root>,
  ComponentPropsWithoutRef<typeof ProgressTypes.Root>
>(({ class:className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName


export { Progress }
