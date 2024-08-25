// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../modules/esm.sh/preact@10.19.6/compat.js'
import { Scope } from "../../../modules/esm.sh/v132/_@radix-ui/react-context@1.0.1.js"
import * as AltMenuPrimitive from "../type-utils-MenuPrimitve.d.ts"
import { RovingFocusGroupProps } from "../type-utils-RovingFocus.d.ts"
import { ComponentPropsWithoutRef } from "../type-utils.ts"



import { PrimitiveDivProps, PrimitiveButtonProps } from "../type-utils-Primitive.d.ts"


/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
export const Root: React.ForwardRefExoticComponent<MenubarProps & React.RefAttributes<HTMLDivElement>>;

interface MenubarProps extends PrimitiveDivProps {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    loop?: RovingFocusGroupProps['loop'];
    dir?: RovingFocusGroupProps['dir'];
}


/* -------------------------------------------------------------------------------------------------
 * Menu
 * -----------------------------------------------------------------------------------------------*/
export const Menu: {
    (props: MenubarMenuProps&{__scopeMenubar?: Scope}): React.JSX.Element;
    displayName: string;
};

interface MenubarMenuProps {
    value?: string;
    children?: React.ReactNode;
}


/* -------------------------------------------------------------------------------------------------
 * Trigger
 * -----------------------------------------------------------------------------------------------*/
export const Trigger: React.ForwardRefExoticComponent<MenubarTriggerProps & React.RefAttributes<HTMLButtonElement>>;

interface MenubarTriggerProps extends PrimitiveButtonProps {
}


/* -------------------------------------------------------------------------------------------------
 * Portal
 * -----------------------------------------------------------------------------------------------*/
export const Portal: React.FC<MenubarPortalProps>;

interface MenubarPortalProps extends MenuPortalProps {
}
type MenuPortalProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Portal>;


/* -------------------------------------------------------------------------------------------------
 * Content
 * -----------------------------------------------------------------------------------------------*/
export const Content: React.ForwardRefExoticComponent<MenubarContentProps & React.RefAttributes<HTMLDivElement>>;

interface MenubarContentProps extends Omit<MenuContentProps, 'onEntryFocus'> {
}
type MenuContentProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Content>;


/* -------------------------------------------------------------------------------------------------
 * Group
 * -----------------------------------------------------------------------------------------------*/
export const Group: React.ForwardRefExoticComponent<MenubarGroupProps & React.RefAttributes<HTMLDivElement>>;
interface MenubarGroupProps extends MenuGroupProps {
}

type MenuGroupProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Group>;


/* -------------------------------------------------------------------------------------------------
 * Label
 * -----------------------------------------------------------------------------------------------*/
export const Label: React.ForwardRefExoticComponent<MenubarLabelProps & React.RefAttributes<HTMLDivElement>>;

interface MenubarLabelProps extends MenuLabelProps {
}
type MenuLabelProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Label>;


/* -------------------------------------------------------------------------------------------------
 * Item
 * -----------------------------------------------------------------------------------------------*/
export const Item: React.ForwardRefExoticComponent<MenubarItemProps & React.RefAttributes<HTMLDivElement>>;

interface MenubarItemProps extends MenuItemProps {
}
type MenuItemProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Item>;


/* -------------------------------------------------------------------------------------------------
 * CheckboxItem
 * -----------------------------------------------------------------------------------------------*/
export const CheckboxItem: React.ForwardRefExoticComponent<MenubarCheckboxItemProps & React.RefAttributes<HTMLDivElement>>;

interface MenubarCheckboxItemProps extends MenuCheckboxItemProps {
}
type MenuCheckboxItemProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.CheckboxItem>;


/* -------------------------------------------------------------------------------------------------
 * RadioGroup
 * -----------------------------------------------------------------------------------------------*/
export const RadioGroup: React.ForwardRefExoticComponent<MenubarRadioGroupProps & React.RefAttributes<HTMLDivElement>>;

interface MenubarRadioGroupProps extends MenuRadioGroupProps {
}
type MenuRadioGroupProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.RadioGroup>;


/* -------------------------------------------------------------------------------------------------
 * RadioItem
 * -----------------------------------------------------------------------------------------------*/
export const RadioItem: React.ForwardRefExoticComponent<MenubarRadioItemProps & React.RefAttributes<HTMLDivElement>>;

interface MenubarRadioItemProps extends MenuRadioItemProps {
}
type MenuRadioItemProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.RadioItem>;


/* -------------------------------------------------------------------------------------------------
 * ItemIndicator
 * -----------------------------------------------------------------------------------------------*/
export const ItemIndicator: React.ForwardRefExoticComponent<MenubarItemIndicatorProps & React.RefAttributes<HTMLSpanElement>>;

interface MenubarItemIndicatorProps extends MenuItemIndicatorProps {
}
type MenuItemIndicatorProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.ItemIndicator>;


/* -------------------------------------------------------------------------------------------------
 * Separator
 * -----------------------------------------------------------------------------------------------*/
export const Separator: React.ForwardRefExoticComponent<MenubarSeparatorProps & React.RefAttributes<HTMLDivElement>>;

interface MenubarSeparatorProps extends MenuSeparatorProps {
}

type MenuSeparatorProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Separator>;


/* -------------------------------------------------------------------------------------------------
 * Arrow
 * -----------------------------------------------------------------------------------------------*/
export const Arrow: React.ForwardRefExoticComponent<MenubarArrowProps & React.RefAttributes<SVGSVGElement>>;

interface MenubarArrowProps extends MenuArrowProps {
}
type MenuArrowProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Arrow>;


/* -------------------------------------------------------------------------------------------------
 * Sub
 * -----------------------------------------------------------------------------------------------*/
export const Sub: React.FC<MenubarSubProps>;

interface MenubarSubProps {
    children?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
}


/* -------------------------------------------------------------------------------------------------
 * SubTrigger
 * -----------------------------------------------------------------------------------------------*/
export const SubTrigger: React.ForwardRefExoticComponent<MenubarSubTriggerProps & React.RefAttributes<HTMLDivElement>>;

interface MenubarSubTriggerProps extends MenuSubTriggerProps {
}
type MenuSubTriggerProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.SubTrigger>;


/* -------------------------------------------------------------------------------------------------
 * SubContent
 * -----------------------------------------------------------------------------------------------*/
export const SubContent: React.ForwardRefExoticComponent<MenubarSubContentProps & React.RefAttributes<HTMLDivElement>>;

interface MenubarSubContentProps extends MenuSubContentProps {
}
type MenuSubContentProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.SubContent>;