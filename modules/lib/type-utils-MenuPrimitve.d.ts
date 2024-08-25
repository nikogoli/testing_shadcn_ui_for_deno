// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../modules/esm.sh/preact@10.19.6/compat.js'
import { FocusScope } from "./type-utils-FocusScope.d.ts";
import { DismissableLayer } from "./type-utils-DismissableLayer.d.ts";
import * as RovingFocusGroup from "./type-utils-RovingFocus.d.ts"
import * as PopperPrimitive from "./type-utils-PopperPrimitive.d.ts"
import { PortalProps } from "./type-utils-PortalPrimitive.d.ts"; 

import { ComponentPropsWithoutRef } from "./type-utils.ts"
import { PrimitiveDivProps, PrimitiveSpanProps } from "./type-utils-Primitive.d.ts"


/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
export const Root: React.FC<MenuProps>;

interface MenuProps {
    children?: React.ReactNode;
    open?: boolean;
    onOpenChange?(open: boolean): void;
    dir?: 'ltr' | 'rtl';
    modal?: boolean;
}


/* -------------------------------------------------------------------------------------------------
 * Anchor
 * -----------------------------------------------------------------------------------------------*/
export const Anchor: React.ForwardRefExoticComponent<MenuAnchorProps & React.RefAttributes<HTMLDivElement>>;

interface MenuAnchorProps extends PopperAnchorProps {
}
type PopperAnchorProps = ComponentPropsWithoutRef<typeof PopperPrimitive.Anchor>;


/* -------------------------------------------------------------------------------------------------
 * Portal
 * -----------------------------------------------------------------------------------------------*/
export const Portal: React.FC<MenuPortalProps>;

interface MenuPortalProps {
    children?: React.ReactNode;
    /**
     * Specify a container element to portal the content into.
     */
    container?: PortalProps['container'];
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}


/* -------------------------------------------------------------------------------------------------
 * Content
 * -----------------------------------------------------------------------------------------------*/
export const Content: React.ForwardRefExoticComponent<MenuContentProps & React.RefAttributes<HTMLDivElement>>;

/**
 * We purposefully don't union MenuRootContent and MenuSubContent props here because
 * they have conflicting prop types. We agreed that we would allow MenuSubContent to
 * accept props that it would just ignore.
 */
interface MenuContentProps extends MenuRootContentTypeProps {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}
interface MenuRootContentTypeProps extends Omit<MenuContentImplProps, keyof MenuContentImplPrivateProps> {
}

type MenuContentImplPrivateProps = {
  onOpenAutoFocus?: FocusScopeProps['onMountAutoFocus'];
  onDismiss?: DismissableLayerProps['onDismiss'];
  disableOutsidePointerEvents?: DismissableLayerProps['disableOutsidePointerEvents'];
  /**
   * Whether scrolling outside the `MenuContent` should be prevented
   * (default: `false`)
   */
  disableOutsideScroll?: boolean;
  /**
   * Whether focus should be trapped within the `MenuContent`
   * (default: false)
   */
  trapFocus?: FocusScopeProps['trapped'];
};
interface MenuContentImplProps extends MenuContentImplPrivateProps, Omit<PopperContentProps, 'dir' | 'onPlaced'> {
  /**
   * Event handler called when auto-focusing on close.
   * Can be prevented.
   */
  onCloseAutoFocus?: FocusScopeProps['onUnmountAutoFocus'];
  /**
   * Whether keyboard navigation should loop around
   * @defaultValue false
   */
  loop?: RovingFocusGroupProps['loop'];
  onEntryFocus?: RovingFocusGroupProps['onEntryFocus'];
  onEscapeKeyDown?: DismissableLayerProps['onEscapeKeyDown'];
  onPointerDownOutside?: DismissableLayerProps['onPointerDownOutside'];
  onFocusOutside?: DismissableLayerProps['onFocusOutside'];
  onInteractOutside?: DismissableLayerProps['onInteractOutside'];
}

type FocusScopeProps = ComponentPropsWithoutRef<typeof FocusScope>;
type DismissableLayerProps = ComponentPropsWithoutRef<typeof DismissableLayer>;
type RovingFocusGroupProps = ComponentPropsWithoutRef<typeof RovingFocusGroup.Root>;
type PopperContentProps = ComponentPropsWithoutRef<typeof PopperPrimitive.Content>;


