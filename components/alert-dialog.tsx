// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
import * as AlertDialogPrimitive from '../modules/esm.sh/v132/_@radix-ui/react-alert-dialog@1.0.5.js'
import * as AltAlertDialogPrimitive from "../modules/lib/components/alert-dialog.d.ts"

import { cva } from "../modules/esm.sh/class-variance-authority@0.7.0.js"
import { cn } from '../modules/lib/utils.ts'
import { buttonVariants } from './button.tsx'

import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"


const AlertDialog:typeof AltAlertDialogPrimitive.Root = AlertDialogPrimitive.Root


const AlertDialogTrigger:typeof AltAlertDialogPrimitive.Trigger = AlertDialogPrimitive.Trigger


const AlertDialogPortal: typeof AltAlertDialogPrimitive.Portal = AlertDialogPrimitive.Portal


const AlertDialogOverlay = React.forwardRef<
  ElementRef<typeof AltAlertDialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof AltAlertDialogPrimitive.Overlay>
>(({ class:className, children, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      `fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out`,
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName


const AlertDialogContent = React.forwardRef<
  ElementRef<typeof AltAlertDialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AltAlertDialogPrimitive.Content>
>(({ class:className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        `fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]
        gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg
        data-[state=open]:animate-dialog-in data-[state=closed]:animate-dialog-out`,
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName


const AlertDialogHeader = ({ class:className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div class={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
)
AlertDialogHeader.displayName = 'AlertDialogHeader'


const AlertDialogFooter = ({ class:className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div class={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
)
AlertDialogFooter.displayName = 'AlertDialogFooter'


const AlertDialogTitle = React.forwardRef<
  ElementRef<typeof AltAlertDialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof AltAlertDialogPrimitive.Title>
>(({ class:className, ...props }, ref) => (
  <AlertDialogPrimitive.Title ref={ref} className={cn('text-lg font-semibold', className)} {...props} />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName


const AlertDialogDescription = React.forwardRef<
  ElementRef<typeof AltAlertDialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof AltAlertDialogPrimitive.Description>
>(({ class:className, ...props }, ref) => (
  <AlertDialogPrimitive.Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
))
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName


/* same as ./button.tsx */
const classnamesByVariantsForButton = cva(
  `inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50`,
  { ...buttonVariants}
)


const AlertDialogAction = React.forwardRef<
  ElementRef<typeof AltAlertDialogPrimitive.Action>,
  ComponentPropsWithoutRef<typeof AltAlertDialogPrimitive.Action>
>(({ class:className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref}
    className={cn(classnamesByVariantsForButton(), className)} {...props} />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName


const AlertDialogCancel = React.forwardRef<
  ElementRef<typeof AltAlertDialogPrimitive.Cancel>,
  ComponentPropsWithoutRef<typeof AltAlertDialogPrimitive.Cancel>
>(({ class:className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(classnamesByVariantsForButton({ variant: 'outline' }), 'mt-2 sm:mt-0', className)}
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
