// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from "../../../modules/esm.sh/preact@10.19.6/compat.js"

import { PrimitiveDivProps } from "../type-utils-Primitive.d.ts"


/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
export const Root: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;

interface ProgressProps extends PrimitiveDivProps {
    value?: number | undefined;
    max?: number;
    getValueLabel?(value: number, max: number): string;
}


/* -------------------------------------------------------------------------------------------------
 * Indicator
 * -----------------------------------------------------------------------------------------------*/
export declare const Indicator: React.ForwardRefExoticComponent<ProgressIndicatorProps & React.RefAttributes<HTMLDivElement>>;

interface ProgressIndicatorProps extends PrimitiveDivProps {
}



