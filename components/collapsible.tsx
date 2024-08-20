import * as CollapsiblePrimitive from "../modules/esm.sh/v132/_@radix-ui/react-collapsible@1.0.3.js"
import * as AltCollapsiblePrimitive from "../modules/lib/type-utils-CollapsiblePrimitive.d.ts"

import { cn } from '../modules/lib/utils.ts'


const Collapsible:typeof AltCollapsiblePrimitive.Root = CollapsiblePrimitive.Root


const CollapsibleTrigger:typeof AltCollapsiblePrimitive.Trigger = CollapsiblePrimitive.CollapsibleTrigger


const  CollapsibleContent:typeof AltCollapsiblePrimitive.Content = ({ class:className, ...props }, ref) => {
  return(
    <CollapsiblePrimitive.CollapsibleContent
      ref={ref}
      className={cn('data-[state=closed]:hidden', className)}
      {...props}
    />
  )
}


export { Collapsible, CollapsibleTrigger, CollapsibleContent }