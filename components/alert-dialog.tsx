// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
// @deno-types="../modules/lib/components/alert-dialog.d.ts"
import * as AlertDialogPrimitive from '../modules/esm.sh/v132/_@radix-ui/react-alert-dialog@1.0.5.js'
import * as AlertDialogTypes from "../modules/lib/components/alert-dialog.d.ts"

import { cn } from '../modules/lib/utils.ts'
import { classnamesOfButtonByVariants } from './button.tsx'

import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"


const AlertDialog = AlertDialogPrimitive.Root


const AlertDialogTrigger = AlertDialogPrimitive.Trigger


const AlertDialogPortal = AlertDialogPrimitive.Portal


const AlertDialogOverlay = React.forwardRef<
  ElementRef<typeof AlertDialogTypes.Overlay>,
  ComponentPropsWithoutRef<typeof AlertDialogTypes.Overlay>
>(({ class:className, children, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      `fixed inset-0 z-50 bg-black/80
       data-[state=open]:animate-in data-[state=closed]:animate-out`,
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName


const AlertDialogContent = React.forwardRef<
  ElementRef<typeof AlertDialogTypes.Content>,
  ComponentPropsWithoutRef<typeof AlertDialogTypes.Content>
>(({ class:className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        `fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]
        gap-4 border bg-background p-6 shadow-lg ![animation-duration:0.2s] sm:rounded-lg
        data-[state=open]:animate-dialog-in data-[state=closed]:animate-dialog-out`,
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName


const AlertDialogHeader = ({ class:className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    class={cn('flex flex-col space-y-2 text-center sm:text-left', className)}
    {...props} />
)
AlertDialogHeader.displayName = 'AlertDialogHeader'


const AlertDialogFooter = ({ class:className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
     class={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
     {...props} />
)
AlertDialogFooter.displayName = 'AlertDialogFooter'


const AlertDialogTitle = React.forwardRef<
  ElementRef<typeof AlertDialogTypes.Title>,
  ComponentPropsWithoutRef<typeof AlertDialogTypes.Title>
>(({ class:className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold', className)}
    {...props} />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName


const AlertDialogDescription = React.forwardRef<
  ElementRef<typeof AlertDialogTypes.Description>,
  ComponentPropsWithoutRef<typeof AlertDialogTypes.Description>
>(({ class:className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props} />
))
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName


const AlertDialogAction = React.forwardRef<
  ElementRef<typeof AlertDialogTypes.Action>,
  ComponentPropsWithoutRef<typeof AlertDialogTypes.Action>
>(({ class:className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(classnamesOfButtonByVariants(), className)}
    {...props} />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName


const AlertDialogCancel = React.forwardRef<
  ElementRef<typeof AlertDialogTypes.Cancel>,
  ComponentPropsWithoutRef<typeof AlertDialogTypes.Cancel>
>(({ class:className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(classnamesOfButtonByVariants({ variant: 'outline' }), 'mt-2 sm:mt-0', className)}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName


export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
