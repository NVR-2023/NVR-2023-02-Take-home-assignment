import { useState, useEffect } from "react";
import { fetchCombinedTimeseries } from "../../services/api/api-services";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getCombinedTimeseries = async () => {
      try {
        const data = await fetchCombinedTimeseries();
        setData(data);
      } catch (error) {
        console.error("Error fetching timeseries data:", error);
      }
    };
    getCombinedTimeseries();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading data...</p>}</div>
    </div>
  );
};

export default Dashboard;
