import { Link } from "react-router-dom";
import LogoIcon from "../../../components/icons/logo-icon";

const TitleSegment = ({ title }: { title: string }) => {
  return (
    <div className="flex space-x-1">
      <span>
        <Link to="/private/dashboard">
          <span>
            <LogoIcon scale={0.55} color={"#a1a1aa"} />
          </span>
        </Link>
      </span>
      <span>
        <h1 className="font-semibold text-[#4B4BD8]">{title}</h1>
      </span>
    </div>
  );
};

export default TitleSegment;
