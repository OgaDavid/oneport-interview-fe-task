import React from "react";

const RateContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="card-rates pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {children}
    </div>
  );
};

export default RateContainer;