/* -------------------------------------------------------------------------------------------------
 * Group
 * -----------------------------------------------------------------------------------------------*/
export const Group: React.ForwardRefExoticComponent<MenuGroupProps & React.RefAttributes<HTMLDivElement>>;

interface MenuGroupProps extends PrimitiveDivProps {
}


/* -------------------------------------------------------------------------------------------------
 * Label
 * -----------------------------------------------------------------------------------------------*/
export const Label: React.ForwardRefExoticComponent<MenuLabelProps & React.RefAttributes<HTMLDivElement>>;

interface MenuLabelProps extends PrimitiveDivProps {
}


/* -------------------------------------------------------------------------------------------------
 * Item
 * -----------------------------------------------------------------------------------------------*/
export const Item: React.ForwardRefExoticComponent<MenuItemProps & React.RefAttributes<HTMLDivElement>>;

interface MenuItemProps extends Omit<MenuItemImplProps, 'onSelect'> {
    onSelect?: (event: Event) => void;
}
interface MenuItemImplProps extends PrimitiveDivProps {
    disabled?: boolean;
    textValue?: string;
}


/* -------------------------------------------------------------------------------------------------
 * CheckboxItem
 * -----------------------------------------------------------------------------------------------*/
export const CheckboxItem: React.ForwardRefExoticComponent<MenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>>;

interface MenuCheckboxItemProps extends MenuItemProps {
    checked?: boolean | 'indeterminate';
    onCheckedChange?: (checked: boolean) => void;
}


/* -------------------------------------------------------------------------------------------------
 * RadioGroup
 * -----------------------------------------------------------------------------------------------*/
export const RadioGroup: React.ForwardRefExoticComponent<MenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;

interface MenuRadioGroupProps extends MenuGroupProps {
    value?: string;
    onValueChange?: (value: string) => void;
}


/* -------------------------------------------------------------------------------------------------
 * RadioItem
 * -----------------------------------------------------------------------------------------------*/
export const RadioItem: React.ForwardRefExoticComponent<MenuRadioItemProps & React.RefAttributes<HTMLDivElement>>;

interface MenuRadioItemProps extends MenuItemProps {
    value: string;
}


/* -------------------------------------------------------------------------------------------------
 * ItemIndicator
 * -----------------------------------------------------------------------------------------------*/
export const ItemIndicator: React.ForwardRefExoticComponent<MenuItemIndicatorProps & React.RefAttributes<HTMLSpanElement>>;

interface MenuItemIndicatorProps extends PrimitiveSpanProps {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}


/* -------------------------------------------------------------------------------------------------
 * Separator
 * -----------------------------------------------------------------------------------------------*/
export const Separator: React.ForwardRefExoticComponent<MenuSeparatorProps & React.RefAttributes<HTMLDivElement>>;

interface MenuSeparatorProps extends PrimitiveDivProps {
}


/* -------------------------------------------------------------------------------------------------
 * Arrow
 * -----------------------------------------------------------------------------------------------*/
export const Arrow: React.ForwardRefExoticComponent<MenuArrowProps & React.RefAttributes<SVGSVGElement>>;

interface MenuArrowProps extends PopperArrowProps {
}
type PopperArrowProps = ComponentPropsWithoutRef<typeof PopperPrimitive.Arrow>;


/* -------------------------------------------------------------------------------------------------
 * Arrow
 * -----------------------------------------------------------------------------------------------*/
export const Sub: React.FC<MenuSubProps>;

interface MenuSubProps {
    children?: React.ReactNode;
    open?: boolean;
    onOpenChange?(open: boolean): void;
}


/* -------------------------------------------------------------------------------------------------
 * SubTrigger
 * -----------------------------------------------------------------------------------------------*/
export const SubTrigger: React.ForwardRefExoticComponent<MenuSubTriggerProps & React.RefAttributes<HTMLDivElement>>;

interface MenuSubTriggerProps extends MenuItemImplProps {
}


/* -------------------------------------------------------------------------------------------------
 * SubContent
 * -----------------------------------------------------------------------------------------------*/
export const SubContent: React.ForwardRefExoticComponent<MenuSubContentProps & React.RefAttributes<HTMLDivElement>>;

interface MenuSubContentProps extends Omit<MenuContentImplProps, keyof MenuContentImplPrivateProps | 'onCloseAutoFocus' | 'onEntryFocus' | 'side' | 'align'> {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}