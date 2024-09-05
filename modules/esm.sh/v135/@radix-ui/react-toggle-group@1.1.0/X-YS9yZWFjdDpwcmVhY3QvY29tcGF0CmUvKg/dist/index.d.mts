// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../../../../esm.sh/preact@10.19.6/compat.js'
import { Primitive } from '../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js';
import * as RovingFocusGroup from '../../../../../../esm.sh/v132/_@radix-ui/react-roving-focus@1.0.4.js';
import { Toggle } from '../../../../../../esm.sh/v132/_@radix-ui/react-toggle@1.0.3.js';

type Scope<C = any> = {
    [scopeName: string]: React.Context<C>[];
} | undefined;
type ScopeHook = (scope: Scope) => {
    [__scopeProp: string]: Scope;
};
interface CreateScope {
    scopeName: string;
    (): ScopeHook;
}

declare const createToggleGroupScope: CreateScope;
interface ToggleGroupSingleProps extends ToggleGroupImplSingleProps {
    type: 'single';
}
interface ToggleGroupMultipleProps extends ToggleGroupImplMultipleProps {
    type: 'multiple';
}
declare const ToggleGroup: React.ForwardRefExoticComponent<(ToggleGroupSingleProps | ToggleGroupMultipleProps) & React.RefAttributes<HTMLDivElement>>;
interface ToggleGroupImplSingleProps extends ToggleGroupImplProps {
    /**
     * The controlled stateful value of the item that is pressed.
     */
    value?: string;
    /**
     * The value of the item that is pressed when initially rendered. Use
     * `defaultValue` if you do not need to control the state of a toggle group.
     */
    defaultValue?: string;
    /**
     * The callback that fires when the value of the toggle group changes.
     */
    onValueChange?(value: string): void;
}
interface ToggleGroupImplMultipleProps extends ToggleGroupImplProps {
    /**
     * The controlled stateful value of the items that are pressed.
     */
    value?: string[];
    /**
     * The value of the items that are pressed when initially rendered. Use
     * `defaultValue` if you do not need to control the state of a toggle group.
     */
    defaultValue?: string[];
    /**
     * The callback that fires when the state of the toggle group changes.
     */
    onValueChange?(value: string[]): void;
}
type RovingFocusGroupProps = React.ComponentPropsWithoutRef<typeof RovingFocusGroup.Root>;
type PrimitiveDivProps = React.ComponentPropsWithoutRef<typeof Primitive.div>;
interface ToggleGroupImplProps extends PrimitiveDivProps {
    /**
     * Whether the group is disabled from user interaction.
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * Whether the group should maintain roving focus of its buttons.
     * @defaultValue true
     */
    rovingFocus?: boolean;
    loop?: RovingFocusGroupProps['loop'];
    orientation?: RovingFocusGroupProps['orientation'];
    dir?: RovingFocusGroupProps['dir'];
}
interface ToggleGroupItemProps extends Omit<ToggleGroupItemImplProps, 'pressed'> {
}
declare const ToggleGroupItem: React.ForwardRefExoticComponent<ToggleGroupItemProps & React.RefAttributes<HTMLButtonElement>>;
type ToggleProps = React.ComponentPropsWithoutRef<typeof Toggle>;
interface ToggleGroupItemImplProps extends Omit<ToggleProps, 'defaultPressed' | 'onPressedChange'> {
    /**
     * A string value for the toggle group item. All items within a toggle group should use a unique value.
     */
    value: string;
}
declare const Root: React.ForwardRefExoticComponent<(ToggleGroupSingleProps | ToggleGroupMultipleProps) & React.RefAttributes<HTMLDivElement>>;
declare const Item: React.ForwardRefExoticComponent<ToggleGroupItemProps & React.RefAttributes<HTMLButtonElement>>;

export { Item, Root, ToggleGroup, ToggleGroupItem, type ToggleGroupItemProps, type ToggleGroupMultipleProps, type ToggleGroupSingleProps, createToggleGroupScope };
