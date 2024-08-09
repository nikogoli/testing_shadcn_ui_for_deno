// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../modules/esm.sh/preact@10.19.6/compat.js'
import { PrimitiveForwardRefComponent, ComponentPropsWithoutRef } from "./type-utils.ts"

/**
 * Following type-definitions are based on "https://esm.sh/v132/@radix-ui/react-collapsible@1.0.3/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0/dist/index.d.ts"
 */ 

// -------- Root -------------

type PrimitiveDivProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"div">>

interface CollapsiblePrimitiveProps extends PrimitiveDivProps {
  defaultOpen?: boolean;
  open?: boolean;
  disabled?: boolean;
  onOpenChange?(open: boolean): void;
}

export const Root: React.ForwardRefExoticComponent<
  CollapsiblePrimitiveProps & React.RefAttributes<HTMLDivElement>
>



// -------- Trigger -------------

type PrimitiveButtonProps = ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"button">>;

// deno-lint-ignore no-empty-interface
interface CollapsibleTriggerProps extends PrimitiveButtonProps {
}

export const Trigger: React.ForwardRefExoticComponent<
  CollapsibleTriggerProps & React.RefAttributes<HTMLButtonElement>
>



// -------- Content -------------

interface CollapsibleContentImplProps extends PrimitiveDivProps {
  present: boolean;
}

interface CollapsibleContentProps extends Omit<CollapsibleContentImplProps, 'present'> {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}

export const Content: React.ForwardRefExoticComponent<
  CollapsibleContentProps & React.RefAttributes<HTMLDivElement>
>