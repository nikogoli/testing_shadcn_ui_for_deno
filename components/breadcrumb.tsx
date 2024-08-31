// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
import { Slot } from "../modules/esm.sh/v132/_@radix-ui/react-slot@1.0.2.js"

import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/chevron-right.tsx"
import IconDots from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/dots.tsx"

import { cn } from "../modules/lib/utils.ts"
import {
  ComponentPropsWithoutRef,
  PrimitiveForwardRefComponent
} from "../modules/lib/type-utils.ts"


const Breadcrumb = React.forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"nav">> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = "Breadcrumb"


const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"ol">>
>(({ class:className, ...props }, ref) => (
  <ol
    ref={ref}
    class={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"


const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"li">>
>(({ class:className, ...props }, ref) => (
  <li
    ref={ref}
    class={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"


const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"a">> & {
    asChild?: boolean
  }
>(({ asChild, class:className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"


const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  ComponentPropsWithoutRef<PrimitiveForwardRefComponent<"span">>
>(({ class:className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    class={cn("font-normal text-foreground", className)}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"


const BreadcrumbSeparator = ({
  children,
  class:className,
  ...props
}: React.ComponentProps<PrimitiveForwardRefComponent<"li">>) => (
  <li
    role="presentation"
    aria-hidden="true"
    class={cn("[&>svg]:size-3.5", className)}
    {...props}
  >
    {children ?? <IconChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"


const BreadcrumbEllipsis = ({
  class:className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    class={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <IconDots class="h-4 w-4" />
    <span class="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"


export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}