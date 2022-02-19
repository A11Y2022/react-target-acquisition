import React from "react";

const CircleNode = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: data.backgroundColor || "black" ,
        padding: "14px",
        borderRadius: "50px",
        width: 10,
        height: 10
      }}
    />
  );
};

export const nodeTypes = {
  circle: CircleNode,
};