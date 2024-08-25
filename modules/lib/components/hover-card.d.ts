// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../modules/esm.sh/preact@10.19.6/compat.js'
import { PortalProps } from "../type-utils-PortalPrimitive.d.ts"
import { DismissableLayerProps } from "../type-utils-MenuPrimitve.d.ts";
import { PopperContentProps, PopperArrowProps } from "../type-utils-PopperPrimitive.d.ts"

import { PrimitiveLinkProps } from "../type-utils-Primitive.d.ts"


/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
export const Root: React.FC<HoverCardProps>;

interface HoverCardProps {
    children?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    openDelay?: number;
    closeDelay?: number;
}


/* -------------------------------------------------------------------------------------------------
 * Trigger
 * -----------------------------------------------------------------------------------------------*/
export const Trigger: React.ForwardRefExoticComponent<HoverCardTriggerProps & React.RefAttributes<HTMLAnchorElement>>;

interface HoverCardTriggerProps extends PrimitiveLinkProps {
}


/* -------------------------------------------------------------------------------------------------
 * Trigger
 * -----------------------------------------------------------------------------------------------*/
export const Portal: React.FC<HoverCardPortalProps>;

interface HoverCardPortalProps {
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
export const Content: React.ForwardRefExoticComponent<HoverCardContentProps & React.RefAttributes<HTMLDivElement>>;

interface HoverCardContentProps extends HoverCardContentImplProps {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}
interface HoverCardContentImplProps extends Omit<PopperContentProps, 'onPlaced'> {
    /**
     * Event handler called when the escape key is down.
     * Can be prevented.
     */
    onEscapeKeyDown?: DismissableLayerProps['onEscapeKeyDown'];
    /**
     * Event handler called when the a `pointerdown` event happens outside of the `HoverCard`.
     * Can be prevented.
     */
    onPointerDownOutside?: DismissableLayerProps['onPointerDownOutside'];
    /**
     * Event handler called when the focus moves outside of the `HoverCard`.
     * Can be prevented.
     */
    onFocusOutside?: DismissableLayerProps['onFocusOutside'];
    /**
     * Event handler called when an interaction happens outside the `HoverCard`.
     * Specifically, when a `pointerdown` event happens outside or focus moves outside of it.
     * Can be prevented.
     */
    onInteractOutside?: DismissableLayerProps['onInteractOutside'];
}


/* -------------------------------------------------------------------------------------------------
 * Arrow
 * -----------------------------------------------------------------------------------------------*/
export const Arrow: React.ForwardRefExoticComponent<HoverCardArrowProps & React.RefAttributes<SVGSVGElement>>;

interface HoverCardArrowProps extends PopperArrowProps {
}
