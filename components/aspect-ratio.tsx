// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
import { ComponentPropsWithoutRef, PrimitiveForwardRefComponent } from "../modules/lib/type-utils.ts"
import * as AspectRatioPrimitive from "../modules/esm.sh/_@radix-ui/react-aspect-ratio@1.0.3.js"


type PrimitiveDivProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"div">>
interface AspectRatioProps extends PrimitiveDivProps {
    ratio?: number
}

const AspectRatio:React.ForwardRefExoticComponent<AspectRatioProps & React.RefAttributes<HTMLDivElement>> = AspectRatioPrimitive.Root

export { AspectRatio }
