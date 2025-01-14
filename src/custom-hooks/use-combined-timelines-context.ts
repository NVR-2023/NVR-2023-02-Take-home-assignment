import { useContext } from "react";
import { CombinedTimelinesContext } from "../contexts/combined-timelines/combined-timelines-contetx";

export const useCombinedTimelinesContext = () => {
  const context = useContext(CombinedTimelinesContext);
  if (!context) {
    throw new Error(
      "CombinedTimelinesContext must be used within CombinedTimelinesContextProvider"
    );
  }
  return context;
};
