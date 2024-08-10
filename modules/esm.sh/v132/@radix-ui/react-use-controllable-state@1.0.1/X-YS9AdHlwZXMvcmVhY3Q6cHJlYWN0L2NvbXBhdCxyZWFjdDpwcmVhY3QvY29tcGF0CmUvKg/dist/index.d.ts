// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../../../../esm.sh/preact@10.19.6/compat.js';
type UseControllableStateParams<T> = {
    prop?: T | undefined;
    defaultProp?: T | undefined;
    onChange?: (state: T) => void;
};
export function useControllableState<T>({ prop, defaultProp, onChange, }: UseControllableStateParams<T>): readonly [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>];

//# sourceMappingURL=index.d.ts.map
