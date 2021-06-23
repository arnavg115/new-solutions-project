import React from "react";

interface props {
  y: number;
}

const Spacer = ({ y }: props) => {
  return (
    <div
      style={{
        height: `${y * 10}px`,
      }}
    ></div>
  );
};

export default Spacer;
