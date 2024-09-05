// @deno-types="https://esm.sh/v128/preact@10.19.6/compat/src/index.d.ts"
import * as React from '../../../../../../esm.sh/preact@10.19.6/compat.js'
import { createContextScope } from '../../../../../../esm.sh/v132/_@radix-ui/react-context@1.0.1.js';
import { Primitive } from '../../../../../../esm.sh/v132/_@radix-ui/react-primitive@1.0.3.js';
import * as RovingFocusGroup from '../../../../../../esm.sh/v132/_@radix-ui/react-roving-focus@1.0.4.js';
import { createRovingFocusGroupScope } from '../../../../../../esm.sh/v132/_@radix-ui/react-roving-focus@1.0.4.js';
import { Toggle } from '../../../../../../esm.sh/v132/_@radix-ui/react-toggle@1.0.3.js';
import { useControllableState } from '../../../../../../esm.sh/v132/_@radix-ui/react-use-controllable-state@1.0.1.js';
import { useDirection } from '../../../../../../esm.sh/v132/_@radix-ui/react-direction@1.0.1.js';

import type { Scope } from '../../../../../../esm.sh/v132/_@radix-ui/react-context@1.0.1.js';

/* -------------------------------------------------------------------------------------------------
 * ToggleGroup
 * -----------------------------------------------------------------------------------------------*/

const TOGGLE_GROUP_NAME = 'ToggleGroup';

type ScopedProps<P> = P & { __scopeToggleGroup?: Scope };
const [createToggleGroupContext, createToggleGroupScope] = createContextScope(TOGGLE_GROUP_NAME, [
  createRovingFocusGroupScope,
]);
const useRovingFocusGroupScope = createRovingFocusGroupScope();

type ToggleGroupElement = ToggleGroupImplSingleElement | ToggleGroupImplMultipleElement;
interface ToggleGroupSingleProps extends ToggleGroupImplSingleProps {
  type: 'single';
}
interface ToggleGroupMultipleProps extends ToggleGroupImplMultipleProps {
  type: 'multiple';
}

const ToggleGroup = React.forwardRef<
  ToggleGroupElement,
  ToggleGroupSingleProps | ToggleGroupMultipleProps
>((props, forwardedRef) => {
  const { type, ...toggleGroupProps } = props;

  if (type === 'single') {
    const singleProps = toggleGroupProps as ToggleGroupImplSingleProps;
    return <ToggleGroupImplSingle {...singleProps} ref={forwardedRef} />;
  }

  if (type === 'multiple') {
    const multipleProps = toggleGroupProps as ToggleGroupImplMultipleProps;
    return <ToggleGroupImplMultiple {...multipleProps} ref={forwardedRef} />;
  }

  throw new Error(`Missing prop \`type\` expected on \`${TOGGLE_GROUP_NAME}\``);
});

ToggleGroup.displayName = TOGGLE_GROUP_NAME;

/* -----------------------------------------------------------------------------------------------*/

type ToggleGroupValueContextValue = {
  type: 'single' | 'multiple';
  value: string[];
  onItemActivate(value: string): void;
  onItemDeactivate(value: string): void;
};

const [ToggleGroupValueProvider, useToggleGroupValueContext] =
  createToggleGroupContext<ToggleGroupValueContextValue>(TOGGLE_GROUP_NAME);

type ToggleGroupImplSingleElement = ToggleGroupImplElement;
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

const ToggleGroupImplSingle = React.forwardRef<
  ToggleGroupImplSingleElement,
  ToggleGroupImplSingleProps
>((props: ScopedProps<ToggleGroupImplSingleProps>, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {},
    ...toggleGroupSingleProps
  } = props;

  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });

  return (
    <ToggleGroupValueProvider
      scope={props.__scopeToggleGroup}
      type="single"
      value={value ? [value] : []}
      onItemActivate={setValue}
      onItemDeactivate={React.useCallback(() => setValue(''), [setValue])}
    >
      <ToggleGroupImpl {...toggleGroupSingleProps} ref={forwardedRef} />
    </ToggleGroupValueProvider>
  );
});

type ToggleGroupImplMultipleElement = ToggleGroupImplElement;
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

const ToggleGroupImplMultiple = React.forwardRef<
  ToggleGroupImplMultipleElement,
  ToggleGroupImplMultipleProps
>((props: ScopedProps<ToggleGroupImplMultipleProps>, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {},
    ...toggleGroupMultipleProps
  } = props;

  const [value = [], setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });

  const handleButtonActivate = React.useCallback(
    (itemValue: string) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  );

  const handleButtonDeactivate = React.useCallback(
    (itemValue: string) =>
      setValue((prevValue = []) => prevValue.filter((value) => value !== itemValue)),
    [setValue]
  );

  return (
    <ToggleGroupValueProvider
      scope={props.__scopeToggleGroup}
      type="multiple"
      value={value}
      onItemActivate={handleButtonActivate}
      onItemDeactivate={handleButtonDeactivate}
    >
      <ToggleGroupImpl {...toggleGroupMultipleProps} ref={forwardedRef} />
    </ToggleGroupValueProvider>
  );
});

