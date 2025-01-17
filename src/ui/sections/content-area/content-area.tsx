import React, { ReactNode } from "react";

const ContentArea = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-[calc(100vh-6.75rem)] p-2 w-full rounded bg-zinc-300 overflow-y-scroll">
      {children}
    </div>
  );
};

export default ContentArea;
