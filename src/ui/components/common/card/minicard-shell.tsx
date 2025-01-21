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
      className="relative rounded h-full max-w-full max-h-full"
      style={{
        backgroundColor: color,
      }}
      {...minicardAnimation}>
      <div className="absolute top-1 left-2 tracking-wide text-[9px] font-[550] text-zinc-600">
        {title.toUpperCase()}
      </div>
      {children}
    </motion.div>
  );
};

export default MinicardShell;
