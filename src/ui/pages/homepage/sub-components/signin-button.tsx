import { Link } from "react-router-dom";
const SigninButton = () => {
  return (
    <Link to="/private/dashboard" viewTransition>
      <button className="text-zinc-300 flex items-centre justify-center font-semibold px-9 py-1 border-2 rounded-[7px] border-zinc-300 text-sm">
        SIGN IN
      </button>
    </Link>
  );
};

export default SigninButton;
