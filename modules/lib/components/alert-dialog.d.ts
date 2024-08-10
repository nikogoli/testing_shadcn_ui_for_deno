// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../esm.sh/preact@10.19.6/compat.js'
import { ComponentPropsWithoutRef } from "../type-utils.ts"
import * as AltDialogPrimitive from "../type-utils-DialogPrimitive.d.ts"

/**
 * Following type-definitions are based on "https://esm.sh/v132/@radix-ui/react-alert-dialog@1.0.5/X-YS9AdHlwZXMvcmVhY3Q6cHJlYWN0L2NvbXBhdCxyZWFjdDpwcmVhY3QvY29tcGF0CmUvKg/dist/index.d.ts"
 */ 


type DialogProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Root>
interface AlertDialogProps extends Omit<DialogProps, 'modal'> {
}

export const Root: React.FC<AlertDialogProps>;




type DialogTriggerProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Trigger>;
interface AlertDialogTriggerProps extends DialogTriggerProps {
}

export const Trigger: React.ForwardRefExoticComponent<
  AlertDialogTriggerProps & React.RefAttributes<HTMLButtonElement>
>;



type DialogPortalProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Portal>;
interface AlertDialogPortalProps extends DialogPortalProps {
}

export const Portal: React.FC<AlertDialogPortalProps>;



type DialogOverlayProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Overlay>;
interface AlertDialogOverlayProps extends DialogOverlayProps {
}

export const Overlay: React.ForwardRefExoticComponent<
  AlertDialogOverlayProps & React.RefAttributes<HTMLDivElement>
>;



type DialogContentProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Content>;
interface AlertDialogContentProps extends Omit<DialogContentProps, 'onPointerDownOutside' | 'onInteractOutside'> {
}

export const Content: React.ForwardRefExoticComponent<
  AlertDialogContentProps & React.RefAttributes<HTMLDivElement>
>;



type DialogCloseProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Close>;
interface AlertDialogActionProps extends DialogCloseProps {
}

export const Action: React.ForwardRefExoticComponent<
  AlertDialogActionProps & React.RefAttributes<HTMLButtonElement>
>;



interface AlertDialogCancelProps extends DialogCloseProps {
}
export const Cancel: React.ForwardRefExoticComponent<
  AlertDialogCancelProps & React.RefAttributes<HTMLButtonElement>
>;



type DialogTitleProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Title>;
interface AlertDialogTitleProps extends DialogTitleProps {
}

export const Title: React.ForwardRefExoticComponent<
  AlertDialogTitleProps & React.RefAttributes<HTMLHeadingElement>
>;



type DialogDescriptionProps = ComponentPropsWithoutRef<typeof AltDialogPrimitive.Description>;
interface AlertDialogDescriptionProps extends DialogDescriptionProps {
}

export const Description: React.ForwardRefExoticComponent<
  AlertDialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>
>;