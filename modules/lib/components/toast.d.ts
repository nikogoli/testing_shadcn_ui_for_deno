import * as React from "preact/compat"
import { ElementRef, PrimitiveForwardRefComponent } from "../type-utils.ts"
import { DismissableLayerProps } from "../type-utils-DismissableLayer.d.ts";

import {
  PrimitiveButtonProps,
  PrimitiveDivProps,
  PrimitiveOrderedListProps,
  PrimitiveListItemProps,
} from "../type-utils-Primitive.d.ts"

type SwipeDirection = 'up' | 'down' | 'left' | 'right';


/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
export const Provider: React.FC<ToastProviderProps>;

interface ToastProviderProps {
    children?: React.ReactNode;
    /**
     * An author-localized label for each toast. Used to help screen reader users
     * associate the interruption with a toast.
     * @defaultValue 'Notification'
     */
    label?: string;
    /**
     * Time in milliseconds that each toast should remain visible for.
     * @defaultValue 5000
     */
    duration?: number;
    /**
     * Direction of pointer swipe that should close the toast.
     * @defaultValue 'right'
     */
    swipeDirection?: SwipeDirection;
    /**
     * Distance in pixels that the swipe must pass before a close is triggered.
     * @defaultValue 50
     */
    swipeThreshold?: number;
}


/* -------------------------------------------------------------------------------------------------
 * Viewport
 * -----------------------------------------------------------------------------------------------*/
export const Viewport: React.ForwardRefExoticComponent<ToastViewportProps & React.RefAttributes<HTMLOListElement>>;

interface ToastViewportProps extends PrimitiveOrderedListProps {
    /**
     * The keys to use as the keyboard shortcut that will move focus to the toast viewport.
     * @defaultValue ['F8']
     */
    hotkey?: string[];
    /**
     * An author-localized label for the toast viewport to provide context for screen reader users
     * when navigating page landmarks. The available `{hotkey}` placeholder will be replaced for you.
     * @defaultValue 'Notifications ({hotkey})'
     */
    label?: string;
}


/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
export const Root: React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLLIElement>>;

interface ToastProps extends Omit<ToastImplProps, keyof ToastImplPrivateProps> {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}

interface ToastImplProps extends ToastImplPrivateProps, Omit<PrimitiveListItemProps, keyof ToastImplPrivateProps> {
    type?: 'foreground' | 'background';
    /**
     * Time in milliseconds that toast should remain visible for. Overrides value
     * given to `ToastProvider`.
     */
    duration?: number;
    onEscapeKeyDown?: DismissableLayerProps['onEscapeKeyDown'];
    onPause?(): void;
    onResume?(): void;
    onSwipeStart?(event: SwipeEvent): void;
    onSwipeMove?(event: SwipeEvent): void;
    onSwipeCancel?(event: SwipeEvent): void;
    onSwipeEnd?(event: SwipeEvent): void;
}

type ToastImplPrivateProps = {
    open: boolean;
    onClose(): void;
};

type SwipeEvent = {
    currentTarget: EventTarget & ToastElement;
} & Omit<CustomEvent<{
    originalEvent: React.JSX.TargetedPointerEvent<HTMLElement>;
    delta: {
        x: number;
        y: number;
    };
}>, 'currentTarget'>;

type ToastElement = ToastImplElement; 
type ToastImplElement = ElementRef<PrimitiveForwardRefComponent<"li">>;


/* -------------------------------------------------------------------------------------------------
 * Title
 * -----------------------------------------------------------------------------------------------*/
export const Title: React.ForwardRefExoticComponent<ToastTitleProps & React.RefAttributes<HTMLDivElement>>;

interface ToastTitleProps extends PrimitiveDivProps {
}


/* -------------------------------------------------------------------------------------------------
 * Description
 * -----------------------------------------------------------------------------------------------*/
export const Description: React.ForwardRefExoticComponent<ToastDescriptionProps & React.RefAttributes<HTMLDivElement>>;

interface ToastDescriptionProps extends PrimitiveDivProps {
}


/* -------------------------------------------------------------------------------------------------
 * Close
 * -----------------------------------------------------------------------------------------------*/
export const Close: React.ForwardRefExoticComponent<ToastCloseProps & React.RefAttributes<HTMLButtonElement>>;

interface ToastCloseProps extends PrimitiveButtonProps {
}


/* -------------------------------------------------------------------------------------------------
 * Action
 * -----------------------------------------------------------------------------------------------*/
export const Action: React.ForwardRefExoticComponent<ToastActionProps & React.RefAttributes<HTMLButtonElement>>;

interface ToastActionProps extends ToastCloseProps {
    /**
     * A short description for an alternate way to carry out the action. For screen reader users
     * who will not be able to navigate to the button easily/quickly.
     * @example <ToastAction altText="Goto account settings to upgrade">Upgrade</ToastAction>
     * @example <ToastAction altText="Undo (Alt+U)">Undo</ToastAction>
     */
    altText: string;
}