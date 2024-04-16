import { FunctionComponent, PropsWithChildren, memo } from "react";

export function withContextFnHOC<CpProps, CpValue>(
  Component: FunctionComponent<CpProps>,
  ContextFn: () => CpValue,
  adapter?: (value: CpValue) => any
) {
  return function ContextFnComponent({
    children,
    ...props
  }: PropsWithChildren<any>) {
    const MemoComponent = memo(Component);
    const context = ContextFn();
    const adaptContext = adapter ? adapter(context) : context;

    return <MemoComponent {...props} {...adaptContext} children={children} />;
  };
}