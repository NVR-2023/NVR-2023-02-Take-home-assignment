import { Link } from "react-router-dom";
import LogoIcon from "../../../components/icons/logo-icon";

const TitleSegment = ({ title }: { title: string }) => {
  return (
    <div className="flex space-x-1.5">
      <span className="transform translate-y-[0.3rem]">
        <Link to="/private/dashboard">
          <LogoIcon scale={0.625} color={"#b0b0ed"} />
        </Link>
      </span>
      <span>
        <h1 className="font-semibold text-[#4B4BD8]">{title}</h1>
      </span>
    </div>
  );
};

export default TitleSegment;
