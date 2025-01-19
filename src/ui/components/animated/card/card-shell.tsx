import { ReactNode } from "react";
const CardShell = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-grow w-full min-h-81 h-81  rounded-[2px] bg-[#ccccd0] justify-center items-center">
      <div className="space-y-4 p-3 w-full h-full">{children}</div>
    </div>
  );
};

export default CardShell;
