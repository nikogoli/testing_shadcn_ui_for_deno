// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as AltCheckboxPrimitive from "../modules/lib/components/checkbox.d.ts"

import { cn } from '../modules/lib/utils.ts'
import { ElementRef, ComponentPropsWithoutRef } from "../modules/lib/type-utils.ts"

const Checkbox = React.forwardRef<
  ElementRef<typeof AltCheckboxPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AltCheckboxPrimitive.Root>
>(({ class:className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-input ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary',
      // original is 'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      // but somehow text color does not change.
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-primary')}>
      <span className='i-lucide:check flex h-4 w-4' />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
