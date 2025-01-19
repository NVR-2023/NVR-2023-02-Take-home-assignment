import { ReactNode } from "react";

const ContentArea = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="flex h-full max-h-full p-4 overflow-clip justify-items items-center md:max-h-[calc(100vh-6.5rem)] md:h-[calc(100vh-4rem)] w-full rounded bg-zinc-300 ">
      {children}
    </div>
  );
};

export default ContentArea;
