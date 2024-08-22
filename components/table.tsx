// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'

import { cn } from "../modules/lib/utils.ts"

interface ThHTMLAttributes<T extends HTMLElement> extends React.HTMLAttributes<T> {
  align?: "left" | "center" | "right" | "justify" | "char" | undefined;
  colSpan?: number | undefined;
  headers?: string | undefined;
  rowSpan?: number | undefined;
  scope?: string | undefined;
  abbr?: string | undefined;
}

interface TdHTMLAttributes<T extends HTMLElement> extends React.HTMLAttributes<T> {
  align?: "left" | "center" | "right" | "justify" | "char" | undefined;
  colSpan?: number | undefined;
  headers?: string | undefined;
  rowSpan?: number | undefined;
  scope?: string | undefined;
  abbr?: string | undefined;
  height?: number | string | undefined;
  width?: number | string | undefined;
  valign?: "top" | "middle" | "bottom" | "baseline" | undefined;
}


const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ class:className, ...props }, ref) => (
  <div class="relative w-full overflow-auto">
    <table
      ref={ref}
      class={cn("w-full caption-bottom text-sm", className)}
      style={{captionSide:"bottom"}}
      {...props}
    />
  </div>
))
Table.displayName = "Table"


const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ class:className, ...props }, ref) => (
  <thead ref={ref} class={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"


const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ class:className, ...props }, ref) => (
  <tbody
    ref={ref}
    class={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"


const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ class:className, ...props }, ref) => (
  <tfoot
    ref={ref}
    class={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"


const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ class:className, ...props }, ref) => (
  <tr
    ref={ref}
    class={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"


const TableHead = React.forwardRef<
  HTMLTableCellElement,
  ThHTMLAttributes<HTMLTableCellElement>
>(({ class:className, ...props }, ref) => (
  <th
    ref={ref}
    class={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"


const TableCell = React.forwardRef<
  HTMLTableCellElement,
  TdHTMLAttributes<HTMLTableCellElement>
>(({ class:className, ...props }, ref) => (
  <td
    ref={ref}
    class={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"


const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ class:className, ...props }, ref) => (
  <caption
    ref={ref}
    class={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"


export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}