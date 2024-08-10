import { Middleware, MiddlewareState, Padding } from '../../../../../../esm.sh/v132/@floating-ui/dom@1.5.3.js';
// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../../../../esm.sh/preact@10.19.6/compat.js';
export interface Options {
    /**
     * The arrow element to be positioned.
     * @default undefined
     */
    element: React.MutableRefObject<Element | null> | Element | null;
    /**
     * The padding between the arrow element and the floating element edges.
     * Useful when the floating element has rounded corners.
     * @default 0
     */
    padding?: Padding;
}
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */
export declare const arrow: (options: Options | ((state: MiddlewareState) => Options)) => Middleware;
