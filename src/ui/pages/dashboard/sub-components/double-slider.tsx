import { useState, useEffect, ReactNode } from "react";
import { useCombinedTimelinesContext } from "../../../../custom-hooks/use-combined-timelines-context";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import { Slider, SliderTrack, SliderRange, SliderThumb } from "@radix-ui/react-slider";
import { DoubleSliderParametersType, CombinedDataTypeArray } from "../../../../types/global-types";

const DoubleSlider = () => {
  const [doubleSliderParameters, setDoubleSliderParameters] = useState<DoubleSliderParametersType>({
    min: 0,
    max: 100,
    step: 1,
    defaultValue: [0, 100],
  });

  const { data, isLoading, hasErrors } = useCombinedTimelinesContext() as {
    data: CombinedDataTypeArray;
    isLoading: boolean;
    hasErrors: boolean;
  };

  const { DashboardUIContext, setDashboardUIContext } = useDashboardUIContext();
  const { startDate, endDate } = DashboardUIContext;

  const deriveIndicesFromDates = () => {
    if (!Array.isArray(data) || data.length === 0) return [0, 0];
    const startIndex = data.findIndex((item) => item.date === startDate);
    const endIndex = data.findIndex((item) => item.date === endDate);
    return [startIndex >= 0 ? startIndex : 0, endIndex >= 0 ? endIndex : data.length - 1];
  };

  const updateStartDate = (newDate: string) => {
    setDashboardUIContext((previousContext) => ({ ...previousContext, startDate: newDate }));
  };

  const updateEndDate = (newDate: string) => {
    setDashboardUIContext((previousContext) => ({ ...previousContext, endDate: newDate }));
  };

  useEffect(() => {
    if (isLoading || hasErrors || !Array.isArray(data)) return;
    const derivedNumberOfSteps = data.length - 1;
    setDoubleSliderParameters({
      min: 0,
      max: derivedNumberOfSteps,
      step: 1,
      defaultValue: [0, derivedNumberOfSteps],
    });
  }, [data, isLoading, hasErrors]);

  const [doubleSliderValues, setDoubleSliderValues] = useState<number[]>(deriveIndicesFromDates());

  useEffect(() => {
    setDoubleSliderValues(deriveIndicesFromDates());
  }, [startDate, endDate, data]);

  const handleOnValueChange = (newValue: number[]) => {
    setDoubleSliderValues(newValue);

    if (!Array.isArray(data) || data.length === 0) return;

    const newStartDate = data[newValue[0]]?.date || "";
    const newEndDate = data[newValue[1]]?.date || "";

    updateStartDate(newStartDate);
    updateEndDate(newEndDate);
  };

  const Wrapper = ({ children }: { children: ReactNode }) => {
    return <div>{children}</div>;
  };

  if (isLoading || hasErrors) {
    return <Wrapper>{isLoading ? "Loading" : "Error"}</Wrapper>;
  }

  return (
    <div>
      <Slider
        className="relative flex items-center select-none bg-[#b9b9c0] rounded-[2px] touch-none w-27 h-4.5"
        value={doubleSliderValues}
        onValueChange={handleOnValueChange}
        min={doubleSliderParameters.min}
        max={doubleSliderParameters.max}
        step={doubleSliderParameters.step}>
        <SliderTrack className="bg-gray-200 relative grow rounded-full h-[2px]">
          <SliderRange className="absolute bg-zinc-500 rounded-full h-full" />
        </SliderTrack>
        <SliderThumb
          className="block w-1 h-1 bg-white border-2 border-zinc-500 shadow rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Start"
        />
        <SliderThumb
          className="block w-1 h-1 bg-white border-2 border-zinc-500 shadow rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="End"
        />
      </Slider>
    </div>
  );
};

export default DoubleSlider;
