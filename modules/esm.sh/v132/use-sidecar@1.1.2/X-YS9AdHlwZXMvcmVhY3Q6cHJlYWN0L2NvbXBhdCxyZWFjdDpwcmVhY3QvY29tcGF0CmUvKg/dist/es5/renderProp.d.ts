// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../../../../../modules/esm.sh/preact@10.19.6/compat.js';
import { SideCarHOC } from './types.d.ts';
declare type CombinedProps<T extends any[], K> = {
    children: (...prop: T) => any;
} & K;
declare type RenderPropComponent<T extends any[], K> = React.ComponentType<CombinedProps<T, K>>;
export declare function renderCar<T extends any[], K, C = RenderPropComponent<T, K & Partial<SideCarHOC>>>(WrappedComponent: C, defaults: (props: K) => T): (props: CombinedProps<T, K>) => React.JSX.Element;
export {};
