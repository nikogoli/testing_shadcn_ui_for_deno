// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from "../../../../../../esm.sh/preact@10.19.6/compat.js";
import * as Radix from "../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
import { Primitive } from "../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
type PrimitiveButtonProps = Radix.ComponentPropsWithoutRef<typeof Primitive.button>;
export interface ToggleProps extends PrimitiveButtonProps {
    /**
     * The controlled state of the toggle.
     */
    pressed?: boolean;
    /**
     * The state of the toggle when initially rendered. Use `defaultPressed`
     * if you do not need to control the state of the toggle.
     * @defaultValue false
     */
    defaultPressed?: boolean;
    /**
     * The callback that fires when the state of the toggle changes.
     */
    onPressedChange?(pressed: boolean): void;
}
export const Toggle: React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLButtonElement>>;
export const Root: React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLButtonElement>>;

//# sourceMappingURL=index.d.ts.map
