// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'

import { cn } from '../modules/lib/utils.ts'


interface InputProps extends React.HTMLAttributes<HTMLInputElement> {}


const Input = React.forwardRef<HTMLInputElement, InputProps>(({ class:className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2
         text-sm ring-offset-background
         file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
         disabled:cursor-not-allowed disabled:opacity-50`,
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'


export { Input }