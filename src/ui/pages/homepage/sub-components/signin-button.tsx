import { Link } from "react-router-dom";
const SigninButton = () => {
  return (
    <Link to="/private/dashboard" viewTransition>
      <button className="text-zinc-300 flex items-center justify-center font-[450] px-5 py-2 border-2 rounded-[7px] border-zinc-300 text-[14px]">
        By Nuno Rodrigues, for comudel
      </button>
    </Link>
  );
};

export default SigninButton;
