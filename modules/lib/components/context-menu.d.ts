// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../esm.sh/preact@10.19.6/compat.js'
import * as AltMenuPrimitive from "../type-utils-MenuPrimitve.d.ts"
import { ComponentPropsWithoutRef } from "../type-utils.ts"

import { PrimitiveSpanProps } from "../type-utils-Primitive.d.ts"


/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
export const Root: React.FC<ContextMenuProps>;

interface ContextMenuProps {
    children?: React.ReactNode;
    onOpenChange?(open: boolean): void;
    dir?: 'ltr' | 'rtl';
    modal?: boolean;
}


/* -------------------------------------------------------------------------------------------------
 * Trigger
 * -----------------------------------------------------------------------------------------------*/
export const Trigger: React.ForwardRefExoticComponent<ContextMenuTriggerProps & React.RefAttributes<HTMLSpanElement>>;

interface ContextMenuTriggerProps extends PrimitiveSpanProps {
    disabled?: boolean;
}


/* -------------------------------------------------------------------------------------------------
 * Trigger
 * -----------------------------------------------------------------------------------------------*/
export const Portal: React.FC<ContextMenuPortalProps>;

type MenuPortalProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Portal>;
interface ContextMenuPortalProps extends MenuPortalProps {
}


/* -------------------------------------------------------------------------------------------------
 * Content
 * -----------------------------------------------------------------------------------------------*/
export const Content: React.ForwardRefExoticComponent<ContextMenuContentProps & React.RefAttributes<HTMLDivElement>>;

interface ContextMenuContentProps extends Omit<MenuContentProps, 'onEntryFocus' | 'side' | 'sideOffset' | 'align'> {
}
type MenuContentProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Content>;


/* -------------------------------------------------------------------------------------------------
 * Group
 * -----------------------------------------------------------------------------------------------*/
export const Group: React.ForwardRefExoticComponent<ContextMenuGroupProps & React.RefAttributes<HTMLDivElement>>;

interface ContextMenuGroupProps extends MenuGroupProps {
}
type MenuGroupProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Group>;


/* -------------------------------------------------------------------------------------------------
 * Label
 * -----------------------------------------------------------------------------------------------*/
export const Label: React.ForwardRefExoticComponent<ContextMenuLabelProps & React.RefAttributes<HTMLDivElement>>;

interface ContextMenuLabelProps extends MenuLabelProps {
}
type MenuLabelProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Label>;


/* -------------------------------------------------------------------------------------------------
 * Item
 * -----------------------------------------------------------------------------------------------*/
export const Item: React.ForwardRefExoticComponent<ContextMenuItemProps & React.RefAttributes<HTMLDivElement>>;

interface ContextMenuItemProps extends MenuItemProps {
}
type MenuItemProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Item>;


/* -------------------------------------------------------------------------------------------------
 * CheckboxItem
 * -----------------------------------------------------------------------------------------------*/
export const CheckboxItem: React.ForwardRefExoticComponent<ContextMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>>;

interface ContextMenuCheckboxItemProps extends MenuCheckboxItemProps {
}
type MenuCheckboxItemProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.CheckboxItem>;


/* -------------------------------------------------------------------------------------------------
 * RadioGroup
 * -----------------------------------------------------------------------------------------------*/
export const RadioGroup: React.ForwardRefExoticComponent<ContextMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;

interface ContextMenuRadioGroupProps extends MenuRadioGroupProps {
}
type MenuRadioGroupProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.RadioGroup>;


/* -------------------------------------------------------------------------------------------------
 * RadioItem
 * -----------------------------------------------------------------------------------------------*/
export const RadioItem: React.ForwardRefExoticComponent<ContextMenuRadioItemProps & React.RefAttributes<HTMLDivElement>>;

interface ContextMenuRadioItemProps extends MenuRadioItemProps {
}
type MenuRadioItemProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.RadioItem>;


/* -------------------------------------------------------------------------------------------------
 * ItemIndicator
 * -----------------------------------------------------------------------------------------------*/
export const ItemIndicator: React.ForwardRefExoticComponent<ContextMenuItemIndicatorProps & React.RefAttributes<HTMLSpanElement>>;

interface ContextMenuItemIndicatorProps extends MenuItemIndicatorProps {
}
type MenuItemIndicatorProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.ItemIndicator>;


/* -------------------------------------------------------------------------------------------------
 * Separator
 * -----------------------------------------------------------------------------------------------*/
export const Separator: React.ForwardRefExoticComponent<ContextMenuSeparatorProps & React.RefAttributes<HTMLDivElement>>;

interface ContextMenuSeparatorProps extends MenuSeparatorProps {
}
type MenuSeparatorProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Separator>;


/* -------------------------------------------------------------------------------------------------
 * Arrow
 * -----------------------------------------------------------------------------------------------*/
export const Arrow: React.ForwardRefExoticComponent<ContextMenuArrowProps & React.RefAttributes<SVGSVGElement>>;

interface ContextMenuArrowProps extends MenuArrowProps {
}
type MenuArrowProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Arrow>;


/* -------------------------------------------------------------------------------------------------
 * Arrow
 * -----------------------------------------------------------------------------------------------*/
export const Sub: React.FC<ContextMenuSubProps>;

interface ContextMenuSubProps {
    children?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
}


/* -------------------------------------------------------------------------------------------------
 * SubTrigger
 * -----------------------------------------------------------------------------------------------*/
export const SubTrigger: React.ForwardRefExoticComponent<ContextMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>>;

interface ContextMenuSubTriggerProps extends MenuSubTriggerProps {
}
type MenuSubTriggerProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.SubTrigger>;



/* -------------------------------------------------------------------------------------------------
 * SubTrigger
 * -----------------------------------------------------------------------------------------------*/
export const SubContent: React.ForwardRefExoticComponent<ContextMenuSubContentProps & React.RefAttributes<HTMLDivElement>>;

interface ContextMenuSubContentProps extends MenuSubContentProps {
}
type MenuSubContentProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.SubContent>;