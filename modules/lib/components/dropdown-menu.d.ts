// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../modules/esm.sh/preact@10.19.6/compat.js'
import * as AltMenuPrimitive from "../type-utils-MenuPrimitve.d.ts"
import { ComponentPropsWithoutRef } from "../type-utils.ts"

import { PrimitiveButtonProps } from "../type-utils-Primitive.d.ts"


/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
export const Root: React.FC<DropdownMenuProps>;

interface DropdownMenuProps {
    children?: React.ReactNode;
    dir?: 'ltr' | 'rtl';
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
    modal?: boolean;
}


/* -------------------------------------------------------------------------------------------------
 * Trigger
 * -----------------------------------------------------------------------------------------------*/
export const Trigger: React.ForwardRefExoticComponent<DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;

interface DropdownMenuTriggerProps extends PrimitiveButtonProps {
}


/* -------------------------------------------------------------------------------------------------
 * Portal
 * -----------------------------------------------------------------------------------------------*/
export const Portal: React.FC<DropdownMenuPortalProps>;

interface DropdownMenuPortalProps extends MenuPortalProps {
}
type MenuPortalProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Portal>;


/* -------------------------------------------------------------------------------------------------
 * Content
 * -----------------------------------------------------------------------------------------------*/
export const Content: React.ForwardRefExoticComponent<DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>>;

interface DropdownMenuContentProps extends Omit<MenuContentProps, 'onEntryFocus'> {
}
type MenuContentProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Content>;


/* -------------------------------------------------------------------------------------------------
 * Group
 * -----------------------------------------------------------------------------------------------*/
export const Group: React.ForwardRefExoticComponent<DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>>;

interface DropdownMenuGroupProps extends MenuGroupProps {
}
type MenuGroupProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Group>;


/* -------------------------------------------------------------------------------------------------
 * Label
 * -----------------------------------------------------------------------------------------------*/
export const Label: React.ForwardRefExoticComponent<DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>>;

interface DropdownMenuLabelProps extends MenuLabelProps {
}
type MenuLabelProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Label>;


/* -------------------------------------------------------------------------------------------------
 * Item
 * -----------------------------------------------------------------------------------------------*/
export const Item: React.ForwardRefExoticComponent<DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>>;

interface DropdownMenuItemProps extends MenuItemProps {
}
type MenuItemProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Item>;


/* -------------------------------------------------------------------------------------------------
 * CheckboxItem
 * -----------------------------------------------------------------------------------------------*/
export const CheckboxItem: React.ForwardRefExoticComponent<DropdownMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>>;

interface DropdownMenuCheckboxItemProps extends MenuCheckboxItemProps {
}
type MenuCheckboxItemProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.CheckboxItem>;


/* -------------------------------------------------------------------------------------------------
 * RadioGroup
 * -----------------------------------------------------------------------------------------------*/
export const RadioGroup: React.ForwardRefExoticComponent<DropdownMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;

interface DropdownMenuRadioGroupProps extends MenuRadioGroupProps {
}
type MenuRadioGroupProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.RadioGroup>;


/* -------------------------------------------------------------------------------------------------
 * RadioItem
 * -----------------------------------------------------------------------------------------------*/
export const RadioItem: React.ForwardRefExoticComponent<DropdownMenuRadioItemProps & React.RefAttributes<HTMLDivElement>>;

interface DropdownMenuRadioItemProps extends MenuRadioItemProps {
}
type MenuRadioItemProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.RadioItem>;


/* -------------------------------------------------------------------------------------------------
 * ItemIndicator
 * -----------------------------------------------------------------------------------------------*/
export const ItemIndicator: React.ForwardRefExoticComponent<DropdownMenuItemIndicatorProps & React.RefAttributes<HTMLSpanElement>>;

interface DropdownMenuItemIndicatorProps extends MenuItemIndicatorProps {
}
type MenuItemIndicatorProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.ItemIndicator>;


/* -------------------------------------------------------------------------------------------------
 * Separator
 * -----------------------------------------------------------------------------------------------*/
export const Separator: React.ForwardRefExoticComponent<DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>>;

interface DropdownMenuSeparatorProps extends MenuSeparatorProps {
}
type MenuSeparatorProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Separator>;


/* -------------------------------------------------------------------------------------------------
 * Arrow
 * -----------------------------------------------------------------------------------------------*/
export const Arrow: React.ForwardRefExoticComponent<DropdownMenuArrowProps & React.RefAttributes<SVGSVGElement>>;

interface DropdownMenuArrowProps extends MenuArrowProps {
}
type MenuArrowProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Arrow>;


/* -------------------------------------------------------------------------------------------------
 * Sub
 * -----------------------------------------------------------------------------------------------*/
export const Sub: React.FC<DropdownMenuSubProps>;

interface DropdownMenuSubProps {
    children?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
}


/* -------------------------------------------------------------------------------------------------
 * SubTrigger
 * -----------------------------------------------------------------------------------------------*/
export const SubTrigger: React.ForwardRefExoticComponent<DropdownMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>>;

interface DropdownMenuSubTriggerProps extends MenuSubTriggerProps {
}
type MenuSubTriggerProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.SubTrigger>;


/* -------------------------------------------------------------------------------------------------
 * SubContent
 * -----------------------------------------------------------------------------------------------*/
export const SubContent: React.ForwardRefExoticComponent<DropdownMenuSubContentProps & React.RefAttributes<HTMLDivElement>>;

interface DropdownMenuSubContentProps extends MenuSubContentProps {
}
type MenuSubContentProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.SubContent>;