import { useState } from "react";
import { ComponentWithLabel } from "../../../types/global-types";

const IconWIthSlidingLabel = ({ label, Icon }: ComponentWithLabel) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleOnMouseEnter = () => {
    setIsHovered(true);
  };
  const handleOnMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      className="flex  items-center">
      <div
        className="grid"
        style={{
          gridTemplateColumns: isHovered ? "1fr" : "0fr",
          transition: "grid-template-columns 300ms",
        }}>


        <div
          className={`hidden md:flex text-sm font-[500] items-center overflow-hidden duration-300 transition-all ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}>
          <span className="ps-2 pe-1 tracking-wide hidden text-zinc-700 md:flex text-[9px] font-[750]">
            {label.toUpperCase()}
          </span>
        </div>
        
      </div>
      <span>
        <Icon />
      </span>
    </div>
  );
};

export default IconWIthSlidingLabel;
