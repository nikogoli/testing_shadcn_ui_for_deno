// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
// @deno-types="../modules/lib/type-utils-cmdk.d.ts"
import { Command as CommandPrimitive } from '../modules/esm.sh/_cmdk@0.2.0.js'
import { Command as CommandTypes } from "../modules/lib/type-utils-cmdk.d.ts"
import { Root as DialogRoot } from "../modules/lib/components/dialog.d.ts";

import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"

import IconSearch from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/search.tsx"
import { Dialog, DialogContent } from './dialog.tsx'


type DialogProps = ComponentPropsWithoutRef<typeof DialogRoot>


const Command = React.forwardRef<
  ElementRef<typeof CommandTypes>,
  ComponentPropsWithoutRef<typeof CommandTypes>
>(({ class:className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName



interface CommandDialogProps extends DialogProps {}
const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent class="overflow-hidden p-0 shadow-2xl">
        <Command
          class="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium
            [&_[cmdk-group-heading]]:text-muted-foreground
            [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2
            [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5
            [&_[cmdk-input]]:h-12
            [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}


const CommandInput = React.forwardRef<
  ElementRef<typeof CommandTypes.Input>,
  ComponentPropsWithoutRef<typeof CommandTypes.Input>
>(({ class:className, ...props }, ref) => (
  <div class="flex items-center border-b px-3" cmdk-input-wrapper="">
    <IconSearch class="flex mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        `flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none
         placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50`,
        className
      )}
      {...props}
    />
  </div>
))
CommandInput.displayName = CommandPrimitive.Input.displayName


const CommandList = React.forwardRef<
  ElementRef<typeof CommandTypes.List>,
  ComponentPropsWithoutRef<typeof CommandTypes.List>
>(({ class:className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
))
CommandList.displayName = CommandPrimitive.List.displayName


const CommandEmpty = React.forwardRef<
  ElementRef<typeof CommandTypes.Empty>,
  ComponentPropsWithoutRef<typeof CommandTypes.Empty>
>((props, ref) => 
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props} />)
CommandEmpty.displayName = CommandPrimitive.Empty.displayName


const CommandGroup = React.forwardRef<
  ElementRef<typeof CommandTypes.Group>,
  ComponentPropsWithoutRef<typeof CommandTypes.Group>
>(({ class:className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      `overflow-hidden p-1 text-foreground 
      [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs
      [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground`,
      className
    )}
    {...props}
  />
))
CommandGroup.displayName = CommandPrimitive.Group.displayName


const CommandSeparator = React.forwardRef<
  ElementRef<typeof CommandTypes.Separator>,
  ComponentPropsWithoutRef<typeof CommandTypes.Separator>
>(({ class:className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 h-px bg-border', className)}
    {...props} />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName


const CommandItem = React.forwardRef<
  ElementRef<typeof CommandTypes.Item>,
  ComponentPropsWithoutRef<typeof CommandTypes.Item>
>(({ class:className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      `relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none
       data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground
       aria-[disabled=true]:pointer-events-none aria-[disabled=true]:opacity-50`,
      className // ↑ somehow 'data-disabled' is not added to an element, so use 'aria-disabled' instead. (nikogoli)
    )}
    {...props}
  />
))
CommandItem.displayName = CommandPrimitive.Item.displayName


const CommandShortcut = ({ class:className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span class={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)} {...props} />
}
CommandShortcut.displayName = 'CommandShortcut'


export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}