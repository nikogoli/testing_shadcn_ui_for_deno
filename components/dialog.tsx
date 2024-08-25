// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
// @deno-types="../modules/lib/components/dialog.d.ts"
import * as DialogPrimitive from '../modules/esm.sh/v132/_@radix-ui/react-dialog@1.0.5.js'
import * as AltDialogTypes from "../modules/lib/components/dialog.d.ts"

import IconX from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/x.tsx"

import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"


const Dialog = DialogPrimitive.Root


const DialogTrigger = DialogPrimitive.Trigger


const DialogPortal = DialogPrimitive.Portal
 

const DialogClose = DialogPrimitive.Close


const DialogOverlay = React.forwardRef<
  ElementRef<typeof AltDialogTypes.Overlay>,
  ComponentPropsWithoutRef<typeof AltDialogTypes.Overlay>
>(({ class:className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      `fixed inset-0 z-50 bg-black/80
       data-[state=open]:animate-in data-[state=closed]:animate-out`,
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName


const DialogContent = React.forwardRef<
  ElementRef<typeof AltDialogTypes.Content>,
  ComponentPropsWithoutRef<typeof AltDialogTypes.Content>
>(({ class:className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        `fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]
         gap-4 border bg-background p-6 shadow-lg [animation-duration:0.2s] sm:rounded-lg
         data-[state=open]:animate-dialog-in
         data-[state=closed]:animate-dialog-out`,
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background
         transition-opacity hover:opacity-100 disabled:pointer-events-none
         focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
         data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <IconX class="h-4 w-4" />
        <span class="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName


const DialogHeader = ({ class:className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    class={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
    {...props} />
)
DialogHeader.displayName = 'DialogHeader'


const DialogFooter = ({ class:className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    class={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...props} />
)
DialogFooter.displayName = 'DialogFooter'


const DialogTitle = React.forwardRef<
  ElementRef<typeof AltDialogTypes.Title>,
  ComponentPropsWithoutRef<typeof AltDialogTypes.Title>
>(({ class:className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName


const DialogDescription = React.forwardRef<
  ElementRef<typeof AltDialogTypes.Description>,
  ComponentPropsWithoutRef<typeof AltDialogTypes.Description>
>(({ class:className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props} />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName


export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}