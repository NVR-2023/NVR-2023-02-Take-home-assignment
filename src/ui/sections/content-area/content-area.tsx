import { ReactNode } from "react";

const ContentArea = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-[calc(100vh-6.75rem)] w-full rounded bg-zinc-300 overflow-y-scroll">
      This is the content area
      {children}
    </div>
  );
};

export default ContentArea;
