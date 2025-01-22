import { ComplianceStatusContext, ComplianceStatusContextType } from "./compliance-status-context";

type ComplianceStatusProviderProps = {
  value: ComplianceStatusContextType;
  children: React.ReactNode;
};

export const ComplianceStatusContextProvider = ({
  value,
  children,
}: ComplianceStatusProviderProps) => {
  return (
    <ComplianceStatusContext.Provider value={value}>{children}</ComplianceStatusContext.Provider>
  );
};
