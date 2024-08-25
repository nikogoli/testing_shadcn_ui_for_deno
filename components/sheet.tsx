// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
// @deno-types="../modules/lib/components/dialog.d.ts"
import * as SheetPrimitive from '../modules/esm.sh/v132/_@radix-ui/react-dialog@1.0.5.js'
import * as SheetTypes from "../modules/lib/components/dialog.d.ts"

import IconX from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/x.tsx"

import { VariantProps, cva } from '../modules/esm.sh/class-variance-authority@0.7.0.js'
import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"


const Variants = {
  variants: {
    side: {
      top: `inset-x-0 top-0 border-b
        data-[state=open]:animate-slidein-from-top-full
        data-[state=closed]:animate-slideout-to-top-full`,
      bottom: `inset-x-0 bottom-0 border-t
        data-[state=open]:animate-slidein-from-bottom-full
        data-[state=closed]:animate-slideout-to-bottom-full`,
      left: `inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm
        data-[state=open]:animate-slidein-from-left-full
        data-[state=closed]:animate-slideout-to-left-full`,
      right: `inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm
        data-[state=open]:animate-slidein-from-right-full
        data-[state=closed]:animate-slideout-to-right-full`,
    },
  },
  defaultVariants: {
    side: "right" as const,
  },
}

const classnamesByVariants = cva(
  `fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out
   data-[state=closed]:![animation-duration:.3s] data-[state=open]:![animation-duration:.5s]`,
  { ...Variants }
)


const Sheet = SheetPrimitive.Root
 

const SheetTrigger = SheetPrimitive.Trigger
 

const SheetClose = SheetPrimitive.Close
 

const SheetPortal = SheetPrimitive.Portal


const SheetOverlay = React.forwardRef<
  ElementRef<typeof SheetTypes.Overlay>,
  ComponentPropsWithoutRef<typeof SheetTypes.Overlay>
>(({ class:className, children, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      `fixed inset-0 z-50 bg-black/80
       data-[state=open]:animate-in data-[state=closed]:animate-out`,
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName


interface DialogContentProps
  extends Omit<ComponentPropsWithoutRef<typeof SheetTypes.Content>, "size">,
    VariantProps<typeof classnamesByVariants> {}


const SheetContent = React.forwardRef<
  ElementRef<typeof SheetTypes.Content>,
  DialogContentProps
>(
  ({ side="right", class:className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        className={cn(classnamesByVariants({ side }), className)} {...props}>
        {children}
        <SheetPrimitive.Close
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background
             transition-opacity hover:opacity-100
             focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
             disabled:pointer-events-none data-[state=open]:bg-secondary">
          <IconX class="h-4 w-4" />
          <span class="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
)
SheetContent.displayName = SheetPrimitive.Content.displayName


const SheetHeader = ({ class:className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    class={cn('flex flex-col space-y-2 text-center sm:text-left', className)}
    {...props} />
)
SheetHeader.displayName = 'SheetHeader'


const SheetFooter = ({ class:className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    class={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...props} />
)
SheetFooter.displayName = 'SheetFooter'


const SheetTitle = React.forwardRef<
  ElementRef<typeof SheetTypes.Title>,
  ComponentPropsWithoutRef<typeof SheetTypes.Title>
>(({ class:className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold text-foreground', className)}
    {...props} />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName


const SheetDescription = React.forwardRef<
  ElementRef<typeof SheetTypes.Description>,
  ComponentPropsWithoutRef<typeof SheetTypes.Description>
>(({ class:className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props} />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName


export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  Variants as sheetVariatns
}