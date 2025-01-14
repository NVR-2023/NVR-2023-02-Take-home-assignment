import { WithDataAndUIContextsProps } from "../../../types/global-types";

const withDataAndUIContexts = ({
  BaseComponent,
  DataContext,
  UIContext,
}: WithDataAndUIContextsProps) => {
  let wrappedComponent = <BaseComponent />; // Render BaseComponent as a component
  if (DataContext) {
    wrappedComponent = <DataContext>{wrappedComponent}</DataContext>;
  }
  if (UIContext) {
    wrappedComponent = <UIContext>{wrappedComponent}</UIContext>;
  }
  return <>{wrappedComponent}</>;
};

export default withDataAndUIContexts;
