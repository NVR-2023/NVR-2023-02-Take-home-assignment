import { LinkWithHideableTagProps } from "../../../types/global-types";
import { Link } from "react-router-dom";

const LinkWithHideableTag = ({ Icon, text, url }: LinkWithHideableTagProps) => {
  return (
    <Link
      to={url}
      className="h-5 group flex items-center space-x-3 duration-150 transition-all hover:bg-zinc-300 rounded">
      <span className=" transform translate-x-0.5 ">
        <Icon scale={0.75} color="#3f3f46" />
      </span>
      <span className="text-xs font-medium group-hover:font-bold text-zinc-700 transition-all duration-300 ease-in-out">
        {text}
      </span>
    </Link>
  );
};

export default LinkWithHideableTag;
