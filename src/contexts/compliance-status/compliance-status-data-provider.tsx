import { useEffect, useState } from "react";
import { ComplianceStatusContextProvider } from "./compliance-status-context-provider";
import { ComplianceStatus, ComplianceStatusContextType } from "./compliance-status-context";
import { fetchComplianceStatus } from "../../services/api/api-services";

type ParentComponentMinimalProps = {
  children: React.ReactNode;
};

const ComplianceStatusDataProvider = ({ children }: ParentComponentMinimalProps) => {
  const [complianceStatus, setComplianceStatus] = useState<ComplianceStatus>({
    data: [],
    isLoading: false,
    hasErrors: false,
  });

  useEffect(() => {
    const getComplianceStatus = async () => {
      setComplianceStatus((prev) => ({ ...prev, isLoading: true, hasErrors: false }));
      try {
        const fetchedData = await fetchComplianceStatus();
        setComplianceStatus({ data: fetchedData, isLoading: false, hasErrors: false });
      } catch (error: unknown) {
        setComplianceStatus({ data: [], isLoading: false, hasErrors: true });
        if (error instanceof Error) {
          console.error(`Error fetching data: ${error.message}`);
          throw new Error(`Error fetching data: ${error.message}`);
        } else {
          console.error("An unknown error occurred");
          throw new Error("An unknown error occurred");
        }
      }
    };

    getComplianceStatus();
  }, []);

  return (
    <ComplianceStatusContextProvider
      value={{ complianceStatus, setComplianceStatus } as ComplianceStatusContextType}>
      {children}
    </ComplianceStatusContextProvider>
  );
};

export default ComplianceStatusDataProvider;
