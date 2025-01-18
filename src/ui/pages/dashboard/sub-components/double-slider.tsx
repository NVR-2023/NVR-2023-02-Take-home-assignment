import { useState } from "react";
import { Slider, SliderTrack, SliderRange, SliderThumb } from "@radix-ui/react-slider";

const DoubleSlider = ({
  min = 0,
  max = 100,
  step = 37,
  defaultValue = [0, 100],
  onValueChange = (newValue: number[]) => {},
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleValueChange = (newValue: number[]) => {
    setValue(newValue);
    onValueChange(newValue);
  };

  // Deriving individual thumb values
  const [startValue, endValue] = value;

  return (
    <div>
      <Slider
        className="relative flex items-center select-none bg-[#b9b9c0] rounded-[2px] touch-none w-27 h-4.5"
        value={value}
        onValueChange={handleValueChange}
        min={min}
        max={max}
        step={step}>
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
      {/* Example of using derived values */}
      <div className="text-xs mt-1">
        Start: {startValue}, End: {endValue}
      </div>
    </div>
  );
};

export default DoubleSlider;
