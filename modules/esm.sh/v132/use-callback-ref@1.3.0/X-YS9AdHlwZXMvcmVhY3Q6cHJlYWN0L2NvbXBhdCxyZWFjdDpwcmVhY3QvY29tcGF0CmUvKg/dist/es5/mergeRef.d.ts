// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import { MutableRefObject } from '../../../../../../../modules/esm.sh/preact@10.19.6/compat.js';
import { ReactRef } from './types.d.ts';
/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link useMergeRefs} to be used in ReactComponents
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = mergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
export declare function mergeRefs<T>(refs: ReactRef<T>[]): MutableRefObject<T | null>;
