// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from "../../../../../../esm.sh/@babel/runtime@7.23.1/helpers/esm/extends.js";
import * as Radix from "../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
import { Primitive } from "../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
import * as RovingFocusGroup from "../../../../../../esm.sh/v132/_@radix-ui/react-roving-focus@1.0.4.js";
type PrimitiveButtonProps = Radix.ComponentPropsWithoutRef<typeof Primitive.button>;
interface RadioProps extends PrimitiveButtonProps {
    checked?: boolean;
    required?: boolean;
    onCheck?(): void;
}
declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLButtonElement>>;
type PrimitiveSpanProps = Radix.ComponentPropsWithoutRef<typeof Primitive.span>;
interface RadioIndicatorProps extends PrimitiveSpanProps {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}
declare const RadioIndicator: React.ForwardRefExoticComponent<RadioIndicatorProps & React.RefAttributes<HTMLSpanElement>>;
export const createRadioGroupScope: import("../../../../../../esm.sh/v132/_@radix-ui/react-context@1.0.1.js").CreateScope;
type RadioGroupContextValue = {
    name?: string;
    required: boolean;
    disabled: boolean;
    value?: string;
    onValueChange(value: string): void;
};
type RovingFocusGroupProps = Radix.ComponentPropsWithoutRef<typeof RovingFocusGroup.Root>;
type PrimitiveDivProps = Radix.ComponentPropsWithoutRef<typeof Primitive.div>;
export interface RadioGroupProps extends PrimitiveDivProps {
    name?: RadioGroupContextValue['name'];
    required?: Radix.ComponentPropsWithoutRef<typeof Radio>['required'];
    disabled?: Radix.ComponentPropsWithoutRef<typeof Radio>['disabled'];
    dir?: RovingFocusGroupProps['dir'];
    orientation?: RovingFocusGroupProps['orientation'];
    loop?: RovingFocusGroupProps['loop'];
    defaultValue?: string;
    value?: RadioGroupContextValue['value'];
    onValueChange?: RadioGroupContextValue['onValueChange'];
}
export const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLDivElement>>;
type _RadioProps1 = Radix.ComponentPropsWithoutRef<typeof Radio>;
export interface RadioGroupItemProps extends Omit<_RadioProps1, 'onCheck' | 'name'> {
    value: string;
}
export const RadioGroupItem: React.ForwardRefExoticComponent<RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>>;
type _RadioIndicatorProps1 = Radix.ComponentPropsWithoutRef<typeof RadioIndicator>;
export interface RadioGroupIndicatorProps extends _RadioIndicatorProps1 {
}
export const RadioGroupIndicator: React.ForwardRefExoticComponent<RadioGroupIndicatorProps & React.RefAttributes<HTMLSpanElement>>;
export const Root: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLDivElement>>;
export const Item: React.ForwardRefExoticComponent<RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>>;
export const Indicator: React.ForwardRefExoticComponent<RadioGroupIndicatorProps & React.RefAttributes<HTMLSpanElement>>;

//# sourceMappingURL=index.d.ts.map
