// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../modules/esm.sh/preact@10.19.6/compat.js'

import { PrimitiveDivProps, PrimitiveSpanProps } from "../type-utils-Primitive.d.ts"


type Direction = 'ltr' | 'rtl';


/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
export const Root: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLSpanElement>>;

interface SliderProps extends Omit<SliderHorizontalProps | SliderVerticalProps, keyof SliderOrientationPrivateProps | 'defaultValue'> {
    name?: string;
    disabled?: boolean;
    orientation?: React.HTMLAttributes<HTMLElement>['aria-orientation'];
    dir?: Direction;
    min?: number;
    max?: number;
    step?: number;
    minStepsBetweenThumbs?: number;
    value?: number[];
    defaultValue?: number[];
    onValueChange?(value: number[]): void;
    onValueCommit?(value: number[]): void;
    inverted?: boolean;
}

type SliderOrientationPrivateProps = {
    min: number;
    max: number;
    inverted: boolean;
    onSlideStart?(value: number): void;
    onSlideMove?(value: number): void;
    onSlideEnd?(): void;
    onHomeKeyDown(event: React.JSX.TargetedKeyboardEvent<HTMLElement>): void;
    onEndKeyDown(event: React.JSX.TargetedKeyboardEvent<HTMLElement>): void;
    onStepKeyDown(step: {
        event: React.JSX.TargetedKeyboardEvent<HTMLElement>;
        direction: number;
    }): void;
};

interface SliderHorizontalProps extends SliderOrientationProps {
    dir?: Direction;
}

interface SliderVerticalProps extends SliderOrientationProps {
}

interface SliderOrientationProps extends Omit<Omit<SliderImplProps, keyof SliderImplPrivateProps>,"min"|"max">, SliderOrientationPrivateProps {
}

type SliderImplPrivateProps = {
    onSlideStart(event: React.JSX.TargetedPointerEvent<HTMLElement>): void;
    onSlideMove(event: React.JSX.TargetedPointerEvent<HTMLElement>): void;
    onSlideEnd(event: React.JSX.TargetedPointerEvent<HTMLElement>): void;
    onHomeKeyDown(event: React.JSX.TargetedKeyboardEvent<HTMLElement>): void;
    onEndKeyDown(event: React.JSX.TargetedKeyboardEvent<HTMLElement>): void;
    onStepKeyDown(event: React.JSX.TargetedKeyboardEvent<HTMLElement>): void;
};

interface SliderImplProps extends PrimitiveDivProps, SliderImplPrivateProps {
}


/* -------------------------------------------------------------------------------------------------
 * Track
 * -----------------------------------------------------------------------------------------------*/
export const Track: React.ForwardRefExoticComponent<SliderTrackProps & React.RefAttributes<HTMLSpanElement>>;

interface SliderTrackProps extends PrimitiveSpanProps {
}


/* -------------------------------------------------------------------------------------------------
 * Track
 * -----------------------------------------------------------------------------------------------*/
export const Range: React.ForwardRefExoticComponent<SliderRangeProps & React.RefAttributes<HTMLSpanElement>>;

interface SliderRangeProps extends PrimitiveSpanProps {
}


/* -------------------------------------------------------------------------------------------------
 * Thumb
 * -----------------------------------------------------------------------------------------------*/
export const Thumb: React.ForwardRefExoticComponent<SliderThumbProps & React.RefAttributes<HTMLSpanElement>>;

interface SliderThumbProps extends Omit<SliderThumbImplProps, 'index'> {
}
interface SliderThumbImplProps extends PrimitiveSpanProps {
    index: number;
}