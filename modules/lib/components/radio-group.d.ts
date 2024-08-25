// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../modules/esm.sh/preact@10.19.6/compat.js'
import { RovingFocusGroupProps } from "../type-utils-RovingFocus.d.ts"
import { ComponentPropsWithoutRef } from "../type-utils.ts"

import {
  PrimitiveButtonProps,
  PrimitiveDivProps,
  PrimitiveSpanProps,
} from "../type-utils-Primitive.d.ts"


/* -------------------------------------------------------------------------------------------------
 * Radio
 * -----------------------------------------------------------------------------------------------*/
declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLButtonElement>>;

interface RadioProps extends PrimitiveButtonProps {
    checked?: boolean;
    required?: boolean;
    onCheck?(): void;
}


/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/

export const Root: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLDivElement>>;

type RadioGroupContextValue = {
    name?: string;
    required: boolean;
    disabled: boolean;
    value?: string;
    onValueChange(value: string): void;
};

interface RadioGroupProps extends PrimitiveDivProps {
    name?: RadioGroupContextValue['name'];
    required?: ComponentPropsWithoutRef<typeof Radio>['required'];
    disabled?: ComponentPropsWithoutRef<typeof Radio>['disabled'];
    dir?: RovingFocusGroupProps['dir'];
    orientation?: RovingFocusGroupProps['orientation'];
    loop?: RovingFocusGroupProps['loop'];
    defaultValue?: string;
    value?: RadioGroupContextValue['value'];
    onValueChange?: RadioGroupContextValue['onValueChange'];
}


/* -------------------------------------------------------------------------------------------------
 * Item
 * -----------------------------------------------------------------------------------------------*/
export const Item: React.ForwardRefExoticComponent<RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>>;

interface RadioGroupItemProps extends Omit<ComponentPropsWithoutRef<typeof Radio>, 'onCheck' | 'name'> {
    value: string;
}


/* -------------------------------------------------------------------------------------------------
 * Indicator
 * -----------------------------------------------------------------------------------------------*/
export const Indicator: React.ForwardRefExoticComponent<RadioGroupIndicatorProps & React.RefAttributes<HTMLSpanElement>>;

interface RadioGroupIndicatorProps extends ComponentPropsWithoutRef<typeof RadioIndicator> {
}

declare const RadioIndicator: React.ForwardRefExoticComponent<RadioIndicatorProps & React.RefAttributes<HTMLSpanElement>>;

interface RadioIndicatorProps extends PrimitiveSpanProps {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}