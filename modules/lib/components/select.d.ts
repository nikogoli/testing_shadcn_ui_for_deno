// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../modules/esm.sh/preact@10.19.6/compat.js'
import { PortalProps } from "../type-utils-PortalPrimitive.d.ts";
import { DismissableLayerProps } from "../type-utils-MenuPrimitve.d.ts";
import { FocusScopeProps } from "../type-utils-FocusScope.d.ts";
import { PopperContentProps, PopperArrowProps } from "../type-utils-PopperPrimitive.d.ts"

import {
  PrimitiveButtonProps,
  PrimitiveDivProps,
  PrimitiveSpanProps
} from "../type-utils-Primitive.d.ts"


type Direction = 'ltr' | 'rtl';


/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
export const Root: React.FC<SelectProps>;

interface SelectProps {
    children?: React.ReactNode;
    value?: string;
    defaultValue?: string;
    onValueChange?(value: string): void;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
    dir?: Direction;
    name?: string;
    autoComplete?: string;
    disabled?: boolean;
    required?: boolean;
}


/* -------------------------------------------------------------------------------------------------
 * Trigger
 * -----------------------------------------------------------------------------------------------*/
export const Trigger: React.ForwardRefExoticComponent<SelectTriggerProps & React.RefAttributes<HTMLButtonElement>>;

interface SelectTriggerProps extends PrimitiveButtonProps {
}


/* -------------------------------------------------------------------------------------------------
 * Value
 * -----------------------------------------------------------------------------------------------*/
export const Value: React.ForwardRefExoticComponent<SelectValueProps & React.RefAttributes<HTMLSpanElement>>;

interface SelectValueProps extends Omit<PrimitiveSpanProps, 'placeholder'> {
    placeholder?: React.ReactNode;
}


/* -------------------------------------------------------------------------------------------------
 * Icon
 * -----------------------------------------------------------------------------------------------*/
export const Icon: React.ForwardRefExoticComponent<SelectIconProps & React.RefAttributes<HTMLSpanElement>>;

interface SelectIconProps extends PrimitiveSpanProps {
}


/* -------------------------------------------------------------------------------------------------
 * Portal
 * -----------------------------------------------------------------------------------------------*/
export const Portal: React.FC<SelectPortalProps>;

interface SelectPortalProps {
    children?: React.ReactNode;
    /**
     * Specify a container element to portal the content into.
     */
    container?: PortalProps['container'];
}


/* -------------------------------------------------------------------------------------------------
 * Content
 * -----------------------------------------------------------------------------------------------*/
export const Content: React.ForwardRefExoticComponent<SelectContentProps & React.RefAttributes<HTMLDivElement>>;

interface SelectContentProps extends SelectContentImplProps {
}

interface SelectContentImplProps extends Omit<SelectPopperPositionProps, keyof SelectPopperPrivateProps>, Omit<SelectItemAlignedPositionProps, keyof SelectPopperPrivateProps> {
    /**
     * Event handler called when auto-focusing on close.
     * Can be prevented.
     */
    onCloseAutoFocus?: FocusScopeProps['onUnmountAutoFocus'];
    /**
     * Event handler called when the escape key is down.
     * Can be prevented.
     */
    onEscapeKeyDown?: DismissableLayerProps['onEscapeKeyDown'];
    /**
     * Event handler called when the a `pointerdown` event happens outside of the `DismissableLayer`.
     * Can be prevented.
     */
    onPointerDownOutside?: DismissableLayerProps['onPointerDownOutside'];
    position?: 'item-aligned' | 'popper';
}

interface SelectPopperPositionProps extends PopperContentProps, SelectPopperPrivateProps {
}
interface SelectItemAlignedPositionProps extends PrimitiveDivProps, SelectPopperPrivateProps {
}

type SelectPopperPrivateProps = {
    onPlaced?: PopperContentProps['onPlaced'];
};


/* -------------------------------------------------------------------------------------------------
 * Viewport
 * -----------------------------------------------------------------------------------------------*/
export const Viewport: React.ForwardRefExoticComponent<SelectViewportProps & React.RefAttributes<HTMLDivElement>>;

interface SelectViewportProps extends PrimitiveDivProps {
}


/* -------------------------------------------------------------------------------------------------
 * Group
 * -----------------------------------------------------------------------------------------------*/
export const Group: React.ForwardRefExoticComponent<SelectGroupProps & React.RefAttributes<HTMLDivElement>>;

interface SelectGroupProps extends PrimitiveDivProps {
}


/* -------------------------------------------------------------------------------------------------
 * Label
 * -----------------------------------------------------------------------------------------------*/
export const Label: React.ForwardRefExoticComponent<SelectLabelProps & React.RefAttributes<HTMLDivElement>>;

interface SelectLabelProps extends PrimitiveDivProps {
}


/* -------------------------------------------------------------------------------------------------
 * Item
 * -----------------------------------------------------------------------------------------------*/
export const Item: React.ForwardRefExoticComponent<SelectItemProps & React.RefAttributes<HTMLDivElement>>;

interface SelectItemProps extends PrimitiveDivProps {
    value: string;
    disabled?: boolean;
    textValue?: string;
}


/* -------------------------------------------------------------------------------------------------
 * ItemText
 * -----------------------------------------------------------------------------------------------*/
export const ItemText: React.ForwardRefExoticComponent<SelectItemTextProps & React.RefAttributes<HTMLSpanElement>>;

interface SelectItemTextProps extends PrimitiveSpanProps {
}


/* -------------------------------------------------------------------------------------------------
 * ItemIndicator
 * -----------------------------------------------------------------------------------------------*/
export const ItemIndicator: React.ForwardRefExoticComponent<SelectItemIndicatorProps & React.RefAttributes<HTMLSpanElement>>;

interface SelectItemIndicatorProps extends PrimitiveSpanProps {
}


/* -------------------------------------------------------------------------------------------------
 * ScrollUp/DownButton
 * -----------------------------------------------------------------------------------------------*/
export const ScrollUpButton: React.ForwardRefExoticComponent<SelectScrollUpButtonProps & React.RefAttributes<HTMLDivElement>>;

interface SelectScrollUpButtonProps extends Omit<SelectScrollButtonImplProps, 'onAutoScroll'> {
}

export const ScrollDownButton: React.ForwardRefExoticComponent<SelectScrollDownButtonProps & React.RefAttributes<HTMLDivElement>>;

interface SelectScrollDownButtonProps extends Omit<SelectScrollButtonImplProps, 'onAutoScroll'> {
}
interface SelectScrollButtonImplProps extends PrimitiveDivProps {
    onAutoScroll(): void;
}


/* -------------------------------------------------------------------------------------------------
 * Separator
 * -----------------------------------------------------------------------------------------------*/
export const Separator: React.ForwardRefExoticComponent<SelectSeparatorProps & React.RefAttributes<HTMLDivElement>>;

interface SelectSeparatorProps extends PrimitiveDivProps {
}


/* -------------------------------------------------------------------------------------------------
 * Arrow
 * -----------------------------------------------------------------------------------------------*/
export const Arrow: React.ForwardRefExoticComponent<SelectArrowProps & React.RefAttributes<SVGSVGElement>>;

interface SelectArrowProps extends PopperArrowProps {
}
