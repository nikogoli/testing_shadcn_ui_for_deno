// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../../../../../modules/esm.sh/preact@10.19.6/compat.js';
import { GapMode } from './utils.d.ts';
export interface BodyScroll {
    noRelative?: boolean;
    noImportant?: boolean;
    gapMode?: GapMode;
}
/**
 * Removes page scrollbar and blocks page scroll when mounted
 */
export declare const RemoveScrollBar: React.FC<BodyScroll>;
