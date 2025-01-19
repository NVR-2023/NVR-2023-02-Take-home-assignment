import React, { ReactNode } from "react";

const ContentArea = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="flex h-full max-h-full justify-items items-center md:max-h-[calc(100vh-6.75rem)] md:h-[calc(100vh-4rem)] p-2 w-full rounded bg-zinc-300 overflow-y-scroll">
      {children}
    </div>
  );
};

export default ContentArea;
