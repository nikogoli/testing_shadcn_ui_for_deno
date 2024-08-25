// @deno-types="../modules/lib/type-utils-CollapsiblePrimitive.d.ts"
import * as CollapsiblePrimitive from "../modules/esm.sh/v132/_@radix-ui/react-collapsible@1.0.3.js"
import * as CollapsibleTypes from "../modules/lib/type-utils-CollapsiblePrimitive.d.ts"

import { cn } from '../modules/lib/utils.ts'


const Collapsible = CollapsiblePrimitive.Root


const CollapsibleTrigger = CollapsiblePrimitive.Trigger


const  CollapsibleContent:typeof CollapsibleTypes.Content = ({ class:className, ...props }, ref) => {
  return(
    <CollapsiblePrimitive.Content
      ref={ref}
      className={cn('data-[state=closed]:hidden', className)}
      {...props}
    />
  )
}


export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
}