import { LinkWithHideableTagProps } from "../../../types/global-types";
import { Link } from "react-router-dom";

const LinkWithHideableTag = ({ Icon, text, url }: LinkWithHideableTagProps) => {
  return (
    <Link to={url} className="space-x-2">
      <Icon />
      <span>{text}</span>
    </Link>
  );
};

export default LinkWithHideableTag;
