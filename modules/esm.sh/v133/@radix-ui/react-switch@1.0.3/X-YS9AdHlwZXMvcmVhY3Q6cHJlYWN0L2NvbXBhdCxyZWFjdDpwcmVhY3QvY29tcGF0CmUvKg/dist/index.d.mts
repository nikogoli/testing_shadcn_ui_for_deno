// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from "../../../../../../esm.sh/@babel/runtime@7.23.1/helpers/esm/extends.js";
import * as Radix from "../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
import { Primitive } from "../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
export const createSwitchScope: import("../../../../../../esm.sh/v132/_@radix-ui/react-context@1.0.1.js").CreateScope;
type PrimitiveButtonProps = Radix.ComponentPropsWithoutRef<typeof Primitive.button>;
export interface SwitchProps extends PrimitiveButtonProps {
    checked?: boolean;
    defaultChecked?: boolean;
    required?: boolean;
    onCheckedChange?(checked: boolean): void;
}
export const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLButtonElement>>;
type PrimitiveSpanProps = Radix.ComponentPropsWithoutRef<typeof Primitive.span>;
export interface SwitchThumbProps extends PrimitiveSpanProps {
}
export const SwitchThumb: React.ForwardRefExoticComponent<SwitchThumbProps & React.RefAttributes<HTMLSpanElement>>;
export const Root: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLButtonElement>>;
export const Thumb: React.ForwardRefExoticComponent<SwitchThumbProps & React.RefAttributes<HTMLSpanElement>>;

//# sourceMappingURL=index.d.ts.map
