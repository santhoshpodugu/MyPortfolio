import React from "react";

function Title({ children }) {
  return (
    <div className="text-[50px] font-bold text-center underline decoration-[1.7px] decoration-primary-special underline-offset-[20px]">
      {children}
    </div>
  );
}

export default Title;
