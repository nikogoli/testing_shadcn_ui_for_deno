// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
import * as NavigationMenuPrimitive from '../modules/esm.sh/v132/_@radix-ui/react-navigation-menu@1.1.4.js'
import * as AltNavigationMenuPrimitive from "../modules/lib/components/navigation-menu.d.ts"
import IconChevronDown from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/chevron-down.tsx"
import { cva } from '../modules/esm.sh/class-variance-authority@0.7.0.js'

import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"

const NavigationMenu = React.forwardRef<
  ElementRef<typeof AltNavigationMenuPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AltNavigationMenuPrimitive.Root>
>(({ class:className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn('relative z-10 flex flex-1 items-center justify-center', className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName


const NavigationMenuList = React.forwardRef<
  ElementRef<typeof AltNavigationMenuPrimitive.List>,
  ComponentPropsWithoutRef<typeof AltNavigationMenuPrimitive.List>
>(({ class:className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn('group flex flex-1 list-none items-center justify-center space-x-1', className)}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName


const NavigationMenuItem = NavigationMenuPrimitive.Item


const NavigationMenuTrigger = React.forwardRef<
  ElementRef<typeof AltNavigationMenuPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AltNavigationMenuPrimitive.Trigger>
>(({ class:className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(`
      group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2
      text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground
      focus:bg-accent focus:text-accent-foreground focus:outline-none
      disabled:pointer-events-none disabled:opacity-50
      data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`, 'group', className)}
    {...props}
  >
    {children}{' '}
    <IconChevronDown
      class="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName


const NavigationMenuContent = React.forwardRef<
  ElementRef<typeof AltNavigationMenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AltNavigationMenuPrimitive.Content>
>(({ class:className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      `left-0 top-0 w-full md:absolute md:w-auto
       data-[motion=from-end]:animate-slidein-fromright52
       data-[motion=from-start]:animate-slidein-fromleft52
       data-[motion=to-end]:animate-slideout-toright52
       data-[motion=to-start]:animate-slideout-toleft52`,
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName


const NavigationMenuLink = NavigationMenuPrimitive.Link


const NavigationMenuViewport = React.forwardRef<
  ElementRef<typeof AltNavigationMenuPrimitive.Viewport>,
  ComponentPropsWithoutRef<typeof AltNavigationMenuPrimitive.Viewport>
>(({ class:className, ...props }, ref) => (
  <div className={cn('absolute left-0 top-full flex justify-center')}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        `origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)]
         w-full md:w-[var(--radix-navigation-menu-viewport-width)]
         overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg
         data-[state=open]:animate-zoomin-90 data-[state=closed]:animate-zoomout-95`,
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName


const NavigationMenuIndicator = React.forwardRef<
  ElementRef<typeof AltNavigationMenuPrimitive.Indicator>,
  ComponentPropsWithoutRef<typeof AltNavigationMenuPrimitive.Indicator>
>(({ class:className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      `top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden
       data-[state=visible]:animate-in data-[state=hidden]:animate-out`,
      className
    )}
    {...props}
  >
    <div class="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName


export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