ToggleGroup.displayName = TOGGLE_GROUP_NAME;

/* -----------------------------------------------------------------------------------------------*/

type ToggleGroupContextValue = { rovingFocus: boolean; disabled: boolean };

const [ToggleGroupContext, useToggleGroupContext] =
  createToggleGroupContext<ToggleGroupContextValue>(TOGGLE_GROUP_NAME);

type RovingFocusGroupProps = React.ComponentPropsWithoutRef<typeof RovingFocusGroup.Root>;
type ToggleGroupImplElement = React.ElementRef<typeof Primitive.div>;
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

const ToggleGroupImpl = React.forwardRef<ToggleGroupImplElement, ToggleGroupImplProps>(
  (props: ScopedProps<ToggleGroupImplProps>, forwardedRef) => {
    const {
      __scopeToggleGroup,
      disabled = false,
      rovingFocus = true,
      orientation,
      dir,
      loop = true,
      ...toggleGroupProps
    } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeToggleGroup);
    const direction = useDirection(dir);
    const commonProps = { role: 'group', dir: direction, ...toggleGroupProps };
    return (
      <ToggleGroupContext scope={__scopeToggleGroup} rovingFocus={rovingFocus} disabled={disabled}>
        {rovingFocus ? (
          <RovingFocusGroup.Root
            asChild
            {...rovingFocusGroupScope}
            orientation={orientation}
            dir={direction}
            loop={loop}
          >
            <Primitive.div {...commonProps} ref={forwardedRef} />
          </RovingFocusGroup.Root>
        ) : (
          <Primitive.div {...commonProps} ref={forwardedRef} />
        )}
      </ToggleGroupContext>
    );
  }
);

/* -------------------------------------------------------------------------------------------------
 * ToggleGroupItem
 * -----------------------------------------------------------------------------------------------*/

const ITEM_NAME = 'ToggleGroupItem';

type ToggleGroupItemElement = ToggleGroupItemImplElement;
interface ToggleGroupItemProps extends Omit<ToggleGroupItemImplProps, 'pressed'> {}

const ToggleGroupItem = React.forwardRef<ToggleGroupItemElement, ToggleGroupItemProps>(
  (props: ScopedProps<ToggleGroupItemProps>, forwardedRef) => {
    const valueContext = useToggleGroupValueContext(ITEM_NAME, props.__scopeToggleGroup);
    const context = useToggleGroupContext(ITEM_NAME, props.__scopeToggleGroup);
    const rovingFocusGroupScope = useRovingFocusGroupScope(props.__scopeToggleGroup);
    const pressed = valueContext.value.includes(props.value);
    const disabled = context.disabled || props.disabled;
    const commonProps = { ...props, pressed, disabled };
    const ref = React.useRef<HTMLDivElement>(null);
    return context.rovingFocus ? (
      <RovingFocusGroup.Item
        asChild
        {...rovingFocusGroupScope}
        focusable={!disabled}
        active={pressed}
        ref={ref}
      >
        <ToggleGroupItemImpl {...commonProps} ref={forwardedRef} />
      </RovingFocusGroup.Item>
    ) : (
      <ToggleGroupItemImpl {...commonProps} ref={forwardedRef} />
    );
  }
);

ToggleGroupItem.displayName = ITEM_NAME;

/* -----------------------------------------------------------------------------------------------*/

type ToggleGroupItemImplElement = React.ElementRef<typeof Toggle>;
type ToggleProps = React.ComponentPropsWithoutRef<typeof Toggle>;
interface ToggleGroupItemImplProps extends Omit<ToggleProps, 'defaultPressed' | 'onPressedChange'> {
  /**
   * A string value for the toggle group item. All items within a toggle group should use a unique value.
   */
  value: string;
}

const ToggleGroupItemImpl = React.forwardRef<ToggleGroupItemImplElement, ToggleGroupItemImplProps>(
  (props: ScopedProps<ToggleGroupItemImplProps>, forwardedRef) => {
    const { __scopeToggleGroup, value, ...itemProps } = props;
    const valueContext = useToggleGroupValueContext(ITEM_NAME, __scopeToggleGroup);
    const singleProps = { role: 'radio', 'aria-checked': props.pressed, 'aria-pressed': undefined };
    const typeProps = valueContext.type === 'single' ? singleProps : undefined;
    return (
      <Toggle
        {...typeProps}
        {...itemProps}
        ref={forwardedRef}
        onPressedChange={(pressed) => {
          if (pressed) {
            valueContext.onItemActivate(value);
          } else {
            valueContext.onItemDeactivate(value);
          }
        }}
      />
    );
  }
);

/* -----------------------------------------------------------------------------------------------*/

const Root = ToggleGroup;
const Item = ToggleGroupItem;

export {
  createToggleGroupScope,
  //
  ToggleGroup,
  ToggleGroupItem,
  //
  Root,
  Item,
};
export type { ToggleGroupSingleProps, ToggleGroupMultipleProps, ToggleGroupItemProps };
