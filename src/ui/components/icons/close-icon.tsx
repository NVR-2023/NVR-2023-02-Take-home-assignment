import { IconProps } from "../../../types/global-types";

const CloseIcon = ({ scale = 1, color = "currentColor" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={24 * scale}
      width={24 * scale}
      viewBox="0 -960 960 960"
      className="transition-colors duration-150"
      fill={color}>
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  );
};

export default CloseIcon;
