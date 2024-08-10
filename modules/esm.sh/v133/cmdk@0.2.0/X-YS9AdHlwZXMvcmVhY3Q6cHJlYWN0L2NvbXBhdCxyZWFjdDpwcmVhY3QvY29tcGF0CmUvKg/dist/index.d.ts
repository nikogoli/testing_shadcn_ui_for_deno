import * as RadixDialog from '../../../../../esm.sh/v132/_@radix-ui/react-dialog@1.0.5.js';
// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from "../../../../../esm.sh/preact@10.19.6/compat.js";

declare type Children = {
    children?: React.ReactNode;
};
declare type DivProps = React.HTMLAttributes<HTMLDivElement>;
declare type State = {
    search: string;
    value: string;
    filtered: {
        count: number;
        items: Map<string, number>;
        groups: Set<string>;
    };
};
declare const Command: React.ForwardRefExoticComponent<Children & DivProps & {
    /**
     * Accessible label for this command menu. Not shown visibly.
     */
    label?: string;
    /**
     * Optionally set to `false` to turn off the automatic filtering and sorting.
     * If `false`, you must conditionally render valid items based on the search query yourself.
     */
    shouldFilter?: boolean;
    /**
     * Custom filter function for whether each command menu item should matches the given search query.
     * It should return a number between 0 and 1, with 1 being the best match and 0 being hidden entirely.
     * By default, uses the `command-score` library.
     */
    filter?: (value: string, search: string) => number;
    /**
     * Optional controlled state of the selected command menu item.
     */
    value?: string;
    /**
     * Event handler called when the selected item of the menu changes.
     */
    onValueChange?: (value: string) => void;
    /**
     * Optionally set to `true` to turn on looping around when using the arrow keys.
     */
    loop?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
/**
 * Command menu item. Becomes active on pointer enter or through keyboard navigation.
 * Preferably pass a `value`, otherwise the value will be inferred from `children` or
 * the rendered item's `textContent`.
 */
declare const Item: React.ForwardRefExoticComponent<Children & Omit<DivProps, "disabled" | "onSelect" | "value"> & {
    /** Whether this item is currently disabled. */
    disabled?: boolean;
    /** Event handler for when this item is selected, either via click or keyboard selection. */
    onSelect?: (value: string) => void;
    /**
     * A unique value for this item.
     * If no value is provided, it will be inferred from `children` or the rendered `textContent`. If your `textContent` changes between renders, you _must_ provide a stable, unique `value`.
     */
    value?: string;
} & React.RefAttributes<HTMLDivElement>>;
/**
 * Group command menu items together with a heading.
 * Grouped items are always shown together.
 */
declare const Group: React.ForwardRefExoticComponent<Children & Omit<DivProps, "value" | "heading"> & {
    /** Optional heading to render for this group. */
    heading?: React.ReactNode;
    /** If no heading is provided, you must provide a value that is unique for this group. */
    value?: string;
} & React.RefAttributes<HTMLDivElement>>;
/**
 * A visual and semantic separator between items or groups.
 * Visible when the search query is empty or `alwaysRender` is true, hidden otherwise.
 */
declare const Separator: React.ForwardRefExoticComponent<DivProps & {
    /** Whether this separator should always be rendered. Useful if you disable automatic filtering. */
    alwaysRender?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
/**
 * Command menu input.
 * All props are forwarded to the underyling `input` element.
 */
declare const Input: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLInputElement>, "value" | "onChange" | "type"> & {
    /**
     * Optional controlled state for the value of the search input.
     */
    value?: string;
    /**
     * Event handler called when the search value changes.
     */
    onValueChange?: (search: string) => void;
} & React.RefAttributes<HTMLInputElement>>;
/**
 * Contains `Item`, `Group`, and `Separator`.
 * Use the `--cmdk-list-height` CSS variable to animate height based on the number of results.
 */
declare const List: React.ForwardRefExoticComponent<Children & DivProps & React.RefAttributes<HTMLDivElement>>;
/**
 * Renders the command menu in a Radix Dialog.
 */
declare const Dialog: React.ForwardRefExoticComponent<RadixDialog.DialogProps & Children & DivProps & {
    /**
     * Accessible label for this command menu. Not shown visibly.
     */
    label?: string;
    /**
     * Optionally set to `false` to turn off the automatic filtering and sorting.
     * If `false`, you must conditionally render valid items based on the search query yourself.
     */
    shouldFilter?: boolean;
    /**
     * Custom filter function for whether each command menu item should matches the given search query.
     * It should return a number between 0 and 1, with 1 being the best match and 0 being hidden entirely.
     * By default, uses the `command-score` library.
     */
    filter?: (value: string, search: string) => number;
    /**
     * Optional controlled state of the selected command menu item.
     */
    value?: string;
    /**
     * Event handler called when the selected item of the menu changes.
     */
    onValueChange?: (value: string) => void;
    /**
     * Optionally set to `true` to turn on looping around when using the arrow keys.
     */
    loop?: boolean;
} & {
    /** Provide a custom element the Dialog should portal into. */
    container?: HTMLElement;
} & React.RefAttributes<HTMLDivElement>>;
/**
 * Automatically renders when there are no results for the search query.
 */
declare const Empty: React.ForwardRefExoticComponent<Children & DivProps & React.RefAttributes<HTMLDivElement>>;
/**
 * You should conditionally render this with `progress` while loading asynchronous items.
 */
declare const Loading: React.ForwardRefExoticComponent<Children & {
    /** Estimated progress of loading asynchronous options. */
    progress?: number;
} & React.RefAttributes<HTMLDivElement>>;
declare const pkg: React.ForwardRefExoticComponent<Children & DivProps & {
    /**
     * Accessible label for this command menu. Not shown visibly.
     */
    label?: string;
    /**
     * Optionally set to `false` to turn off the automatic filtering and sorting.
     * If `false`, you must conditionally render valid items based on the search query yourself.
     */
    shouldFilter?: boolean;
    /**
     * Custom filter function for whether each command menu item should matches the given search query.
     * It should return a number between 0 and 1, with 1 being the best match and 0 being hidden entirely.
     * By default, uses the `command-score` library.
     */
    filter?: (value: string, search: string) => number;
    /**
     * Optional controlled state of the selected command menu item.
     */
    value?: string;
    /**
     * Event handler called when the selected item of the menu changes.
     */
    onValueChange?: (value: string) => void;
    /**
     * Optionally set to `true` to turn on looping around when using the arrow keys.
     */
    loop?: boolean;
} & React.RefAttributes<HTMLDivElement>> & {
    List: React.ForwardRefExoticComponent<Children & DivProps & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<Children & Omit<DivProps, "disabled" | "onSelect" | "value"> & {
        /** Whether this item is currently disabled. */
        disabled?: boolean;
        /** Event handler for when this item is selected, either via click or keyboard selection. */
        onSelect?: (value: string) => void;
        /**
         * A unique value for this item.
         * If no value is provided, it will be inferred from `children` or the rendered `textContent`. If your `textContent` changes between renders, you _must_ provide a stable, unique `value`.
         */
        value?: string;
    } & React.RefAttributes<HTMLDivElement>>;
    Input: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLInputElement>, "value" | "onChange" | "type"> & {
        /**
         * Optional controlled state for the value of the search input.
         */
        value?: string;
        /**
         * Event handler called when the search value changes.
         */
        onValueChange?: (search: string) => void;
    } & React.RefAttributes<HTMLInputElement>>;
    Group: React.ForwardRefExoticComponent<Children & Omit<DivProps, "value" | "heading"> & {
        /** Optional heading to render for this group. */
        heading?: React.ReactNode;
        /** If no heading is provided, you must provide a value that is unique for this group. */
        value?: string;
    } & React.RefAttributes<HTMLDivElement>>;
    Separator: React.ForwardRefExoticComponent<DivProps & {
        /** Whether this separator should always be rendered. Useful if you disable automatic filtering. */
        alwaysRender?: boolean;
    } & React.RefAttributes<HTMLDivElement>>;
    Dialog: React.ForwardRefExoticComponent<RadixDialog.DialogProps & Children & DivProps & {
        /**
         * Accessible label for this command menu. Not shown visibly.
         */
        label?: string;
        /**
         * Optionally set to `false` to turn off the automatic filtering and sorting.
         * If `false`, you must conditionally render valid items based on the search query yourself.
         */
        shouldFilter?: boolean;
        /**
         * Custom filter function for whether each command menu item should matches the given search query.
         * It should return a number between 0 and 1, with 1 being the best match and 0 being hidden entirely.
         * By default, uses the `command-score` library.
         */
        filter?: (value: string, search: string) => number;
        /**
         * Optional controlled state of the selected command menu item.
         */
        value?: string;
        /**
         * Event handler called when the selected item of the menu changes.
         */
        onValueChange?: (value: string) => void;
        /**
         * Optionally set to `true` to turn on looping around when using the arrow keys.
         */
        loop?: boolean;
    } & {
        /** Provide a custom element the Dialog should portal into. */
        container?: HTMLElement;
    } & React.RefAttributes<HTMLDivElement>>;
    Empty: React.ForwardRefExoticComponent<Children & DivProps & React.RefAttributes<HTMLDivElement>>;
    Loading: React.ForwardRefExoticComponent<Children & {
        /** Estimated progress of loading asynchronous options. */
        progress?: number;
    } & React.RefAttributes<HTMLDivElement>>;
};

/** Run a selector against the store state. */
declare function useCmdk<T = any>(selector: (state: State) => T): T;

export { pkg as Command, Dialog as CommandDialog, Empty as CommandEmpty, Group as CommandGroup, Input as CommandInput, Item as CommandItem, List as CommandList, Loading as CommandLoading, Command as CommandRoot, Separator as CommandSeparator, useCmdk as useCommandState };
