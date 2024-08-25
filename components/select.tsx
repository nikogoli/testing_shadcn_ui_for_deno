// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
// @deno-types="../modules/lib/components/select.d.ts"
import * as SelectPrimitive from '../modules/esm.sh/v132/_@radix-ui/react-select@2.0.0.js'
import * as SelectTypes from "../modules/lib/components/select.d.ts"

import IconChevronDown from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/chevron-down.tsx"
import IconChevronUp from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/chevron-up.tsx"
import IconCheck from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/check.tsx"

import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"


const Select = SelectPrimitive.Root


const SelectGroup = SelectPrimitive.Group


const SelectValue = SelectPrimitive.Value


const SelectTrigger = React.forwardRef<
  ElementRef<typeof SelectTypes.Trigger>,
  ComponentPropsWithoutRef<typeof SelectTypes.Trigger>
>(({ class:className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      `flex h-10 w-full items-center justify-between rounded-md border border-input bg-background
       px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground
       focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
       disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1`,
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <IconChevronDown class="ml-0.5 h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName


const SelectScrollUpButton = React.forwardRef<
  ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <IconChevronUp class="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName
 

const SelectScrollDownButton = React.forwardRef<
  ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <IconChevronDown class="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName



const SelectContent = React.forwardRef<
  ElementRef<typeof SelectTypes.Content>,
  ComponentPropsWithoutRef<typeof SelectTypes.Content>
>(({ class:className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        `relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border
         bg-popover text-popover-foreground shadow-md
         data-[state=open]:data-[side=left]:animate-slidein-from-right-50
         data-[state=open]:data-[side=right]:animate-slidein-from-left-50
         data-[state=open]:data-[side=top]:animate-slidein-from-bottom-50
         data-[state=open]:data-[side=bottom]:animate-slidein-from-top-50
         data-[state=closed]:animate-zoomout-95`,
        position === 'popper' && `
         data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1
         data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1`,
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName


const SelectLabel = React.forwardRef<
  ElementRef<typeof SelectTypes.Label>,
  ComponentPropsWithoutRef<typeof SelectTypes.Label>
>(({ class:className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    {...props} />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName


const SelectItem = React.forwardRef<
  ElementRef<typeof SelectTypes.Item>,
  ComponentPropsWithoutRef<typeof SelectTypes.Item>
>(({ class:className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      `relative flex w-full cursor-default select-none items-center rounded-sm
       py-1.5 pl-8 pr-2 text-sm outline-none
       focus:bg-accent focus:text-accent-foreground
       data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      className
    )}
    {...props}
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <IconCheck class="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName


const SelectSeparator = React.forwardRef<
  ElementRef<typeof SelectTypes.Separator>,
  ComponentPropsWithoutRef<typeof SelectTypes.Separator>
>(({ class:className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props} />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName


export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator
}