// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../../../../../modules/esm.sh/preact@10.19.6/compat.js';
declare type Props = {
    /**
     * styles to apply
     */
    styles: string;
    /**
     * marks style as dynamic, so it will be reapplied on styles change
     * note: this is not expected behavior from a "singleton"
     * @default false
     */
    dynamic?: boolean;
};
/**
 * create a Component to add styles on demand
 * - styles are added when first instance is mounted
 * - styles are removed when the last instance is unmounted
 * - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior
 */
export declare const styleSingleton: () => React.FC<Props>;
export {};
