// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../../../../../modules/esm.sh/preact@10.19.6/compat.js';
import { DismissableLayer } from "../../../../../../esm.sh/v132/_@radix-ui/react-dismissable-layer@1.0.5.js";
import { FocusScope } from "../../../../../../esm.sh/v132/_@radix-ui/react-focus-scope@1.0.4.js";
import * as PopperPrimitive from "../../../../../../esm.sh/v132/_@radix-ui/react-popper@1.1.3.js";
import { Portal as _Portal1 } from "../../../../../../esm.sh/v132/_@radix-ui/react-portal@1.0.4.js";
import * as Radix from "../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
import { Primitive } from "../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
export const createPopoverScope: import("../../../../../../esm.sh/v132/_@radix-ui/react-context@1.0.1.js").CreateScope;
export interface PopoverProps {
    children?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    modal?: boolean;
}
export const Popover: React.FC<PopoverProps>;
type PopperAnchorProps = Radix.ComponentPropsWithoutRef<typeof PopperPrimitive.Anchor>;
export interface PopoverAnchorProps extends PopperAnchorProps {
}
export const PopoverAnchor: React.ForwardRefExoticComponent<PopoverAnchorProps & React.RefAttributes<HTMLDivElement>>;
type PrimitiveButtonProps = Radix.ComponentPropsWithoutRef<typeof Primitive.button>;
export interface PopoverTriggerProps extends PrimitiveButtonProps {
}
export const PopoverTrigger: React.ForwardRefExoticComponent<PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
type PortalProps = React.ComponentPropsWithoutRef<typeof _Portal1>;
export interface PopoverPortalProps {
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
export const PopoverPortal: React.FC<PopoverPortalProps>;
export interface PopoverContentProps extends PopoverContentTypeProps {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}
export const PopoverContent: React.ForwardRefExoticComponent<PopoverContentProps & React.RefAttributes<HTMLDivElement>>;
interface PopoverContentTypeProps extends Omit<PopoverContentImplProps, 'trapFocus' | 'disableOutsidePointerEvents'> {
}
type FocusScopeProps = Radix.ComponentPropsWithoutRef<typeof FocusScope>;
type DismissableLayerProps = Radix.ComponentPropsWithoutRef<typeof DismissableLayer>;
type PopperContentProps = Radix.ComponentPropsWithoutRef<typeof PopperPrimitive.Content>;
interface PopoverContentImplProps extends Omit<PopperContentProps, 'onPlaced'>, Omit<DismissableLayerProps, 'onDismiss'> {
    /**
     * Whether focus should be trapped within the `Popover`
     * (default: false)
     */
    trapFocus?: FocusScopeProps['trapped'];
    /**
     * Event handler called when auto-focusing on open.
     * Can be prevented.
     */
    onOpenAutoFocus?: FocusScopeProps['onMountAutoFocus'];
    /**
     * Event handler called when auto-focusing on close.
     * Can be prevented.
     */
    onCloseAutoFocus?: FocusScopeProps['onUnmountAutoFocus'];
}
export interface PopoverCloseProps extends PrimitiveButtonProps {
}
export const PopoverClose: React.ForwardRefExoticComponent<PopoverCloseProps & React.RefAttributes<HTMLButtonElement>>;
type PopperArrowProps = Radix.ComponentPropsWithoutRef<typeof PopperPrimitive.Arrow>;
export interface PopoverArrowProps extends PopperArrowProps {
}
export const PopoverArrow: React.ForwardRefExoticComponent<PopoverArrowProps & React.RefAttributes<SVGSVGElement>>;
export const Root: React.FC<PopoverProps>;
export const Anchor: React.ForwardRefExoticComponent<PopoverAnchorProps & React.RefAttributes<HTMLDivElement>>;
export const Trigger: React.ForwardRefExoticComponent<PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export const Portal: React.FC<PopoverPortalProps>;
export const Content: React.ForwardRefExoticComponent<PopoverContentProps & React.RefAttributes<HTMLDivElement>>;
export const Close: React.ForwardRefExoticComponent<PopoverCloseProps & React.RefAttributes<HTMLButtonElement>>;
export const Arrow: React.ForwardRefExoticComponent<PopoverArrowProps & React.RefAttributes<SVGSVGElement>>;

//# sourceMappingURL=index.d.ts.map
