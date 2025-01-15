import LogoIcon from "../../components/icons/logo-icon";

const Toolbar = () => {
  return (
    <div className="w-full bg-zinc-300 rounded h-9 border-1 border-zinc-300">
      <span>
        <LogoIcon scale={0.625} color={"#a1a1aa"} />
      </span>
      <span>This is the toolbar</span>
    </div>
  );
};

export default Toolbar;
