// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../../../../esm.sh/preact@10.19.6/compat.js'
import * as Radix from "../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
import { Primitive } from "../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
export const createCollapsibleScope: import("../../../../../../esm.sh/v132/_@radix-ui/react-context@1.0.1.js").CreateScope;
type PrimitiveDivProps = Radix.ComponentPropsWithoutRef<typeof Primitive.div>;
export interface CollapsibleProps extends PrimitiveDivProps {
    defaultOpen?: boolean;
    open?: boolean;
    disabled?: boolean;
    onOpenChange?(open: boolean): void;
}
export const Collapsible: React.ForwardRefExoticComponent<CollapsibleProps & React.RefAttributes<HTMLDivElement>>;
type PrimitiveButtonProps = Radix.ComponentPropsWithoutRef<typeof Primitive.button>;
export interface CollapsibleTriggerProps extends PrimitiveButtonProps {
}
export const CollapsibleTrigger: React.ForwardRefExoticComponent<CollapsibleTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export interface CollapsibleContentProps extends Omit<CollapsibleContentImplProps, 'present'> {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}
export const CollapsibleContent: React.ForwardRefExoticComponent<CollapsibleContentProps & React.RefAttributes<HTMLDivElement>>;
interface CollapsibleContentImplProps extends PrimitiveDivProps {
    present: boolean;
}
export const Root: React.ForwardRefExoticComponent<CollapsibleProps & React.RefAttributes<HTMLDivElement>>;
export const Trigger: React.ForwardRefExoticComponent<CollapsibleTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export const Content: React.ForwardRefExoticComponent<CollapsibleContentProps & React.RefAttributes<HTMLDivElement>>;

//# sourceMappingURL=index.d.ts.map
