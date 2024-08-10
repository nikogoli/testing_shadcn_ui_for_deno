// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../esm.sh/preact@10.19.6/compat.js'
import { ComponentPropsWithoutRef } from "../type-utils.ts"
import * as AltCollapsiblePrimitive from "../type-utils-CollapsiblePrimitive.d.ts"

/**
 * Following type-definitions are based on "https://esm.sh/v132/@radix-ui/react-accordion​@1.1.2/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0/dist/index.d.ts"
 */ 

type CollapsibleProps = ComponentPropsWithoutRef<typeof AltCollapsiblePrimitive.Root>
interface AccordionItemProps extends Omit<CollapsibleProps, 'open' | 'defaultOpen' | 'onOpenChange'> {
  /**
   * Whether or not an accordion item is disabled from user interaction.
   *
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * A string value for the accordion item. All items within an accordion should use a unique value.
   */
  value: string;
}
export const Item: React.ForwardRefExoticComponent<
  AccordionItemProps & React.RefAttributes<HTMLDivElement>
>


type CollapsibleTriggerProps = ComponentPropsWithoutRef<typeof AltCollapsiblePrimitive.Trigger>;
interface AccordionTriggerProps extends CollapsibleTriggerProps {
}
export const Trigger: React.ForwardRefExoticComponent<
  AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>
>


type CollapsibleContentProps = ComponentPropsWithoutRef<typeof AltCollapsiblePrimitive.Content>;
interface AccordionContentProps extends CollapsibleContentProps {
}
export const Content: React.ForwardRefExoticComponent<
  AccordionContentProps & React.RefAttributes<HTMLDivElement>
>