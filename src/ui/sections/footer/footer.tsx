import { FooterProps } from "../../../types/global-types";

const Footer = ({ color }: FooterProps) => {
  const colorMap = new Map([
    ["purple", "bg-purple-950"],
    ["grey", "bg-violet-950"],
  ]);

  const colorClass = colorMap.get(color ?? "");
  return (
    <div
      className={`${colorClass} tracking-widest px-3 py-2 h-30 border-2 text-[10px] text-zinc-300 font-[250] border-t-transparent-300`}>
      Take-home assignment submitted by Nuno Violante Rodrigues in January 2025 for Comudel{" "}
    </div>
  );
};

export default Footer;
