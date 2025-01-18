import { useState, useEffect, ReactNode } from "react";
import { useCombinedTimelinesContext } from "../../../../custom-hooks/use-combined-timelines-context";
import { useDashboardUIContext } from "../../../../custom-hooks/use-dashboard-ui-context";
import { Slider, SliderTrack, SliderRange, SliderThumb } from "@radix-ui/react-slider";
import { DoubleSliderParametersType, CombinedDataTypeArray } from "../../../../types/global-types";
import LoadingIndicator from "../../../components/animated/loading-indicator";

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
    return <div className="flex px-1 rounded-[2px] bg-zinc-200 w-36 h-4">{children}</div>;
  };

  if (isLoading) {
    return (
      <Wrapper>
        <LoadingIndicator />
      </Wrapper>
    );
  }

  return (
    <div className="flex px-1 rounded-[2px] bg-zinc-200 ">
      <Slider
        className="relative flex items-center select-none bg-zinc-200 touch-none w-27 md:w-36 h-4.5"
        value={doubleSliderValues}
        onValueChange={handleOnValueChange}
        min={doubleSliderParameters.min}
        max={doubleSliderParameters.max}
        step={doubleSliderParameters.step}>
        <SliderTrack className="bg-zinc-50 relative grow h-[3px] md:h-[1px]">
          <SliderRange className="absolute bg-zinc-500 rounded-full h-full" />
        </SliderTrack>

        <SliderThumb
          className="block w-2 h-2 md:w-1 md:h-1 bg-zinc-500 border-2 border-zinc-500  rounded-full focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-opacity-50"
          aria-label="Start"
        />
        <SliderThumb
          className="block w-2 h-2 md:w-1 md:h-1 bg-zinc-500 border-2 border-zinc-500  rounded-full focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-opacity-50"
          aria-label="End"
        />
      </Slider>
    </div>
  );
};

export default DoubleSlider;
