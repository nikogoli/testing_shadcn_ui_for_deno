// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import { RefObject } from '../../../../../../../modules/esm.sh/preact@10.19.6/compat.js';
/**
 * creates a Ref object with on change callback
 * @param callback
 * @returns {RefObject}
 *
 * @see {@link useCallbackRef}
 * @see https://reactjs.org/docs/refs-and-the-dom.html#creating-refs
 */
export declare function createCallbackRef<T>(callback: (newValue: T | null, lastValue: T | null) => any): RefObject<T>;
