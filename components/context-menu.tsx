// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
// @deno-types="../modules/lib/components/context-menu.d.ts"
import * as ContextMenuPrimitive from '../modules/esm.sh/v132/_@radix-ui/react-context-menu@2.1.5.js'
import * as ContextMenuTypes from "../modules/lib/components/context-menu.d.ts"

import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/chevron-right.tsx"
import IconCheck from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/check.tsx"
import IconCircleFilled from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/circle-filled.tsx"

import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"


const ContextMenu = ContextMenuPrimitive.Root


const ContextMenuTrigger = ContextMenuPrimitive.Trigger


const ContextMenuGroup = ContextMenuPrimitive.Group


const ContextMenuPortal = ContextMenuPrimitive.Portal


const ContextMenuSub = ContextMenuPrimitive.Sub


const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup


const ContextMenuSubTrigger = React.forwardRef<
  ElementRef<typeof ContextMenuTypes.SubTrigger>,
  ComponentPropsWithoutRef<typeof ContextMenuTypes.SubTrigger> & {
    inset?: boolean
  }
>(({ class:className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      `flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none
       focus:bg-accent focus:text-accent-foreground
       data-[state=open]:bg-accent data-[state=open]:text-accent-foreground`,
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <IconChevronRight class="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName



const ContextMenuSubContent = React.forwardRef<
  ElementRef<typeof ContextMenuTypes.SubContent>,
  ComponentPropsWithoutRef<typeof ContextMenuTypes.SubContent>
>(({ class:className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
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
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName


const ContextMenuContent = React.forwardRef<
  ElementRef<typeof ContextMenuTypes.Content>,
  ComponentPropsWithoutRef<typeof ContextMenuTypes.Content>
>(({ class:className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
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
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName


const ContextMenuItem = React.forwardRef<
  ElementRef<typeof ContextMenuTypes.Item>,
  ComponentPropsWithoutRef<typeof ContextMenuTypes.Item> & {
    inset?: boolean
  }
>(({ class:className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      `relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none
       focus:bg-accent focus:text-accent-foreground
       data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName


const ContextMenuCheckboxItem = React.forwardRef<
  ElementRef<typeof ContextMenuTypes.CheckboxItem>,
  ComponentPropsWithoutRef<typeof ContextMenuTypes.CheckboxItem>
>(({ class:className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      `relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none
       focus:bg-accent focus:text-accent-foreground
       data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      className
    )}
    checked={checked}
    {...props}
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <IconCheck class="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName


const ContextMenuRadioItem = React.forwardRef<
  ElementRef<typeof ContextMenuTypes.RadioItem>,
  ComponentPropsWithoutRef<typeof ContextMenuTypes.RadioItem>
>(({ class:className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      `relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none
       focus:bg-accent focus:text-accent-foreground
       data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      className
    )}
    {...props}
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <IconCircleFilled class="h-2 w-2 text-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName


const ContextMenuLabel = React.forwardRef<
  ElementRef<typeof ContextMenuTypes.Label>,
  ComponentPropsWithoutRef<typeof ContextMenuTypes.Label> & {
    inset?: boolean
  }
>(({ class:className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn('px-2 py-1.5 text-sm font-semibold text-foreground', inset && 'pl-8', className)}
    {...props}
  />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName


const ContextMenuSeparator = React.forwardRef<
  ElementRef<typeof ContextMenuTypes.Separator>,
  ComponentPropsWithoutRef<typeof ContextMenuTypes.Separator>
>(({ class:className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-border', className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName


const ContextMenuShortcut = ({ class:className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span class={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)} {...props} />
}
ContextMenuShortcut.displayName = 'ContextMenuShortcut'


export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
