// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../esm.sh/preact@10.19.6/compat.js'

import {
  ElementRef,
  PrimitiveForwardRefComponent,
} from "../type-utils.ts"

import { PrimitiveDivProps } from "../type-utils-Primitive.d.ts"


type Direction = 'ltr' | 'rtl';

type Sizes = {
    content: number;
    viewport: number;
    scrollbar: {
        size: number;
        paddingStart: number;
        paddingEnd: number;
    };
};

type ScrollAreaElement = ElementRef<PrimitiveForwardRefComponent<"div">>;
type ScrollAreaViewportElement = ElementRef<PrimitiveForwardRefComponent<"div">>;
type ScrollAreaScrollbarElement = ScrollAreaScrollbarVisibleElement;
type ScrollAreaScrollbarVisibleElement = ScrollAreaScrollbarAxisElement;
type ScrollAreaScrollbarAxisElement = ScrollAreaScrollbarImplElement;
type ScrollAreaScrollbarImplElement = ElementRef<PrimitiveForwardRefComponent<"div">>;
type ScrollAreaThumbElement = ScrollAreaThumbImplElement;
type ScrollAreaThumbImplElement = ElementRef<PrimitiveForwardRefComponent<"div">>;


/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
export const Root: React.ForwardRefExoticComponent<ScrollAreaProps & React.RefAttributes<HTMLDivElement>>;

interface ScrollAreaProps extends PrimitiveDivProps {
  type?: ScrollAreaContextValue['type'];
  dir?: ScrollAreaContextValue['dir'];
  scrollHideDelay?: number;
}

type ScrollAreaContextValue = {
    type: 'auto' | 'always' | 'scroll' | 'hover';
    dir: Direction;
    scrollHideDelay: number;
    scrollArea: ScrollAreaElement | null;
    viewport: ScrollAreaViewportElement | null;
    onViewportChange(viewport: ScrollAreaViewportElement | null): void;
    content: HTMLDivElement | null;
    onContentChange(content: HTMLDivElement): void;
    scrollbarX: ScrollAreaScrollbarElement | null;
    onScrollbarXChange(scrollbar: ScrollAreaScrollbarElement | null): void;
    scrollbarXEnabled: boolean;
    onScrollbarXEnabledChange(rendered: boolean): void;
    scrollbarY: ScrollAreaScrollbarElement | null;
    onScrollbarYChange(scrollbar: ScrollAreaScrollbarElement | null): void;
    scrollbarYEnabled: boolean;
    onScrollbarYEnabledChange(rendered: boolean): void;
    onCornerWidthChange(width: number): void;
    onCornerHeightChange(height: number): void;
};



/* -------------------------------------------------------------------------------------------------
 * Viewport
 * -----------------------------------------------------------------------------------------------*/
export const Viewport: React.ForwardRefExoticComponent<ScrollAreaViewportProps & React.RefAttributes<HTMLDivElement>>;

interface ScrollAreaViewportProps extends PrimitiveDivProps {
    nonce?: string;
}



/* -------------------------------------------------------------------------------------------------
 * Scrollbar
 * -----------------------------------------------------------------------------------------------*/
export const Scrollbar: React.ForwardRefExoticComponent<ScrollAreaScrollbarProps & React.RefAttributes<HTMLDivElement>>;

interface ScrollAreaScrollbarProps extends ScrollAreaScrollbarVisibleProps {
    forceMount?: true;
}

interface ScrollAreaScrollbarVisibleProps extends Omit<ScrollAreaScrollbarAxisProps, keyof ScrollAreaScrollbarAxisPrivateProps> {
    orientation?: 'horizontal' | 'vertical';
}

interface ScrollAreaScrollbarAxisProps extends Omit<ScrollAreaScrollbarImplProps, keyof ScrollAreaScrollbarImplPrivateProps>, ScrollAreaScrollbarAxisPrivateProps {
}

type ScrollAreaScrollbarAxisPrivateProps = {
    hasThumb: boolean;
    sizes: Sizes;
    onSizesChange(sizes: Sizes): void;
    onThumbChange(thumb: ScrollAreaThumbElement | null): void;
    onThumbPointerDown(pointerPos: number): void;
    onThumbPointerUp(): void;
    onThumbPositionChange(): void;
    onWheelScroll(scrollPos: number): void;
    onDragScroll(pointerPos: number): void;
};

type ScrollAreaScrollbarImplPrivateProps = {
  sizes: Sizes;
  hasThumb: boolean;
  onThumbChange: ScrollbarContext['onThumbChange'];
  onThumbPointerUp: ScrollbarContext['onThumbPointerUp'];
  onThumbPointerDown: ScrollbarContext['onThumbPointerDown'];
  onThumbPositionChange: ScrollbarContext['onThumbPositionChange'];
  onWheelScroll(event: WheelEvent, maxScrollPos: number): void;
  onDragScroll(pointerPos: {
      x: number;
      y: number;
  }): void;
  onResize(): void;
};

type ScrollbarContext = {
    hasThumb: boolean;
    scrollbar: ScrollAreaScrollbarElement | null;
    onThumbChange(thumb: ScrollAreaThumbElement | null): void;
    onThumbPointerUp(): void;
    onThumbPointerDown(pointerPos: {
        x: number;
        y: number;
    }): void;
    onThumbPositionChange(): void;
};


interface ScrollAreaScrollbarImplProps extends Omit<PrimitiveDivProps, keyof ScrollAreaScrollbarImplPrivateProps>, ScrollAreaScrollbarImplPrivateProps {
}



/* -------------------------------------------------------------------------------------------------
 * Thumb
 * -----------------------------------------------------------------------------------------------*/
export const Thumb: React.ForwardRefExoticComponent<ScrollAreaThumbProps & React.RefAttributes<HTMLDivElement>>;

interface ScrollAreaThumbProps extends ScrollAreaThumbImplProps {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}

interface ScrollAreaThumbImplProps extends PrimitiveDivProps {
}



/* -------------------------------------------------------------------------------------------------
 * Thumb
 * -----------------------------------------------------------------------------------------------*/
export const Corner: React.ForwardRefExoticComponent<ScrollAreaCornerProps & React.RefAttributes<HTMLDivElement>>;

interface ScrollAreaCornerProps extends ScrollAreaCornerImplProps {
}

interface ScrollAreaCornerImplProps extends PrimitiveDivProps {
}