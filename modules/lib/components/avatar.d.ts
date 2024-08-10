// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../esm.sh/preact@10.19.6/compat.js'
import { PrimitiveForwardRefComponent, ComponentPropsWithoutRef } from "../type-utils.ts"

/**
 * Following type-definitions are based on "https://esm.sh/v132/@radix-ui/react-avatar@1.0.4/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.mts"
 */ 


type PrimitiveSpanProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"span">>;
interface AvatarProps extends PrimitiveSpanProps {
}

export const Root: React.ForwardRefExoticComponent<
  AvatarProps & React.RefAttributes<HTMLSpanElement>
>;



interface AvatarFallbackProps extends PrimitiveSpanProps {
  delayMs?: number;
}
export const Fallback: React.ForwardRefExoticComponent<
  AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>
>;



type ImageLoadingStatus = 'idle' | 'loading' | 'loaded' | 'error';
type PrimitiveImageProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"img">>;
interface AvatarImageProps extends PrimitiveImageProps {
    onLoadingStatusChange?: (status: ImageLoadingStatus) => void;
}

export const Image: React.ForwardRefExoticComponent<
  AvatarImageProps & React.RefAttributes<HTMLImageElement>
>;