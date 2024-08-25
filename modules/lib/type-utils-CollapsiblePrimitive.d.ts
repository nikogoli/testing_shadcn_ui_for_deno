// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../modules/esm.sh/preact@10.19.6/compat.js'
import { PrimitiveDivProps, PrimitiveButtonProps } from "./type-utils-Primitive.d.ts"


/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
export const Root: React.ForwardRefExoticComponent<
  CollapsiblePrimitiveProps & React.RefAttributes<HTMLDivElement>
>

interface CollapsiblePrimitiveProps extends PrimitiveDivProps {
  defaultOpen?: boolean;
  open?: boolean;
  disabled?: boolean;
  onOpenChange?(open: boolean): void;
}


/* -------------------------------------------------------------------------------------------------
 * Trigger
 * -----------------------------------------------------------------------------------------------*/
export const Trigger: React.ForwardRefExoticComponent<
  CollapsibleTriggerProps & React.RefAttributes<HTMLButtonElement>
>

interface CollapsibleTriggerProps extends PrimitiveButtonProps {
}


/* -------------------------------------------------------------------------------------------------
 * Content
 * -----------------------------------------------------------------------------------------------*/
export const Content: React.ForwardRefExoticComponent<
  CollapsibleContentProps & React.RefAttributes<HTMLDivElement>
>

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