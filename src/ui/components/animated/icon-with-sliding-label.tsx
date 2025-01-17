import { useState } from "react";
import { ComponentWithLabel } from "../../../types/global-types";

const IconWIthSLidingLabel = ({ label, Icon }: ComponentWithLabel) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleOnMouseEnter = () => {
    setIsHovered(true);
  };
  const handleOnMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <button onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className="flex">
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
          {label}
        </div>
      </div>
      <div
        className="grid"
        style={{
          gridTemplateColumns: isHovered ? "0fr" : "1fr",
          transition: "grid-template-columns 300ms",
        }}>
        <div className="overflow-hidden">
          <div className="overflow-hidden">
            <Icon />
          </div>
        </div>
      </div>
    </button>
  );
};

export default IconWIthSLidingLabel;
