import { motion } from "framer-motion";
import { useDashboardUIContext } from "../../custom-hooks/use-dashboard-ui-context";

import RevenueChartCard from "../pages/dashboard/sub-components/revenue-chart-card";
import InvoicesChartCard from "../pages/dashboard/sub-components/invoices-chart-card";
import UsersChartCard from "../pages/dashboard/sub-components/users-chart-card";
import OverviewCard from "../pages/dashboard/sub-components/overview-card";
import CombinedChartCard from "../pages/dashboard/sub-components/combined-chart-card";

const DashboardMobileLayout = () => {
  const { DashboardUIContext } = useDashboardUIContext();
  const {
    isDerivedCardVisible,
    isInvoicesGraphVisible,
    isRevenueGraphVisible,
    isUsersGraphVisible,
    areGraphsCombined,
  } = DashboardUIContext;

  return (
    <div className="flex flex-col w-full h-full gap-5">
      {!areGraphsCombined && (
        <>
          {isRevenueGraphVisible && (
            <motion.div
              className="overflow-hidden flex justify-center items-center w-full"
              style={{ height: "250px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeInOut" }}>
              <RevenueChartCard />
            </motion.div>
          )}
          {isInvoicesGraphVisible && (
            <motion.div
              className="overflow-hidden flex justify-center items-center w-full"
              style={{ height: "250px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeInOut" }}>
              <InvoicesChartCard />
            </motion.div>
          )}
          {isUsersGraphVisible && (
            <motion.div
              className="overflow-hidden flex justify-center items-center w-full"
              style={{ height: "250px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeInOut" }}>
              <UsersChartCard />
            </motion.div>
          )}
          {isDerivedCardVisible && (
            <motion.div
              className="overflow-hidden flex justify-center items-center w-full"
              style={{ height: "250px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeInOut" }}>
              <OverviewCard />
            </motion.div>
          )}
        </>
      )}
      {areGraphsCombined && (
        <motion.div
          className="overflow-hidden flex justify-center items-center w-full"
          style={{ height: "300px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: "easeInOut" }}>
          <CombinedChartCard />
        </motion.div>
      )}
    </div>
  );
};

export default DashboardMobileLayout;
