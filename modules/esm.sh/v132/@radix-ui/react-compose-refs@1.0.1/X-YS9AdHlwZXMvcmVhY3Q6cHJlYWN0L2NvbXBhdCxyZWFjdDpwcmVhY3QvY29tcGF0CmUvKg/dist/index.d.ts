// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../../../../esm.sh/preact@10.19.6/compat.js'
type PossibleRef<T> = React.Ref<T> | undefined;
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */
export function composeRefs<T>(...refs: PossibleRef<T>[]): (node: T) => void;
/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */
export function useComposedRefs<T>(...refs: PossibleRef<T>[]): (node: T) => void;

//# sourceMappingURL=index.d.ts.map
