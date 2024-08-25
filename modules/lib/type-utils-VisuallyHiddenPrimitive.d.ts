import { PrimitiveSpanProps } from "./type-utils-Primitive.d.ts"

interface VisuallyHiddenProps extends PrimitiveSpanProps {
}

export const Root: React.ForwardRefExoticComponent<VisuallyHiddenProps & React.RefAttributes<HTMLSpanElement>>;