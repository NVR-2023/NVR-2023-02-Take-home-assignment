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
      className="relative rounded h-full w-full max-w-full max-h-full overflow-hidden"
      style={{
        backgroundColor: color,
        contain: "content",
      }}
      {...minicardAnimation}>
      <div className="absolute top-1 left-2 tracking-wide text-[9px] font-[550] text-zinc-600">
        {title.toUpperCase()}
      </div>
      <div className="w-full h-full">{children}</div>
    </motion.div>
  );
};

export default MinicardShell;
