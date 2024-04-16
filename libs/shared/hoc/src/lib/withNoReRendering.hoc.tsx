import { memo, ComponentType } from "react";

export const withNoReRendering = <P extends Record<string, unknown>>(
  WrappedComponent: ComponentType<P>
): ComponentType<P> =>
  memo(
    (props) => <WrappedComponent {...(props as P)} />,
    (prevProps: P, nextProps: P) => true
  );

