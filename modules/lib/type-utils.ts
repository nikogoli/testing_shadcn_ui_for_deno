// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import {
  Component,
  ComponentProps,
  ComponentType,
  ForwardRefExoticComponent,
  JSX,
  PropsWithoutRef,
  ReactElement,
  Ref,
  RefAttributes,
} from "../esm.sh/preact@10.19.6/compat.js";


/**
 * Following 3 type-definitions are based on "https://esm.sh/v132/@radix-ui/react-primitive@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0/dist/index.d.ts",
 * rewriting `extends ElementType` to `extends JSX.ElementType`
 */ 
export type PrimitivePropsWithRef<E extends JSX.ElementType> = ComponentPropsWithRef<E> & {
  asChild?: boolean;
}


export interface PrimitiveForwardRefComponent<E extends JSX.ElementType> extends React.ForwardRefExoticComponent<PrimitivePropsWithRef<E>> {
}


export type PropsWithRef<P> =
  // Just "P extends { ref?: infer R }" looks sufficient, but R will infer as {} if P is {}.
  "ref" extends keyof P
    ? P extends { ref?: infer R | undefined }
      ? string extends R
        ? PropsWithoutRef<P> & { ref?: Exclude<R, string> | undefined }
        : P
      : P
    : P;


/**
 * Based on https://github.com/preactjs/preact/blob/2c6df95881e7919a01b0b344025e9e799736f05b/compat/src/index.d.ts#L732,
 */
export type ComponentPropsWithoutRef<T extends JSX.ElementType> = PropsWithoutRef<ComponentProps<T>>;


/**
 * Based on https://github.com/preactjs/preact/blob/2c6df95881e7919a01b0b344025e9e799736f05b/compat/src/index.d.ts#L734,
 */
export type ComponentPropsWithRef<
  // deno-lint-ignore no-explicit-any
  C extends ComponentType<any> | keyof JSX.IntrinsicElements
  // deno-lint-ignore no-explicit-any
> = C extends new (props: infer P) => Component<any, any>
  ? PropsWithoutRef<P> & RefAttributes<InstanceType<C>>
  : ComponentProps<C>;


  
/**
 * Based on "https://github.com/DefinitelyTyped/DefinitelyTyped/blob/11fb1265027fe6d75c6897dd07316b0052c13965/types/react/index.d.ts#L119",
 * rewriting `ReactNode` to `ReactElement` (because `ReactNode` from preact/compat causes an error)
 */ 
export type ElementRef<
  C extends
        // deno-lint-ignore no-explicit-any
      | ForwardRefExoticComponent<any>
        // deno-lint-ignore no-explicit-any
      | { new(props: any): Component<any> }
        // deno-lint-ignore no-explicit-any
      | ((props: any, context?: any) => ReactElement)
      | keyof JSX.IntrinsicElements,
> =
  "ref" extends keyof ComponentPropsWithRef<C>
      ? NonNullable<ComponentPropsWithRef<C>["ref"]> extends Ref<infer Instance>
        ? Instance
        : never
      : never;