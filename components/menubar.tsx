// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
// @deno-types="../modules/lib/components/menubar.d.ts"
import * as MenubarPrimitive from '../modules/esm.sh/v132/_@radix-ui/react-menubar@1.0.4.js'
import * as MenubarTypes from "../modules/lib/components/menubar.d.ts"

import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/chevron-right.tsx"
import IconCheck from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/check.tsx"
import IconCircleFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/circle-filled.tsx"

import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"


const MenubarMenu = MenubarPrimitive.Menu


const MenubarGroup = MenubarPrimitive.Group


const MenubarPortal = MenubarPrimitive.Portal


const MenubarSub = MenubarPrimitive.Sub


const MenubarRadioGroup = MenubarPrimitive.RadioGroup


const Menubar = React.forwardRef<
  ElementRef<typeof MenubarTypes.Root>,
  ComponentPropsWithoutRef<typeof MenubarTypes.Root>
>(({ class:className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn('flex h-10 items-center space-x-1 rounded-md border bg-background p-1', className)}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName


const MenubarTrigger = React.forwardRef<
  ElementRef<typeof MenubarTypes.Trigger>,
  ComponentPropsWithoutRef<typeof MenubarTypes.Trigger>
>(({ class:className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      `flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium
       outline-none focus:bg-accent focus:text-accent-foreground
       data-[state=open]:bg-accent data-[state=open]:text-accent-foreground`,
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName


const MenubarSubTrigger = React.forwardRef<
  ElementRef<typeof MenubarTypes.SubTrigger>,
  ComponentPropsWithoutRef<typeof MenubarTypes.SubTrigger> & {
    inset?: boolean
  }
>(({ class:className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      `flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm
       outline-none focus:bg-accent focus:text-accent-foreground
       data-[state=open]:bg-accent data-[state=open]:text-accent-foreground`,
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <IconChevronRight class="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName


const MenubarSubContent = React.forwardRef<
  ElementRef<typeof MenubarTypes.SubContent>,
  ComponentPropsWithoutRef<typeof MenubarTypes.SubContent>
>(({ class:className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      `z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground
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
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName


const MenubarContent = React.forwardRef<
  ElementRef<typeof MenubarTypes.Content>,
  ComponentPropsWithoutRef<typeof MenubarTypes.Content>
>(({ class:className, align = 'start', alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        `z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md
         data-[state=open]:data-[side=left]:animate-slidein-from-right-50
         data-[state=open]:data-[side=right]:animate-slidein-from-left-50
         data-[state=open]:data-[side=top]:animate-slidein-from-bottom-50
         data-[state=open]:data-[side=bottom]:animate-slidein-from-top-50`,
        className
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
))
MenubarContent.displayName = MenubarPrimitive.Content.displayName


const MenubarItem = React.forwardRef<
  ElementRef<typeof MenubarTypes.Item>,
  ComponentPropsWithoutRef<typeof MenubarTypes.Item> & {
    inset?: boolean
  }
>(({ class:className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      `relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm
       outline-none focus:bg-accent focus:text-accent-foreground
       data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName


const MenubarCheckboxItem = React.forwardRef<
  ElementRef<typeof MenubarTypes.CheckboxItem>,
  ComponentPropsWithoutRef<typeof MenubarTypes.CheckboxItem>
>(({ class:className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      `relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm
       outline-none focus:bg-accent focus:text-accent-foreground
       data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      className
    )}
    checked={checked}
    {...props}
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <IconCheck class="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName


const MenubarRadioItem = React.forwardRef<
  ElementRef<typeof MenubarTypes.RadioItem>,
  ComponentPropsWithoutRef<typeof MenubarTypes.RadioItem>
>(({ class:className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      `relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm
       outline-none focus:bg-accent focus:text-accent-foreground
       data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      className
    )}
    {...props}
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <IconCircleFilled class="h-2 w-2 text-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName


const MenubarLabel = React.forwardRef<
  ElementRef<typeof MenubarTypes.Label>,
  ComponentPropsWithoutRef<typeof MenubarTypes.Label> & {
    inset?: boolean
  }
>(({ class:className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName


const MenubarSeparator = React.forwardRef<
  ElementRef<typeof MenubarTypes.Separator>,
  ComponentPropsWithoutRef<typeof MenubarTypes.Separator>
>(({ class:className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props} />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName


const MenubarShortcut = ({ class:className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span class={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)} {...props} />
}
MenubarShortcut.displayname = 'MenubarShortcut'


export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
