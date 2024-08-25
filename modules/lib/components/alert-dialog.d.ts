// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../esm.sh/preact@10.19.6/compat.js'
import { ComponentPropsWithoutRef } from "../type-utils.ts"
import * as AltDialogPrimitive from "../type-utils-DialogPrimitive.d.ts"



/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
export const Root: React.FC<AlertDialogProps>;

type DialogProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Root>
interface AlertDialogProps extends Omit<DialogProps, 'modal'> {
}


/* -------------------------------------------------------------------------------------------------
 * Trigger
 * -----------------------------------------------------------------------------------------------*/
export const Trigger: React.ForwardRefExoticComponent<
  AlertDialogTriggerProps & React.RefAttributes<HTMLButtonElement>
>;

type DialogTriggerProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Trigger>;
interface AlertDialogTriggerProps extends DialogTriggerProps {
}


/* -------------------------------------------------------------------------------------------------
 * Portal
 * -----------------------------------------------------------------------------------------------*/
export const Portal: React.FC<AlertDialogPortalProps>;

type DialogPortalProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Portal>;
interface AlertDialogPortalProps extends DialogPortalProps {
}


/* -------------------------------------------------------------------------------------------------
 * Overlay
 * -----------------------------------------------------------------------------------------------*/
export const Overlay: React.ForwardRefExoticComponent<
  AlertDialogOverlayProps & React.RefAttributes<HTMLDivElement>
>;

type DialogOverlayProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Overlay>;
interface AlertDialogOverlayProps extends DialogOverlayProps {
}


/* -------------------------------------------------------------------------------------------------
 * Content
 * -----------------------------------------------------------------------------------------------*/
export const Content: React.ForwardRefExoticComponent<
  AlertDialogContentProps & React.RefAttributes<HTMLDivElement>
>;

type DialogContentProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Content>;
interface AlertDialogContentProps extends Omit<DialogContentProps, 'onPointerDownOutside' | 'onInteractOutside'> {
}


/* -------------------------------------------------------------------------------------------------
 * Action
 * -----------------------------------------------------------------------------------------------*/
export const Action: React.ForwardRefExoticComponent<
  AlertDialogActionProps & React.RefAttributes<HTMLButtonElement>
>;

type DialogCloseProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Close>;
interface AlertDialogActionProps extends DialogCloseProps {
}


/* -------------------------------------------------------------------------------------------------
 * Cancel
 * -----------------------------------------------------------------------------------------------*/
export const Cancel: React.ForwardRefExoticComponent<
  AlertDialogCancelProps & React.RefAttributes<HTMLButtonElement>
>;

interface AlertDialogCancelProps extends DialogCloseProps {
}


/* -------------------------------------------------------------------------------------------------
 * Title
 * -----------------------------------------------------------------------------------------------*/
export const Title: React.ForwardRefExoticComponent<
  AlertDialogTitleProps & React.RefAttributes<HTMLHeadingElement>
>;

type DialogTitleProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Title>;
interface AlertDialogTitleProps extends DialogTitleProps {
}


/* -------------------------------------------------------------------------------------------------
 * Description
 * -----------------------------------------------------------------------------------------------*/
export const Description: React.ForwardRefExoticComponent<
  AlertDialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>
>;

type DialogDescriptionProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Description>;
interface AlertDialogDescriptionProps extends DialogDescriptionProps {
}