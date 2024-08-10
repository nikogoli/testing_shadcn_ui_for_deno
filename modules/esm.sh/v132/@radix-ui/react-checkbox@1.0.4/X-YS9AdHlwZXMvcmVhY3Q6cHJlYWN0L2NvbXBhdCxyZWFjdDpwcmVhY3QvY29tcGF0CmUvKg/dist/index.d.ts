// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../../../../esm.sh/preact@10.19.6/compat.js';
import * as Radix from "../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
import { Primitive } from "../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
export const createCheckboxScope: import("../../../../../../esm.sh/v132/_@radix-ui/react-context@1.0.1.js").CreateScope;
type CheckedState = boolean | 'indeterminate';
type PrimitiveButtonProps = Radix.ComponentPropsWithoutRef<typeof Primitive.button>;
export interface CheckboxProps extends Omit<PrimitiveButtonProps, 'checked' | 'defaultChecked'> {
    checked?: CheckedState;
    defaultChecked?: CheckedState;
    required?: boolean;
    onCheckedChange?(checked: CheckedState): void;
}
export const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLButtonElement>>;
type PrimitiveSpanProps = Radix.ComponentPropsWithoutRef<typeof Primitive.span>;
export interface CheckboxIndicatorProps extends PrimitiveSpanProps {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}
export const CheckboxIndicator: React.ForwardRefExoticComponent<CheckboxIndicatorProps & React.RefAttributes<HTMLSpanElement>>;
export const Root: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLButtonElement>>;
export const Indicator: React.ForwardRefExoticComponent<CheckboxIndicatorProps & React.RefAttributes<HTMLSpanElement>>;

//# sourceMappingURL=index.d.ts.map
