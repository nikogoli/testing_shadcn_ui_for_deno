// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import { MutableRefObject } from '../../../../../../../modules/esm.sh/preact@10.19.6/compat.js';
/**
 * creates a MutableRef with ref change callback
 * @param initialValue - initial ref value
 * @param {Function} callback - a callback to run when value changes
 *
 * @example
 * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
 * ref.current = 1;
 * // prints 0 -> 1
 *
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
 * @returns {MutableRefObject}
 */
export declare function useCallbackRef<T>(initialValue: T | null, callback: (newValue: T | null, lastValue: T | null) => void): MutableRefObject<T | null>;
