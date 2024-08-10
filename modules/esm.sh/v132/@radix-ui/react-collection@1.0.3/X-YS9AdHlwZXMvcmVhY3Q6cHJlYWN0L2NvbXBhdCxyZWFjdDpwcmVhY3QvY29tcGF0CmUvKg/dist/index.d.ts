// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../../../../esm.sh/preact@10.19.6/compat.js'
import { Slot } from "../../../../../../esm.sh/v132/_@radix-ui/react-slot@1.0.2.js";
import * as Radix from "../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js";
type SlotProps = Radix.ComponentPropsWithoutRef<typeof Slot>;
export interface CollectionProps extends SlotProps {
    scope: any;
}
export function createCollection<ItemElement extends HTMLElement, ItemData = {}>(name: string): readonly [{
    readonly Provider: React.FC<{
        children?: React.ReactNode;
        scope: any;
    }>;
    readonly Slot: React.ForwardRefExoticComponent<CollectionProps & React.RefAttributes<HTMLElement>>;
    readonly ItemSlot: React.ForwardRefExoticComponent<React.PropsWithoutRef<ItemData & {
        children: React.ReactNode;
        scope: any;
    }> & React.RefAttributes<ItemElement>>;
}, (scope: any) => () => ({
    ref: React.RefObject<ItemElement>;
} & ItemData)[], import("@radix-ui/react-context").CreateScope];

//# sourceMappingURL=index.d.ts.map
