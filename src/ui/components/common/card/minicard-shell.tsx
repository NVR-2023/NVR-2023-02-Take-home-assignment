import { ReactNode } from "react";

const MinicardShell = ({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: ReactNode;
}) => {
  return (
    <div
      className="relative rounded h-full max-w-full max-h-full"
      style={{
        backgroundColor: color,
      }}>
      <div className="absolute top-1 left-2 tracking-wide text-[10px] font-[450] text-zinc-400">{title.toUpperCase()}</div>
      {children}
    </div>
  );
};

export default MinicardShell;
