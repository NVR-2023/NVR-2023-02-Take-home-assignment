import { IconProps } from "../../../types/global-types";

const BarChartIcon = ({ scale = 1, color = "currentColor" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={24 * scale}
      width={24 * scale}
      viewBox="0 -960 960 960"
      className="transition-colors duration-150"
      fill={color}>
      <path d="M160-160v-320h160v320H160Zm240 0v-640h160v640H400Zm240 0v-440h160v440H640Z" />
    </svg>
  );
};

export default BarChartIcon;
