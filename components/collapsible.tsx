// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../modules/esm.sh/preact@10.19.6/compat.js'
import * as CollapsiblePrimitive from "../modules/esm.sh/v132/_@radix-ui/react-collapsible@1.0.3.js"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

function CollapsibleContent(props:React.ComponentProps<"div">){
  const {class:classStr, ...others} = props
  return(
    <CollapsiblePrimitive.CollapsibleContent class={`data-[state=closed]:hidden ${classStr}`} {...others} />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
