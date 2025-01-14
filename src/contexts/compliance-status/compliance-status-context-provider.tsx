import { ComplianceStatusContext } from "./compliance-status-context";
import { FetchedDataContextProviderProps } from "../../types/global-types";

export const ComplianceStatusContextProvider = ({
  value,
  children,
}: FetchedDataContextProviderProps) => {
  return (
    <ComplianceStatusContext.Provider value={value}>{children}</ComplianceStatusContext.Provider>
  );
};
