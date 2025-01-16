import React, { ReactNode } from "react";

const ContentArea = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-[calc(100vh-6.75rem)] w-full rounded bg-zinc-300 overflow-y-scroll">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
        {React.Children.map(children, (child) => (
          <div className="border-2 border-blue-400 p-4">{child}</div>
        ))}
      </div>
    </div>
  );
};

export default ContentArea;
