import { motion } from "framer-motion";
import { ReactNode } from "react";
import { minicardAnimation } from "../../../animations/minicard-animation";

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
    <motion.div
      className="rounded h-full w-full overflow-hidden p-2"
      style={{
        backgroundColor: color,
        contain: "content",
      }}
      {...minicardAnimation}>
      <div className="tracking-wide text-[9px] font-[550] text-zinc-600 flex justify-start items-start">
        {title.toUpperCase()}
      </div>
      <div className="flex justify-start items-start w-full h-full">{children}</div>
    </motion.div>
  );
};

export default MinicardShell;
