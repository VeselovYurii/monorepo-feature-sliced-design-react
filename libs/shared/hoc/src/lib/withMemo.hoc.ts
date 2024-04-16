import { ComponentType, memo } from "react";

export const withMemo = (
  Component: ComponentType<Record<string, any>>,
  fn?: (prev: any, next: any) => boolean
) => memo(Component, fn);
