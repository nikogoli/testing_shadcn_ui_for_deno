// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../modules/esm.sh/preact@10.19.6/compat.js'
import { DismissableLayerProps } from "../type-utils-MenuPrimitve.d.ts";
import * as VisuallyHiddenPrimitive from "../type-utils-VisuallyHiddenPrimitive.d.ts"
import { Scope } from "../../esm.sh/v132/_@radix-ui/react-context@1.0.1.js";
import { PrimitiveForwardRefComponent, ElementRef } from "../type-utils.ts"

import {
  PrimitiveButtonProps,
  PrimitiveDivProps,
  PrimitiveListItemProps,
  PrimitiveLinkProps,
  PrimitiveNavProps,
  PrimitiveUnorderedListProps,
} from "../type-utils-Primitive.d.ts"


type NavigationMenuElement = ElementRef<PrimitiveForwardRefComponent<"nav">>;
type NavigationMenuTriggerElement = ElementRef<PrimitiveForwardRefComponent<"button">>;

type Orientation = 'vertical' | 'horizontal';
type Direction = 'ltr' | 'rtl'


/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
export const Root: React.ForwardRefExoticComponent<NavigationMenuProps & React.RefAttributes<HTMLElement>>;

interface NavigationMenuProps extends Omit<NavigationMenuProviderProps, keyof NavigationMenuProviderPrivateProps>, PrimitiveNavProps {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    dir?: Direction;
    orientation?: Orientation;
    /**
     * The duration from when the pointer enters the trigger until the tooltip gets opened.
     * @defaultValue 200
     */
    delayDuration?: number;
    /**
     * How much time a user has to enter another trigger without incurring a delay again.
     * @defaultValue 300
     */
    skipDelayDuration?: number;
}

interface NavigationMenuProviderPrivateProps {
  isRootMenu: boolean;
  scope: Scope;
  children: React.ReactNode;
  orientation: Orientation;
  dir: Direction;
  rootNavigationMenu: NavigationMenuElement | null;
  value: string;
  onTriggerEnter(itemValue: string): void;
  onTriggerLeave?(): void;
  onContentEnter?(): void;
  onContentLeave?(): void;
  onItemSelect(itemValue: string): void;
  onItemDismiss(): void;
}

interface NavigationMenuProviderProps extends NavigationMenuProviderPrivateProps {
}


/* -------------------------------------------------------------------------------------------------
 * Sub
 * -----------------------------------------------------------------------------------------------*/
export const Sub: React.ForwardRefExoticComponent<NavigationMenuSubProps & React.RefAttributes<HTMLDivElement>>;

interface NavigationMenuSubProps extends Omit<NavigationMenuProviderProps, keyof NavigationMenuProviderPrivateProps>, PrimitiveDivProps {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    orientation?: Orientation;
}


/* -------------------------------------------------------------------------------------------------
 * List
 * -----------------------------------------------------------------------------------------------*/
export const List: React.ForwardRefExoticComponent<NavigationMenuListProps & React.RefAttributes<HTMLUListElement>>;

interface NavigationMenuListProps extends PrimitiveUnorderedListProps {
}


/* -------------------------------------------------------------------------------------------------
 * Item
 * -----------------------------------------------------------------------------------------------*/
export const Item: React.ForwardRefExoticComponent<NavigationMenuItemProps & React.RefAttributes<HTMLLIElement>>;

interface NavigationMenuItemProps extends PrimitiveListItemProps {
    value?: string;
}


/* -------------------------------------------------------------------------------------------------
 * Trigger
 * -----------------------------------------------------------------------------------------------*/
export const Trigger: React.ForwardRefExoticComponent<NavigationMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;

interface NavigationMenuTriggerProps extends PrimitiveButtonProps {
}


/* -------------------------------------------------------------------------------------------------
 * Link
 * -----------------------------------------------------------------------------------------------*/
export const Link: React.ForwardRefExoticComponent<NavigationMenuLinkProps & React.RefAttributes<HTMLAnchorElement>>;

interface NavigationMenuLinkProps extends Omit<PrimitiveLinkProps, 'onSelect'> {
    active?: boolean;
    onSelect?: (event: Event) => void;
}


/* -------------------------------------------------------------------------------------------------
 * Indicator
 * -----------------------------------------------------------------------------------------------*/
export const Indicator: React.ForwardRefExoticComponent<NavigationMenuIndicatorProps & React.RefAttributes<HTMLDivElement>>;

interface NavigationMenuIndicatorProps extends NavigationMenuIndicatorImplProps {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}
interface NavigationMenuIndicatorImplProps extends PrimitiveDivProps {
}


/* -------------------------------------------------------------------------------------------------
 * Content
 * -----------------------------------------------------------------------------------------------*/
export const Content: React.ForwardRefExoticComponent<NavigationMenuContentProps & React.RefAttributes<HTMLDivElement>>;

interface NavigationMenuContentProps extends Omit<NavigationMenuContentImplProps, keyof NavigationMenuContentImplPrivateProps> {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}

type FocusProxyElement = ElementRef<typeof VisuallyHiddenPrimitive.Root>;
interface NavigationMenuContentImplPrivateProps {
    value: string;
    triggerRef: React.RefObject<NavigationMenuTriggerElement>;
    focusProxyRef: React.RefObject<FocusProxyElement>;
    wasEscapeCloseRef: React.MutableRefObject<boolean>;
    onContentFocusOutside(): void;
    onRootContentClose(): void;
}

interface NavigationMenuContentImplProps extends Omit<DismissableLayerProps, 'onDismiss'|'value'>, NavigationMenuContentImplPrivateProps {
}


/* -------------------------------------------------------------------------------------------------
 * Viewport
 * -----------------------------------------------------------------------------------------------*/
export const Viewport: React.ForwardRefExoticComponent<NavigationMenuViewportProps & React.RefAttributes<HTMLDivElement>>;

interface NavigationMenuViewportProps extends Omit<NavigationMenuViewportImplProps, 'children' | 'activeContentValue'> {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}
interface NavigationMenuViewportImplProps extends PrimitiveDivProps {
}