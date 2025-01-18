import { FooterProps } from "../../../types/global-types";

const Footer = ({ color }: FooterProps) => {
  const colorMap = new Map([
    ["homepage", "bg-purple-950"],
    ["pages", "bg-zinc-700"],
  ]);

  const borderMap = new Map([
    ["homepage", "border-t-zinc-300"],
    ["pages", "border-t-zinc-200"],
  ]);

  const colorClass = colorMap.get(color ?? "");
  const borderClass = borderMap.get(color ?? "");
  return (
    <div
      className={`${colorClass} ${borderClass} tracking-widest px-3 py-2 h-18 border-2 text-[9px] text-zinc-300 font-[250]`}>
      Take-home assignment submitted by Nuno Violante Rodrigues in January 2025 for Comudel{" "}
    </div>
  );
};

export default Footer;
