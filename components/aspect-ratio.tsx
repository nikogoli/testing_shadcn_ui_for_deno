// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
import { PrimitiveDivProps } from "../modules/lib/type-utils-Primitive.d.ts"
import * as AspectRatioPrimitive from "../modules/esm.sh/_@radix-ui/react-aspect-ratio@1.0.3.js"


interface AspectRatioProps extends PrimitiveDivProps {
    ratio?: number
}


export const AspectRatio: React.ForwardRefExoticComponent<
    AspectRatioProps & React.RefAttributes<HTMLDivElement>
> = AspectRatioPrimitive.Root