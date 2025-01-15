import { IconProps } from "../../../types/global-types";
const LogoIcon = ({ scale = 1, color = "currentColor" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={29 * scale}
      viewBox="0 0 29 29"
      width={29 * scale}
      fill="none">
      <path
        d="M29 14.5C29 22.5081 22.5081 29 14.5 29C6.49187 29 0 22.5081 0 14.5C0 6.49187 6.49187 0 14.5 0C22.5081 0 29 6.49187 29 14.5Z"
        fill={color}
      />
      <path
        d="M22.7438 20H14.4838V19.44H15.6038V9.35999H14.4838V8.79999H22.7438L24.0458 10.102V13.098L22.8838 14.26L24.0458 15.422V18.698L22.7438 20ZM18.8238 9.35999V13.98H20.8258V9.35999H18.8238ZM18.8238 14.54V19.44H20.8258V14.54H18.8238Z"
        fill="#d4d4d8"
      />
      <path
        d="M4.33 12.02H3.7V8.79999H13.22V12.02H12.59V9.35999H10.07V19.44H11.19V20H5.73V19.44H6.85V9.35999H4.33V12.02Z"
        fill="#d4d4d8"
      />
    </svg>
  );
};

export default LogoIcon;
