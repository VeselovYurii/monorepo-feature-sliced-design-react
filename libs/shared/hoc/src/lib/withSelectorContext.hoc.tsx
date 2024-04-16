import { ComponentType } from "react";
import { withMemo } from "./withMemo.hox";

export const withSelectorContext = <
  TProps,
  TValue extends Record<string, unknown>
>(
  Component: ComponentType<Record<string, TValue>>,
  ctx: () => Record<string, TValue>,
  selectors: Record<string, (data: Record<string, TValue>) => TValue>
): ComponentType<TProps & Record<string, TValue>> => {
  const ComponentMemo = withMemo(Component) as ComponentType<
    Record<string, TValue>
  >;
  return (props: TProps & Record<string, TValue>) => {
    const contextValue = ctx();
    const ctxProps = Object.keys(selectors).reduce((acc, key) => {
      acc[key] = selectors[key](contextValue);
      return acc;
    }, {} as Record<string, any>);
    return <ComponentMemo {...props} {...ctxProps} />;
  };
};
