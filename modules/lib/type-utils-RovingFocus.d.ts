import { PrimitiveDivProps, PrimitiveSpanProps } from "./type-utils-Primitive.d.ts"


/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
export const Root: React.ForwardRefExoticComponent<RovingFocusGroupProps & React.RefAttributes<HTMLDivElement>>;

interface RovingFocusGroupProps extends RovingFocusGroupImplProps {
}

interface RovingFocusGroupImplProps extends Omit<PrimitiveDivProps, 'dir'|'loop'>, RovingFocusGroupOptions {
    currentTabStopId?: string | null;
    defaultCurrentTabStopId?: string;
    onCurrentTabStopIdChange?: (tabStopId: string | null) => void;
    onEntryFocus?: (event: Event) => void;
}

interface RovingFocusGroupOptions {
    /**
     * The orientation of the group.
     * Mainly so arrow navigation is done accordingly (left & right vs. up & down)
     */
    orientation?: React.HTMLAttributes<HTMLElement>['aria-orientation'];
    /**
     * The direction of navigation between items.
     */
    dir?: 'ltr' | 'rtl';
    /**
     * Whether keyboard navigation should loop around
     * @defaultValue false
     */
    loop?: boolean;
}


/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
export const Item: React.ForwardRefExoticComponent<RovingFocusItemProps & React.RefAttributes<HTMLSpanElement>>;

interface RovingFocusItemProps extends PrimitiveSpanProps {
    tabStopId?: string;
    focusable?: boolean;
    active?: boolean;
}