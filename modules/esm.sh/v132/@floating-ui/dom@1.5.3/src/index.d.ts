import type { ComputePositionConfig, FloatingElement, ReferenceElement } from './types.d.ts';
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */
export declare const computePosition: (reference: ReferenceElement, floating: FloatingElement, options?: Partial<ComputePositionConfig>) => Promise<import("https://esm.sh/v132/@floating-ui/core@1.4.2/src/types.d.ts").ComputePositionReturn>;
export { autoUpdate } from './autoUpdate.d.ts';
export { platform } from './platform.d.ts';
export { arrow, autoPlacement, detectOverflow, flip, hide, inline, limitShift, offset, shift, size, } from 'https://esm.sh/v132/@floating-ui/core@1.4.2/src/types.d.ts';
export { getOverflowAncestors } from 'https://esm.sh/v132/@floating-ui/utils@0.1.3/dom/src/types.d.ts';
