// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../modules/esm.sh/preact@10.19.6/compat.js'
import { Measurable } from "../esm.sh/v132/@radix-ui/rect@1.1.0.js";
import * as ArrowPrimitive from "../esm.sh/v132/_@radix-ui/react-arrow@1.0.3.js";
import { ComponentPropsWithoutRef } from "./type-utils.ts"
import { PrimitiveDivProps } from "./type-utils-Primitive.d.ts"


export const SIDE_OPTIONS: readonly ["top", "right", "bottom", "left"];
export const ALIGN_OPTIONS: readonly ["start", "center", "end"];
type Side = typeof SIDE_OPTIONS[number];
type Align = typeof ALIGN_OPTIONS[number];


/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
export const Root: React.FC<PopperProps>;

interface PopperProps {
    children?: React.ReactNode;
}


/* -------------------------------------------------------------------------------------------------
 * Anchor
 * -----------------------------------------------------------------------------------------------*/
export const Anchor: React.ForwardRefExoticComponent<PopperAnchorProps & React.RefAttributes<HTMLDivElement>>;

interface PopperAnchorProps extends PrimitiveDivProps {
    virtualRef?: React.RefObject<Measurable>;
}


/* -------------------------------------------------------------------------------------------------
 * Content
 * -----------------------------------------------------------------------------------------------*/
export const Content: React.ForwardRefExoticComponent<PopperContentProps & React.RefAttributes<HTMLDivElement>>;

interface PopperContentProps extends PrimitiveDivProps {
    side?: Side;
    sideOffset?: number;
    align?: Align;
    alignOffset?: number;
    arrowPadding?: number;
    avoidCollisions?: boolean;
    collisionBoundary?: Boundary | Boundary[];
    collisionPadding?: number | Partial<Record<Side, number>>;
    sticky?: 'partial' | 'always';
    hideWhenDetached?: boolean;
    updatePositionStrategy?: 'optimized' | 'always';
    onPlaced?: () => void;
}
type Boundary = Element | null;


/* -------------------------------------------------------------------------------------------------
 * Arrow
 * -----------------------------------------------------------------------------------------------*/
export const Arrow: React.ForwardRefExoticComponent<PopperArrowProps & React.RefAttributes<SVGSVGElement>>;

interface PopperArrowProps extends ArrowProps {
}
type ArrowProps = ComponentPropsWithoutRef<typeof ArrowPrimitive.Root>;