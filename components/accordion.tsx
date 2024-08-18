// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
import * as AccordionPrimitive from '../modules/esm.sh/v132/_@radix-ui/react-accordion@1.1.2.js'
import IconChevronDown from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/chevron-down.tsx"

import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"
import * as AltAccordionPrimitive from "../modules/lib/components/accordion.d.ts"


const Accordion: React.FunctionComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps)&React.RefAttributes<HTMLDivElement>&{class:string}> = AccordionPrimitive.Root


const AccordionItem = React.forwardRef<
  ElementRef<typeof AltAccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AltAccordionPrimitive.Item>
>(({ class:className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn('border-b', className)} {...props} />
))
AccordionItem.displayName = 'AccordionItem'


const AccordionTrigger = React.forwardRef<
  ElementRef<typeof AltAccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AltAccordionPrimitive.Trigger>
>(({ class:className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        className
      )}
      {...props}
    >
      {children}
      <IconChevronDown class="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName


const AccordionContent = React.forwardRef<
  ElementRef<typeof AltAccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AltAccordionPrimitive.Content>
>(({ class:className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      `overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down data-[state=closed]:hidden`,
      className
    )}
    {...props}
  >
    {/* ↑ add `data-[state=closed]:hidden` because AccordionPrimitive.Trigger's function
        to add `hidden={true}` to its Content-element does not work properly. */}
    <div class="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName


export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }