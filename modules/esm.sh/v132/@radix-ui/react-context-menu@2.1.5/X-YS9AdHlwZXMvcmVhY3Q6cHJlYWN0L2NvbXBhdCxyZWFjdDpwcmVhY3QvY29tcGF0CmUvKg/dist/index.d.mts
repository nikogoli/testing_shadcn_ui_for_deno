// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from "../../../../../../esm.sh/preact@10.19.6/compat.js";
import * as Radix from "../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
import { Primitive } from "../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
import * as MenuPrimitive from "../../../../../../esm.sh/v132/_@radix-ui/react-menu@2.0.6.js";
type Direction = 'ltr' | 'rtl';
export const createContextMenuScope: import("../../../../../../esm.sh/v132/_@radix-ui/react-context@1.0.1.js").CreateScope;
export interface ContextMenuProps {
    children?: React.ReactNode;
    onOpenChange?(open: boolean): void;
    dir?: Direction;
    modal?: boolean;
}
export const ContextMenu: React.FC<ContextMenuProps>;
type PrimitiveSpanProps = Radix.ComponentPropsWithoutRef<typeof Primitive.span>;
export interface ContextMenuTriggerProps extends PrimitiveSpanProps {
    disabled?: boolean;
}
export const ContextMenuTrigger: React.ForwardRefExoticComponent<ContextMenuTriggerProps & React.RefAttributes<HTMLSpanElement>>;
type MenuPortalProps = React.ComponentPropsWithoutRef<typeof MenuPrimitive.Portal>;
export interface ContextMenuPortalProps extends MenuPortalProps {
}
export const ContextMenuPortal: React.FC<ContextMenuPortalProps>;
type MenuContentProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.Content>;
export interface ContextMenuContentProps extends Omit<MenuContentProps, 'onEntryFocus' | 'side' | 'sideOffset' | 'align'> {
}
export const ContextMenuContent: React.ForwardRefExoticComponent<ContextMenuContentProps & React.RefAttributes<HTMLDivElement>>;
type MenuGroupProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.Group>;
export interface ContextMenuGroupProps extends MenuGroupProps {
}
export const ContextMenuGroup: React.ForwardRefExoticComponent<ContextMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
type MenuLabelProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.Label>;
export interface ContextMenuLabelProps extends MenuLabelProps {
}
export const ContextMenuLabel: React.ForwardRefExoticComponent<ContextMenuLabelProps & React.RefAttributes<HTMLDivElement>>;
type MenuItemProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.Item>;
export interface ContextMenuItemProps extends MenuItemProps {
}
export const ContextMenuItem: React.ForwardRefExoticComponent<ContextMenuItemProps & React.RefAttributes<HTMLDivElement>>;
type MenuCheckboxItemProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.CheckboxItem>;
export interface ContextMenuCheckboxItemProps extends MenuCheckboxItemProps {
}
export const ContextMenuCheckboxItem: React.ForwardRefExoticComponent<ContextMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>>;
type MenuRadioGroupProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.RadioGroup>;
export interface ContextMenuRadioGroupProps extends MenuRadioGroupProps {
}
export const ContextMenuRadioGroup: React.ForwardRefExoticComponent<ContextMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
type MenuRadioItemProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.RadioItem>;
export interface ContextMenuRadioItemProps extends MenuRadioItemProps {
}
export const ContextMenuRadioItem: React.ForwardRefExoticComponent<ContextMenuRadioItemProps & React.RefAttributes<HTMLDivElement>>;
type MenuItemIndicatorProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.ItemIndicator>;
export interface ContextMenuItemIndicatorProps extends MenuItemIndicatorProps {
}
export const ContextMenuItemIndicator: React.ForwardRefExoticComponent<ContextMenuItemIndicatorProps & React.RefAttributes<HTMLSpanElement>>;
type MenuSeparatorProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.Separator>;
export interface ContextMenuSeparatorProps extends MenuSeparatorProps {
}
export const ContextMenuSeparator: React.ForwardRefExoticComponent<ContextMenuSeparatorProps & React.RefAttributes<HTMLDivElement>>;
type MenuArrowProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.Arrow>;
export interface ContextMenuArrowProps extends MenuArrowProps {
}
export const ContextMenuArrow: React.ForwardRefExoticComponent<ContextMenuArrowProps & React.RefAttributes<SVGSVGElement>>;
export interface ContextMenuSubProps {
    children?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
}
export const ContextMenuSub: React.FC<ContextMenuSubProps>;
type MenuSubTriggerProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.SubTrigger>;
export interface ContextMenuSubTriggerProps extends MenuSubTriggerProps {
}
export const ContextMenuSubTrigger: React.ForwardRefExoticComponent<ContextMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>>;
type MenuSubContentProps = Radix.ComponentPropsWithoutRef<typeof MenuPrimitive.SubContent>;
export interface ContextMenuSubContentProps extends MenuSubContentProps {
}
export const ContextMenuSubContent: React.ForwardRefExoticComponent<ContextMenuSubContentProps & React.RefAttributes<HTMLDivElement>>;
export const Root: React.FC<ContextMenuProps>;
export const Trigger: React.ForwardRefExoticComponent<ContextMenuTriggerProps & React.RefAttributes<HTMLSpanElement>>;
export const Portal: React.FC<ContextMenuPortalProps>;
export const Content: React.ForwardRefExoticComponent<ContextMenuContentProps & React.RefAttributes<HTMLDivElement>>;
export const Group: React.ForwardRefExoticComponent<ContextMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
export const Label: React.ForwardRefExoticComponent<ContextMenuLabelProps & React.RefAttributes<HTMLDivElement>>;
export const Item: React.ForwardRefExoticComponent<ContextMenuItemProps & React.RefAttributes<HTMLDivElement>>;
export const CheckboxItem: React.ForwardRefExoticComponent<ContextMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>>;
export const RadioGroup: React.ForwardRefExoticComponent<ContextMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
export const RadioItem: React.ForwardRefExoticComponent<ContextMenuRadioItemProps & React.RefAttributes<HTMLDivElement>>;
export const ItemIndicator: React.ForwardRefExoticComponent<ContextMenuItemIndicatorProps & React.RefAttributes<HTMLSpanElement>>;
export const Separator: React.ForwardRefExoticComponent<ContextMenuSeparatorProps & React.RefAttributes<HTMLDivElement>>;
export const Arrow: React.ForwardRefExoticComponent<ContextMenuArrowProps & React.RefAttributes<SVGSVGElement>>;
export const Sub: React.FC<ContextMenuSubProps>;
export const SubTrigger: React.ForwardRefExoticComponent<ContextMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>>;
export const SubContent: React.ForwardRefExoticComponent<ContextMenuSubContentProps & React.RefAttributes<HTMLDivElement>>;

//# sourceMappingURL=index.d.ts.map
