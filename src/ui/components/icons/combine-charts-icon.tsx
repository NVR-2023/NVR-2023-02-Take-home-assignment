import { IconProps } from "../../../types/global-types";

const CombineChartsIcon = ({ scale = 1, color = "currentColor" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={24 * scale}
      width={24 * scale}
      viewBox="0 -960 960 960"
      className="transition-colors duration-150"
      fill={color}>
      <path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Zm0-411 273-149-273-149-273 149 273 149Zm0-149Z" />
    </svg>
  );
};

export default CombineChartsIcon;
