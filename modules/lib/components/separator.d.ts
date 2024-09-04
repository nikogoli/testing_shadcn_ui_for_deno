// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../esm.sh/preact@10.19.6/compat.js'
import { PrimitiveDivProps } from "../type-utils-Primitive.d.ts";


type Orientation = "horizontal"|"vertical";


/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
export const Root: React.ForwardRefExoticComponent<SeparatorProps & React.RefAttributes<HTMLDivElement>>;

interface SeparatorProps extends PrimitiveDivProps {
  /**
   * Either `vertical` or `horizontal`. Defaults to `horizontal`.
   */
  orientation?: Orientation;
  /**
   * Whether or not the component is purely decorative. When true, accessibility-related attributes
   * are updated so that that the rendered element is removed from the accessibility tree.
   */
  decorative?: boolean;
}


/* -------------------------------------------------------------------------------------------------
 * Separator
 * -----------------------------------------------------------------------------------------------*/
export const Separator: React.ForwardRefExoticComponent<SeparatorProps & React.RefAttributes<HTMLDivElement>>;
