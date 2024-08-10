// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../../../../../modules/esm.sh/preact@10.19.6/compat.js';
import * as Radix from "../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
import { Primitive } from "../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
import * as MenuPrimitive from "../../../../../../esm.sh/v132/_@radix-ui/react-menu@2.0.6.js";
type Direction = 'ltr' | 'rtl';
export const createDropdownMenuScope: import("../../../../../../esm.sh/v132/_@radix-ui/react-context@1.0.1.js").CreateScope;
export interface DropdownMenuProps {
    children?: React.ReactNode;
    dir?: Direction;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
    modal?: boolean;
}
export const DropdownMenu: React.FC<DropdownMenuProps>;
type PrimitiveButtonProps = Radix.ComponentPropsWithoutRef<typeof Primitive.button>;
export interface DropdownMenuTriggerProps extends PrimitiveButtonProps {
}
export const DropdownMenuTrigger: React.ForwardRefExoticComponent<DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;
type MenuPortalProps = React.ComponentPropsWithoutRef<typeof MenuPrimitive.Portal>;
export interface DropdownMenuPortalProps extends MenuPortalProps {
}
export const DropdownMenuPortal: React.FC<DropdownMenuPortalProps>;
type MenuContentProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.Content>;
export interface DropdownMenuContentProps extends Omit<MenuContentProps, 'onEntryFocus'> {
}
export const DropdownMenuContent: React.ForwardRefExoticComponent<DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>>;
type MenuGroupProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.Group>;
export interface DropdownMenuGroupProps extends MenuGroupProps {
}
export const DropdownMenuGroup: React.ForwardRefExoticComponent<DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
type MenuLabelProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.Label>;
export interface DropdownMenuLabelProps extends MenuLabelProps {
}
export const DropdownMenuLabel: React.ForwardRefExoticComponent<DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>>;
type MenuItemProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.Item>;
export interface DropdownMenuItemProps extends MenuItemProps {
}
export const DropdownMenuItem: React.ForwardRefExoticComponent<DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>>;
type MenuCheckboxItemProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.CheckboxItem>;
export interface DropdownMenuCheckboxItemProps extends MenuCheckboxItemProps {
}
export const DropdownMenuCheckboxItem: React.ForwardRefExoticComponent<DropdownMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>>;
type MenuRadioGroupProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.RadioGroup>;
export interface DropdownMenuRadioGroupProps extends MenuRadioGroupProps {
}
export const DropdownMenuRadioGroup: React.ForwardRefExoticComponent<DropdownMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
type MenuRadioItemProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.RadioItem>;
export interface DropdownMenuRadioItemProps extends MenuRadioItemProps {
}
export const DropdownMenuRadioItem: React.ForwardRefExoticComponent<DropdownMenuRadioItemProps & React.RefAttributes<HTMLDivElement>>;
type MenuItemIndicatorProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.ItemIndicator>;
export interface DropdownMenuItemIndicatorProps extends MenuItemIndicatorProps {
}
export const DropdownMenuItemIndicator: React.ForwardRefExoticComponent<DropdownMenuItemIndicatorProps & React.RefAttributes<HTMLSpanElement>>;
type MenuSeparatorProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.Separator>;
export interface DropdownMenuSeparatorProps extends MenuSeparatorProps {
}
export const DropdownMenuSeparator: React.ForwardRefExoticComponent<DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>>;
type MenuArrowProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.Arrow>;
export interface DropdownMenuArrowProps extends MenuArrowProps {
}
export const DropdownMenuArrow: React.ForwardRefExoticComponent<DropdownMenuArrowProps & React.RefAttributes<SVGSVGElement>>;
export interface DropdownMenuSubProps {
    children?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
}
export const DropdownMenuSub: React.FC<DropdownMenuSubProps>;
type MenuSubTriggerProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.SubTrigger>;
export interface DropdownMenuSubTriggerProps extends MenuSubTriggerProps {
}
export const DropdownMenuSubTrigger: React.ForwardRefExoticComponent<DropdownMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>>;
type MenuSubContentProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.SubContent>;
export interface DropdownMenuSubContentProps extends MenuSubContentProps {
}
export const DropdownMenuSubContent: React.ForwardRefExoticComponent<DropdownMenuSubContentProps & React.RefAttributes<HTMLDivElement>>;
export const Root: React.FC<DropdownMenuProps>;
export const Trigger: React.ForwardRefExoticComponent<DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export const Portal: React.FC<DropdownMenuPortalProps>;
export const Content: React.ForwardRefExoticComponent<DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>>;
export const Group: React.ForwardRefExoticComponent<DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
export const Label: React.ForwardRefExoticComponent<DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>>;
export const Item: React.ForwardRefExoticComponent<DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>>;
export const CheckboxItem: React.ForwardRefExoticComponent<DropdownMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>>;
export const RadioGroup: React.ForwardRefExoticComponent<DropdownMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
export const RadioItem: React.ForwardRefExoticComponent<DropdownMenuRadioItemProps & React.RefAttributes<HTMLDivElement>>;
export const ItemIndicator: React.ForwardRefExoticComponent<DropdownMenuItemIndicatorProps & React.RefAttributes<HTMLSpanElement>>;
export const Separator: React.ForwardRefExoticComponent<DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>>;
export const Arrow: React.ForwardRefExoticComponent<DropdownMenuArrowProps & React.RefAttributes<SVGSVGElement>>;
export const Sub: React.FC<DropdownMenuSubProps>;
export const SubTrigger: React.ForwardRefExoticComponent<DropdownMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>>;
export const SubContent: React.ForwardRefExoticComponent<DropdownMenuSubContentProps & React.RefAttributes<HTMLDivElement>>;

//# sourceMappingURL=index.d.ts.map
