// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
// @deno-types="../modules/lib/components/tabs.d.ts"
import * as TabsPrimitive from '../modules/esm.sh/_@radix-ui/react-tabs@1.0.4.js'
import * as TabsTypes from "../modules/lib/components/tabs.d.ts"

import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"


const Tabs = TabsPrimitive.Root


const TabsList = React.forwardRef<
  ElementRef<typeof TabsTypes.List>,
  ComponentPropsWithoutRef<typeof TabsTypes.List>
>(({ class:className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    class={cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName


const TabsTrigger = React.forwardRef<
  ElementRef<typeof TabsTypes.Trigger>,
  ComponentPropsWithoutRef<typeof TabsTypes.Trigger>
>(({ class:className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    class={cn(
      `inline-flex items-center justify-center whitespace-nowrap rounded-sm
       px-3 py-1.5 text-sm font-medium ring-offset-background transition-all
       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
       disabled:pointer-events-none disabled:opacity-50
       data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm`,
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName


const TabsContent = React.forwardRef<
  ElementRef<typeof TabsTypes.Content>,
  ComponentPropsWithoutRef<typeof TabsTypes.Content>
>(({ class:className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    class={cn(
      `mt-2 ring-offset-background
       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName


export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
}