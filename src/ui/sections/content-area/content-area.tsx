import { ReactNode } from "react";

const ContentArea = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-[calc(100vh-7.375rem)] w-full rounded bg-<inc-300 overflow-y-scroll">
      This is the content area
      {children}
    </div>
  );
};

export default ContentArea;
