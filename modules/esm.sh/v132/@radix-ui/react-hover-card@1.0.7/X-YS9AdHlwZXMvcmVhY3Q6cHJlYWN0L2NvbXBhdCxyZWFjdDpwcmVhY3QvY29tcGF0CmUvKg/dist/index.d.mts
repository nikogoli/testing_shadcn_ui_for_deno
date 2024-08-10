// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../../../../../modules/esm.sh/preact@10.19.6/compat.js';
import * as PopperPrimitive from "../../../../../../esm.sh/v132/_@radix-ui/react-popper@1.1.3.js";
import { Portal as _Portal1 } from "../../../../../../esm.sh/v132/_@radix-ui/react-portal@1.0.4.js";
import * as Radix from "../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
import { Primitive } from "../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
import { DismissableLayer } from "../../../../../../esm.sh/v132/_@radix-ui/react-dismissable-layer@1.0.5.js";
export const createHoverCardScope: import("../../../../../../esm.sh/v132/_@radix-ui/react-context@1.0.1.js").CreateScope;
export interface HoverCardProps {
    children?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    openDelay?: number;
    closeDelay?: number;
}
export const HoverCard: React.FC<HoverCardProps>;
type PrimitiveLinkProps = Radix.ComponentPropsWithoutRef<typeof Primitive.a>;
export interface HoverCardTriggerProps extends PrimitiveLinkProps {
}
export const HoverCardTrigger: React.ForwardRefExoticComponent<HoverCardTriggerProps & React.RefAttributes<HTMLAnchorElement>>;
type PortalProps = React.ComponentPropsWithoutRef<typeof _Portal1>;
export interface HoverCardPortalProps {
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
export const HoverCardPortal: React.FC<HoverCardPortalProps>;
export interface HoverCardContentProps extends HoverCardContentImplProps {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}
export const HoverCardContent: React.ForwardRefExoticComponent<HoverCardContentProps & React.RefAttributes<HTMLDivElement>>;
type DismissableLayerProps = Radix.ComponentPropsWithoutRef<typeof DismissableLayer>;
type PopperContentProps = Radix.ComponentPropsWithoutRef<typeof PopperPrimitive.Content>;
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
type PopperArrowProps = Radix.ComponentPropsWithoutRef<typeof PopperPrimitive.Arrow>;
export interface HoverCardArrowProps extends PopperArrowProps {
}
export const HoverCardArrow: React.ForwardRefExoticComponent<HoverCardArrowProps & React.RefAttributes<SVGSVGElement>>;
export const Root: React.FC<HoverCardProps>;
export const Trigger: React.ForwardRefExoticComponent<HoverCardTriggerProps & React.RefAttributes<HTMLAnchorElement>>;
export const Portal: React.FC<HoverCardPortalProps>;
export const Content: React.ForwardRefExoticComponent<HoverCardContentProps & React.RefAttributes<HTMLDivElement>>;
export const Arrow: React.ForwardRefExoticComponent<HoverCardArrowProps & React.RefAttributes<SVGSVGElement>>;

//# sourceMappingURL=index.d.ts.map
