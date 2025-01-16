import { LinkProps } from "../../../types/global-types";
import { Link } from "react-router-dom";

const MobileLink = ({ Icon, url }: LinkProps) => {
  return (
    <Link
      to={url}
      className="h-5 aspect-square flex justify-center items-center duration-150 transition-all hover:bg-zinc-300 rounded">
      <Icon color="#3f3f46" />
    </Link>
  );
};

export default MobileLink;
