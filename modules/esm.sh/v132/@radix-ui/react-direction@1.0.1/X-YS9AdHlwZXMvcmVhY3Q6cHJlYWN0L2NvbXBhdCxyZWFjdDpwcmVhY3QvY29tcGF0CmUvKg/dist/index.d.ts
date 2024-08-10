// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../../../../esm.sh/preact@10.19.6/compat.js'
type Direction = 'ltr' | 'rtl';
interface DirectionProviderProps {
    children?: React.ReactNode;
    dir: Direction;
}
export const DirectionProvider: React.FC<DirectionProviderProps>;
export function useDirection(localDir?: Direction): Direction;
export const Provider: React.FC<DirectionProviderProps>;

//# sourceMappingURL=index.d.ts.map
