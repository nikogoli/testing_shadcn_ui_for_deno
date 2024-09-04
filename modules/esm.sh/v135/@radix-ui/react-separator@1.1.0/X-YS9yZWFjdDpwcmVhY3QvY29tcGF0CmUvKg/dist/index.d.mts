// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../../../../esm.sh/preact@10.19.6/compat.js'
import { Primitive } from '../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js';

declare const ORIENTATIONS: readonly ["horizontal", "vertical"];
type Orientation = (typeof ORIENTATIONS)[number];
type PrimitiveDivProps = React.ComponentPropsWithoutRef<typeof Primitive.div>;
interface SeparatorProps extends PrimitiveDivProps {
    /**
     * Either `vertical` or `horizontal`. Defaults to `horizontal`.
     */
    orientation?: Orientation;
    /**
     * Whether or not the component is purely decorative. When true, accessibility-related attributes
     * are updated so that that the rendered element is removed from the accessibility tree.
     */
    decorative?: boolean;
}
declare const Separator: React.ForwardRefExoticComponent<SeparatorProps & React.RefAttributes<HTMLDivElement>>;
declare const Root: React.ForwardRefExoticComponent<SeparatorProps & React.RefAttributes<HTMLDivElement>>;

export { Root, Separator, type SeparatorProps };
