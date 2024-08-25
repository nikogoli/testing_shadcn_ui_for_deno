// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from "../../../modules/esm.sh/preact@10.19.6/compat.js"
import { PortalProps } from "../type-utils-PortalPrimitive.d.ts";
import { DismissableLayerProps } from "../type-utils-DismissableLayer.d.ts";
import { PopperContentProps, PopperArrowProps } from "../type-utils-PopperPrimitive.d.ts"; 

import { PrimitiveButtonProps } from "../type-utils-Primitive.d.ts"


/* -------------------------------------------------------------------------------------------------
 * Provider
 * -----------------------------------------------------------------------------------------------*/
export const Provider: React.FC<TooltipProviderProps>;

interface TooltipProviderProps {
    children: React.ReactNode;
    /**
     * The duration from when the pointer enters the trigger until the tooltip gets opened.
     * @defaultValue 700
     */
    delayDuration?: number;
    /**
     * How much time a user has to enter another trigger without incurring a delay again.
     * @defaultValue 300
     */
    skipDelayDuration?: number;
    /**
     * When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.
     * @defaultValue false
     */
    disableHoverableContent?: boolean;
}


/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
export const Root: React.FC<TooltipProps>;

interface TooltipProps {
    children?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    /**
     * The duration from when the pointer enters the trigger until the tooltip gets opened. This will
     * override the prop with the same name passed to Provider.
     * @defaultValue 700
     */
    delayDuration?: number;
    /**
     * When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.
     * @defaultValue false
     */
    disableHoverableContent?: boolean;
}


/* -------------------------------------------------------------------------------------------------
 * Trigger
 * -----------------------------------------------------------------------------------------------*/
export const Trigger: React.ForwardRefExoticComponent<TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>>;

interface TooltipTriggerProps extends PrimitiveButtonProps {
}


/* -------------------------------------------------------------------------------------------------
 * Portal
 * -----------------------------------------------------------------------------------------------*/
export const Portal: React.FC<TooltipPortalProps>;

interface TooltipPortalProps {
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
export const Content: React.ForwardRefExoticComponent<TooltipContentProps & React.RefAttributes<HTMLDivElement>>;

interface TooltipContentProps extends TooltipContentImplProps {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}

interface TooltipContentImplProps extends Omit<PopperContentProps, 'onPlaced'> {
  /**
   * A more descriptive label for accessibility purpose
   */
  'aria-label'?: string;
  /**
   * Event handler called when the escape key is down.
   * Can be prevented.
   */
  onEscapeKeyDown?: DismissableLayerProps['onEscapeKeyDown'];
  /**
   * Event handler called when the a `pointerdown` event happens outside of the `Tooltip`.
   * Can be prevented.
   */
  onPointerDownOutside?: DismissableLayerProps['onPointerDownOutside'];
}


/* -------------------------------------------------------------------------------------------------
 * Content
 * -----------------------------------------------------------------------------------------------*/
export const Arrow: React.ForwardRefExoticComponent<TooltipArrowProps & React.RefAttributes<SVGSVGElement>>;

interface TooltipArrowProps extends PopperArrowProps {
}