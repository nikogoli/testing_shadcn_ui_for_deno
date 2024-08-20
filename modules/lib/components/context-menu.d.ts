// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../esm.sh/preact@10.19.6/compat.js'
import * as AltMenuPrimitive from "../type-utils-MenuPrimitve.d.ts"
import { PrimitiveForwardRefComponent, ComponentPropsWithoutRef } from "../type-utils.ts"


/**
 * Following type-definitions are based on "https://esm.sh/v132/@radix-ui/react-context-menu@2.1.5/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.mts"
 */ 


// -------- Trigger -------------

type PrimitiveSpanProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"span">>
interface ContextMenuTriggerProps extends PrimitiveSpanProps {
  disabled?: boolean
}
export const Trigger: React.ForwardRefExoticComponent<ContextMenuTriggerProps & React.RefAttributes<HTMLSpanElement>>


// -------- MenuGroup -------------

type MenuGroupProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Group>;
interface ContextMenuGroupProps extends MenuGroupProps {
}
export const Group: React.ForwardRefExoticComponent<ContextMenuGroupProps & React.RefAttributes<HTMLDivElement>>


// -------- CheckboxItem: -------------

type MenuCheckboxItemProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.CheckboxItem>;
interface ContextMenuCheckboxItemProps extends MenuCheckboxItemProps {
}
export const CheckboxItem: React.ForwardRefExoticComponent<
    ContextMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>
>;


// -------- Content -------------

type MenuContentProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Content>;
interface ContextMenuContentProps extends Omit<MenuContentProps, 'onEntryFocus' | 'side' | 'sideOffset' | 'align'> {
}

export const Content: React.ForwardRefExoticComponent<
    ContextMenuContentProps & React.RefAttributes<HTMLDivElement>
>;


// -------- SubContent -------------

type MenuSubContentProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.SubContent>;
interface ContextMenuSubContentProps extends MenuSubContentProps {
}

export const SubContent: React.ForwardRefExoticComponent<
    ContextMenuSubContentProps & React.RefAttributes<HTMLDivElement>
>;


// -------- Item -------------

type MenuItemProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Item>;
interface ContextMenuItemProps extends MenuItemProps {
}
export const Item: React.ForwardRefExoticComponent<
    ContextMenuItemProps & React.RefAttributes<HTMLDivElement>
>;


// -------- Label -------------

type MenuLabelProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Label>;
interface ContextMenuLabelProps extends MenuLabelProps {
}
export const Label: React.ForwardRefExoticComponent<
    ContextMenuLabelProps & React.RefAttributes<HTMLDivElement>
>;


// -------- RadioItem -------------

type MenuRadioItemProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.RadioItem>;
interface ContextMenuRadioItemProps extends MenuRadioItemProps {
}
export const RadioItem: React.ForwardRefExoticComponent<
    ContextMenuRadioItemProps & React.RefAttributes<HTMLDivElement>
>;


// -------- SubTrigger -------------

type MenuSubTriggerProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.SubTrigger>;
interface ContextMenuSubTriggerProps extends MenuSubTriggerProps {
}

export const SubTrigger: React.ForwardRefExoticComponent<
  ContextMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>
>;


// -------- Separator -------------

type MenuSeparatorProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Separator>;
interface ContextMenuSeparatorProps extends MenuSeparatorProps {
}
export const Separator: React.ForwardRefExoticComponent<
    ContextMenuSeparatorProps & React.RefAttributes<HTMLDivElement>
>;