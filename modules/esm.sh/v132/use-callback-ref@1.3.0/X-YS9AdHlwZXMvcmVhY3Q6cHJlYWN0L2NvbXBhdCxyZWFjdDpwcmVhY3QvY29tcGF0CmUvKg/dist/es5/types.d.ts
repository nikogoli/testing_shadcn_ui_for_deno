// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../../../../../modules/esm.sh/preact@10.19.6/compat.js';
export declare type RefCallback<T> = (newValue: T | null) => void;
export declare type RefObject<T> = React.MutableRefObject<T | null>;
export declare type DefinedReactRef<T> = RefCallback<T> | RefObject<T>;
export declare type ReactRef<T> = DefinedReactRef<T> | null;
