// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
import * as ToggleGroupPrimitive from "https://esm.sh/*@radix-ui/react-toggle-group@1.1.0?alias=react:preact/compat"

import { classnamesOfToggleByVariants } from "./toggle.tsx"
import { VariantProps } from '../modules/esm.sh/class-variance-authority@0.7.0.js'
import { cn } from "../modules/lib/utils.ts"
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"


const ToggleGroupContext = React.createContext<
  VariantProps<typeof classnamesOfToggleByVariants>
>({
  size: "default",
  variant: "default",
})

const ToggleGroup = React.forwardRef<
  ElementRef<typeof ToggleGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof classnamesOfToggleByVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  ElementRef<typeof ToggleGroupPrimitive.Item>,
  ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof classnamesOfToggleByVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        classnamesOfToggleByVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName


export {
  ToggleGroup,
  ToggleGroupItem
}
