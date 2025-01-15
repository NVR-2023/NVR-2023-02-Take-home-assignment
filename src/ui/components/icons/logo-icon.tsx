import { IconProps } from "../../../types/global-types";
const LogoIcon = ({ scale = 1, color = "currentColor" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={29 * scale}
      width={29 * scale}
      viewBox="0 0 29 29">
      <path
        d="M29 14.5C29 22.5081 22.5081 29 14.5 29C6.49187 29 0 22.5081 0 14.5C0 6.49187 6.49187 0 14.5 0C22.5081 0 29 6.49187 29 14.5Z"
        fill={color}
      />
      <path
        d="M21.2115 19.4224H15V19.0012H15.8422V11.4211H15V11H21.2115L22.1906 11.9791V14.2321L21.3168 15.1059L22.1906 15.9797V18.4433L21.2115 19.4224ZM18.2637 11.4211V14.8953H19.7692V11.4211H18.2637ZM18.2637 15.3165V19.0012H19.7692V15.3165H18.2637Z"
        fill="#d4d4d8"
      />
      <path
        d="M5.47376 13.4214H5V11H12.159V13.4214H11.6853V11.4211H9.79022V19.0012H10.6325V19.4224H6.52655V19.0012H7.36879V11.4211H5.47376V13.4214Z"
        fill="#d4d4d8"
      />
    </svg>
  );
};

export default LogoIcon;
