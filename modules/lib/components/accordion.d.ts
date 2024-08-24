// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../esm.sh/preact@10.19.6/compat.js'

import {
  PrimitiveDivProps,
  PrimitiveHeading3Props,
} from "../type-utils-Primitive.d.ts"
import { ComponentPropsWithoutRef } from "../type-utils.ts"
import * as AltCollapsiblePrimitive from "../type-utils-CollapsiblePrimitive.d.ts"


/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
export const Root: React.ForwardRefExoticComponent<
  (AccordionSingleProps | AccordionMultipleProps) & React.RefAttributes<HTMLDivElement>
>


interface AccordionImplProps extends PrimitiveDivProps {
  /**
   * Whether or not an accordion is disabled from user interaction.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * The layout in which the Accordion operates.
   * @default vertical
   */
  orientation?: React.HTMLAttributes<HTMLElement>['aria-orientation'];
  /**
   * The language read direction.
   */
  dir?: 'ltr' | 'rtl';
}


interface AccordionImplSingleProps extends AccordionImplProps {
  /**
   * The controlled stateful value of the accordion item whose content is expanded.
   */
  value?: string;
  /**
   * The value of the item whose content is expanded when the accordion is initially rendered. Use
   * `defaultValue` if you do not need to control the state of an accordion.
   */
  defaultValue?: string;
  /**
   * The callback that fires when the state of the accordion changes.
   */
  onValueChange?(value: string): void;
  /**
   * Whether an accordion item can be collapsed after it has been opened.
   * @default false
   */
  collapsible?: boolean;
}


interface AccordionImplMultipleProps extends AccordionImplProps {
  /**
   * The controlled stateful value of the accordion items whose contents are expanded.
   */
  value?: string[];
  /**
   * The value of the items whose contents are expanded when the accordion is initially rendered. Use
   * `defaultValue` if you do not need to control the state of an accordion.
   */
  defaultValue?: string[];
  /**
   * The callback that fires when the state of the accordion changes.
   */
  onValueChange?(value: string[]): void;
}


interface AccordionSingleProps extends AccordionImplSingleProps {
  type: 'single';
}
interface AccordionMultipleProps extends AccordionImplMultipleProps {
  type: 'multiple';
}


/* -------------------------------------------------------------------------------------------------
 * Item
 * -----------------------------------------------------------------------------------------------*/
/**
 * `AccordionItem` contains all of the parts of a collapsible section inside of an `Accordion`.
 */
export const Item: React.ForwardRefExoticComponent<
  AccordionItemProps & React.RefAttributes<HTMLDivElement>
>


type CollapsibleProps = ComponentPropsWithoutRef<typeof AltCollapsiblePrimitive.Root>
interface AccordionItemProps extends Omit<CollapsibleProps, 'open' | 'defaultOpen' | 'onOpenChange'> {
  /**
   * Whether or not an accordion item is disabled from user interaction.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * A string value for the accordion item. All items within an accordion should use a unique value.
   */
  value: string;
}


/* -------------------------------------------------------------------------------------------------
 * Header
 * -----------------------------------------------------------------------------------------------*/
/**
 * `AccordionHeader` contains the content for the parts of an `AccordionItem` that will be visible
 * whether or not its content is collapsed.
 */
export const Header: React.ForwardRefExoticComponent<
  AccordionHeaderProps & React.RefAttributes<HTMLHeadingElement>
>

interface AccordionHeaderProps extends PrimitiveHeading3Props {
}


/* -------------------------------------------------------------------------------------------------
 * Trigger
 * -----------------------------------------------------------------------------------------------*/
/**
 * `AccordionTrigger` is the trigger that toggles the collapsed state of an `AccordionItem`. It
 * should always be nested inside of an `AccordionHeader`.
 */
export const Trigger: React.ForwardRefExoticComponent<
  AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>
>

type CollapsibleTriggerProps = ComponentPropsWithoutRef<typeof AltCollapsiblePrimitive.Trigger>;
interface AccordionTriggerProps extends CollapsibleTriggerProps {
}


/* -------------------------------------------------------------------------------------------------
 * Content
 * -----------------------------------------------------------------------------------------------*/
/**
 * `AccordionContent` contains the collapsible content for an `AccordionItem`.
 */
export const Content: React.ForwardRefExoticComponent<
  AccordionContentProps & React.RefAttributes<HTMLDivElement>
>

type CollapsibleContentProps = ComponentPropsWithoutRef<typeof AltCollapsiblePrimitive.Content>;
interface AccordionContentProps extends CollapsibleContentProps {
}
