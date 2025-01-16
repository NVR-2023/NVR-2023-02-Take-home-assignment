import { Link } from "react-router-dom";
import LogoIcon from "../icons/logo-icon";

const LogoWithLink = () => {
  return (
    <Link to="/">
      <LogoIcon scale={0.625} color={"#4B4BD8"} />
    </Link>
  );
};

export default LogoWithLink;
