// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from "../../../../../../esm.sh/preact@10.19.6/compat.js";
import * as Radix from "../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
import { Primitive } from "../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
type Direction = 'ltr' | 'rtl';
export const createSliderScope: import("../../../../../../esm.sh/v132/_@radix-ui/react-context@1.0.1.js").CreateScope;
export interface SliderProps extends Omit<SliderHorizontalProps | SliderVerticalProps, keyof SliderOrientationPrivateProps | 'defaultValue'> {
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
export const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLSpanElement>>;
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
interface SliderOrientationProps extends Omit<SliderImplProps, keyof SliderImplPrivateProps>, SliderOrientationPrivateProps {
}
interface SliderHorizontalProps extends SliderOrientationProps {
    dir?: Direction;
}
interface SliderVerticalProps extends SliderOrientationProps {
}
type PrimitiveDivProps = Radix.ComponentPropsWithoutRef<typeof Primitive.div>;
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
type PrimitiveSpanProps = Radix.ComponentPropsWithoutRef<typeof Primitive.span>;
export interface SliderTrackProps extends PrimitiveSpanProps {
}
export const SliderTrack: React.ForwardRefExoticComponent<SliderTrackProps & React.RefAttributes<HTMLSpanElement>>;
export interface SliderRangeProps extends PrimitiveSpanProps {
}
export const SliderRange: React.ForwardRefExoticComponent<SliderRangeProps & React.RefAttributes<HTMLSpanElement>>;
export interface SliderThumbProps extends Omit<SliderThumbImplProps, 'index'> {
}
export const SliderThumb: React.ForwardRefExoticComponent<SliderThumbProps & React.RefAttributes<HTMLSpanElement>>;
interface SliderThumbImplProps extends PrimitiveSpanProps {
    index: number;
}
export const Root: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLSpanElement>>;
export const Track: React.ForwardRefExoticComponent<SliderTrackProps & React.RefAttributes<HTMLSpanElement>>;
export const Range: React.ForwardRefExoticComponent<SliderRangeProps & React.RefAttributes<HTMLSpanElement>>;
export const Thumb: React.ForwardRefExoticComponent<SliderThumbProps & React.RefAttributes<HTMLSpanElement>>;

//# sourceMappingURL=index.d.ts.map
