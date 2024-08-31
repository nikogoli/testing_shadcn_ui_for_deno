// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
import { Button, classnamesOfButtonByVariants, buttonVariants } from "./button.tsx"

import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/chevron-right.tsx"
import IconChevronLeft from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/chevron-left.tsx"
import IconDots from "https://deno.land/x/tabler_icons_tsx@0.0.7/tsx/dots.tsx"

import { cn } from "../modules/lib/utils.ts"
import { PrimitiveForwardRefComponent} from "../modules/lib/type-utils.ts"


const Pagination = ({
  class:className,
  ...props
}: React.ComponentProps<PrimitiveForwardRefComponent<"nav">>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    class={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"


const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<PrimitiveForwardRefComponent<"ul">>
>(({ class:className, ...props }, ref) => (
  <ul
    ref={ref}
    class={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"


const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<PrimitiveForwardRefComponent<"li">>
>(({ class:className, ...props }, ref) => (
  <li ref={ref} class={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"



type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  Omit<React.ComponentProps<PrimitiveForwardRefComponent<"a">>, "size">


const PaginationLink = ({
  class:className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    class={cn(
      classnamesOfButtonByVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"


const PaginationPrevious = ({
  class:className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    class={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <IconChevronLeft class="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"


const PaginationNext = ({
  class:className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    class={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <IconChevronRight class="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"


const PaginationEllipsis = ({
  class:className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    class={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <IconDots class="h-4 w-4" />
    <span class="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"


export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
