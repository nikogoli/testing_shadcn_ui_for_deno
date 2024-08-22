// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
import * as SliderPrimitive from '../modules/esm.sh/_@radix-ui/react-slider@1.1.2.js'
import * as AltSliderPrimitive from "../modules/lib/components/slider.d.ts"

import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"


const Slider = React.forwardRef<
  ElementRef<typeof AltSliderPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AltSliderPrimitive.Root>
>(({ class:className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn('relative flex w-full touch-none select-none items-center', className)}
    {...props}
  >
    <SliderPrimitive.Track
      className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block h-5 w-5 rounded-full border-2 border-primary bg-background
       ring-offset-background transition-colors hover:cursor-grab active:cursor-grabbing
       focus-visible:outline-none focus-visible:ring-2
       focus-visible:ring-ring focus-visible:ring-offset-2
       disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName


export { Slider }