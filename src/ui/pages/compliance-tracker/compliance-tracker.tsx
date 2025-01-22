import { motion } from "framer-motion";
import { pageAnimation } from "../../animations/page-animation";
import ContentArea from "../../sections/content-area/content-area";
import Toolbar from "../../sections/toolbar/toolbar";
import ComplianceStatusDataProvider from "../../../contexts/compliance-status/compliance-status-data-provider";
import { ComplianceTrackerUIContextProvider } from "../../../contexts/compliance-tracker-ui/compliance-tracker-ui-context-provider";
import ComplianceTrackerLayout from "../../layouts/compliance-tracker-layout";
import ComplianceToggleSegment from "./sub-components/compliance-toggle-segment";
const ComplianceTracker = () => {
  const ToolsArray = [ComplianceToggleSegment];
  return (
    <motion.div
      {...pageAnimation}
      className="bg-zinc-200 rounded h-auto md:min-h-screen md:h-screen p-4 space-y-2 overflow-x-clip">
      <Toolbar title="Compliance" toolsArray={ToolsArray} />
      <ContentArea>
        <ComplianceTrackerLayout />
      </ContentArea>
    </motion.div>
  );
};

const ComplianceTrackerWithDataAndUIContext = () => (
  <ComplianceStatusDataProvider>
    <ComplianceTrackerUIContextProvider>
      <ComplianceTracker />
    </ComplianceTrackerUIContextProvider>
  </ComplianceStatusDataProvider>
);

export default ComplianceTrackerWithDataAndUIContext;

/*   const { data, isLoading, hasErrors } = useComplianceStatusContext();
 */
/*     <div>
      <h1>Compliance</h1>
      <p>Data:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <UIContextChecker2 />
    </div>; */
