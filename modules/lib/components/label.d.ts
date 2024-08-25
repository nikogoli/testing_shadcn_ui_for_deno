// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../esm.sh/preact@10.19.6/compat.js'

import { PrimitiveLabelProps } from "../type-utils-Primitive.d.ts"


/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
export const Root: React.ForwardRefExoticComponent<
  LabelProps & React.RefAttributes<HTMLLabelElement>
>;

interface LabelProps extends PrimitiveLabelProps {
}
