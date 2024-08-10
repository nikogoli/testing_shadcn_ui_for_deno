// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../modules/esm.sh/preact@10.19.6/compat.js'
import * as AltMenuPrimitive from "../type-utils-MenuPrimitve.d.ts"
import { RovingFocusGroupProps } from "../type-utils-RovingFocus.d.ts"
import { PrimitiveForwardRefComponent, ComponentPropsWithoutRef } from "../type-utils.ts"


/**
 * Following type-definitions are based on "https://esm.sh/v133/@radix-ui/react-menubar@1.0.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0/dist/index.d.mts"
 */ 

type PrimitiveDivProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"div">>;
type PrimitiveButtonProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"button">>;

interface MenubarProps extends PrimitiveDivProps {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    loop?: RovingFocusGroupProps['loop'];
    dir?: RovingFocusGroupProps['dir'];
}

export const Root: React.ForwardRefExoticComponent<
    MenubarProps & React.RefAttributes<HTMLDivElement>
>;




type MenuContentProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Content>;
interface MenubarContentProps extends Omit<MenuContentProps, 'onEntryFocus'> {
}
export const Content: React.ForwardRefExoticComponent<
    MenubarContentProps & React.RefAttributes<HTMLDivElement>
>;



type MenuSubContentProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.SubContent>;
interface MenubarSubContentProps extends MenuSubContentProps {
}
export const SubContent: React.ForwardRefExoticComponent<
    MenubarSubContentProps & React.RefAttributes<HTMLDivElement>
>;




type MenuCheckboxItemProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.CheckboxItem>;
interface MenubarCheckboxItemProps extends MenuCheckboxItemProps {
}
export const CheckboxItem: React.ForwardRefExoticComponent<
    MenubarCheckboxItemProps & React.RefAttributes<HTMLDivElement>
>;



type MenuItemProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Item>;
interface MenubarItemProps extends MenuItemProps {
}
export const Item: React.ForwardRefExoticComponent<
    MenubarItemProps & React.RefAttributes<HTMLDivElement>
>;




type MenuLabelProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Label>;
export interface MenubarLabelProps extends MenuLabelProps {
}
export const Label: React.ForwardRefExoticComponent<
    MenubarLabelProps & React.RefAttributes<HTMLDivElement>
>;



type MenuRadioItemProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.RadioItem>;
interface MenubarRadioItemProps extends MenuRadioItemProps {
}
export const RadioItem: React.ForwardRefExoticComponent<
    MenubarRadioItemProps & React.RefAttributes<HTMLDivElement>
>;





type MenuSeparatorProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.Separator>;
export interface MenubarSeparatorProps extends MenuSeparatorProps {
}
export const Separator: React.ForwardRefExoticComponent<
    MenubarSeparatorProps & React.RefAttributes<HTMLDivElement>
>;




interface MenubarTriggerProps extends PrimitiveButtonProps {
}
export const Trigger: React.ForwardRefExoticComponent<
    MenubarTriggerProps & React.RefAttributes<HTMLButtonElement>
>;



type MenuSubTriggerProps = ComponentPropsWithoutRef<typeof AltMenuPrimitive.SubTrigger>;
interface MenubarSubTriggerProps extends MenuSubTriggerProps {
}
export const SubTrigger: React.ForwardRefExoticComponent<
    MenubarSubTriggerProps & React.RefAttributes<HTMLDivElement>
>;