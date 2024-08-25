// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
// @deno-types="../modules/lib/components/avatar.d.ts"
import * as AvatarPrimitive from '../modules/esm.sh/v132/_@radix-ui/react-avatar@1.0.4.js'
import * as AvatarTypes from "../modules/lib/components/avatar.d.ts"

import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"


const Avatar = React.forwardRef<
  ElementRef<typeof AvatarTypes.Root>,
  ComponentPropsWithoutRef<typeof AvatarTypes.Root>
>(({ class:className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName


const AvatarImage = React.forwardRef<
  ElementRef<typeof AvatarTypes.Image>,
  ComponentPropsWithoutRef<typeof AvatarTypes.Image>
>(({ class:className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props} />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName


const AvatarFallback = React.forwardRef<
  ElementRef<typeof AvatarTypes.Fallback>,
  ComponentPropsWithoutRef<typeof AvatarTypes.Fallback>
>(({ class:className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className)}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName


export {
  Avatar,
  AvatarImage,
  AvatarFallback
}