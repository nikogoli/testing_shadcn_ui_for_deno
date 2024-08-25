// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
// @deno-types="../modules/lib/components/dropdown-menu.d.ts"
import * as DropdownMenuPrimitive from '../modules/esm.sh/v132/_@radix-ui/react-dropdown-menu@2.0.6.js'
import * as DropdownMenuTypes from "../modules/lib/components/dropdown-menu.d.ts"

import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/chevron-right.tsx"
import IconCheck from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/check.tsx"
import IconCircleFilled from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/circle-filled.tsx"

import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"


const DropdownMenu = DropdownMenuPrimitive.Root


const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger


const DropdownMenuGroup = DropdownMenuPrimitive.Group


const DropdownMenuPortal = DropdownMenuPrimitive.Portal


const DropdownMenuSub = DropdownMenuPrimitive.Sub


const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup


const DropdownMenuSubTrigger = React.forwardRef<
  ElementRef<typeof DropdownMenuTypes.SubTrigger>,
  ComponentPropsWithoutRef<typeof DropdownMenuTypes.SubTrigger> & {
    inset?: boolean
  }
>(({ class:className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      `flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none
       focus:bg-accent data-[state=open]:bg-accent`,
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <IconChevronRight class="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName


const DropdownMenuSubContent = React.forwardRef<
  ElementRef<typeof DropdownMenuTypes.SubContent>,
  ComponentPropsWithoutRef<typeof DropdownMenuTypes.SubContent>
>(({ class:className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      `z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg
        data-[state=open]:data-[side=left]:animate-slidein-from-right-50
        data-[state=open]:data-[side=right]:animate-slidein-from-left-50
        data-[state=open]:data-[side=top]:animate-slidein-from-bottom-50
        data-[state=open]:data-[side=bottom]:animate-slidein-from-top-50
        data-[state=closed]:animate-zoomout-95`,
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName


const DropdownMenuContent = React.forwardRef<
  ElementRef<typeof DropdownMenuTypes.Content>,
  ComponentPropsWithoutRef<typeof DropdownMenuTypes.Content>
>(({ class:className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        `z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md
         data-[state=open]:data-[side=left]:animate-slidein-from-right-50
         data-[state=open]:data-[side=right]:animate-slidein-from-left-50
         data-[state=open]:data-[side=top]:animate-slidein-from-bottom-50
         data-[state=open]:data-[side=bottom]:animate-slidein-from-top-50
         data-[state=closed]:animate-zoomout-95`,
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName


const DropdownMenuItem = React.forwardRef<
  ElementRef<typeof DropdownMenuTypes.Item>,
  ComponentPropsWithoutRef<typeof DropdownMenuTypes.Item> & {
    inset?: boolean
  }
>(({ class:className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      `relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none 
       transition-colors focus:bg-accent focus:text-accent-foreground
       data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName


const DropdownMenuCheckboxItem = React.forwardRef<
  ElementRef<typeof DropdownMenuTypes.CheckboxItem>,
  ComponentPropsWithoutRef<typeof DropdownMenuTypes.CheckboxItem>
>(({ class:className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      `relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none
       transition-colors focus:bg-accent focus:text-accent-foreground
       data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      className
    )}
    checked={checked}
    {...props}
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <IconCheck class="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName


const DropdownMenuRadioItem = React.forwardRef<
  ElementRef<typeof DropdownMenuTypes.RadioItem>,
  ComponentPropsWithoutRef<typeof DropdownMenuTypes.RadioItem>
>(({ class:className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      `relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none
       transition-colors focus:bg-accent focus:text-accent-foreground
       data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      className
    )}
    {...props}
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <IconCircleFilled class='h-2 w-2' />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName


const DropdownMenuLabel = React.forwardRef<
  ElementRef<typeof DropdownMenuTypes.Label>,
  ComponentPropsWithoutRef<typeof DropdownMenuTypes.Label> & {
    inset?: boolean
  }
>(({ class:className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName


const DropdownMenuSeparator = React.forwardRef<
  ElementRef<typeof DropdownMenuTypes.Separator>,
  ComponentPropsWithoutRef<typeof DropdownMenuTypes.Separator>
>(({ class:className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-border/60', className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName


const DropdownMenuShortcut = ({ class:className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn('ml-auto text-xs tracking-widest opacity-60', className)} {...props} />
}
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'


export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
