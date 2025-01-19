import useFilteredDashboardData from "../../../custom-hooks/use-filtered-data";

const Filtered = () => {
  const filteredDashboardData = useFilteredDashboardData();

  return (
    <div>
      <pre>{JSON.stringify(filteredDashboardData, null, 2)}</pre>
    </div>
  );
};

export default Filtered;
