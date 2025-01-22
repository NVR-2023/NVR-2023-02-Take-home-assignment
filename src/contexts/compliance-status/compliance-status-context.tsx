import { createContext } from "react";

type ComplianceItem = {
  category: string;
  key: string;
  value: boolean;
};

type ComplianceStatus = {
  data: ComplianceItem[];
  isLoading: boolean;
  hasErrors: boolean;
};

type ComplianceStatusContextType = {
  complianceStatus: ComplianceStatus;
  setComplianceStatus: React.Dispatch<React.SetStateAction<ComplianceStatus>>;
};

export const ComplianceStatusContext = createContext<ComplianceStatusContextType>({
  complianceStatus: {
    data: [],
    isLoading: true,
    hasErrors: false,
  },
  setComplianceStatus: () => {},
});

export type { ComplianceItem, ComplianceStatus, ComplianceStatusContextType };
