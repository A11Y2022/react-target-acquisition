import React, { useEffect, useState } from "react";
import FittsModal from "../components/testing/Modal.js";
import UpdateNode from "../components/testing/fitts_nodes";
import { initialElements } from "../components/testing/initialElements";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (ev) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("click", updateMousePosition);

    return () => window.removeEventListener("click", updateMousePosition);
  }, []);

  return mousePosition;
};

export function Test() {
  const { x, y } = useMousePosition();
  const hasMovedCursor = typeof x === "number" && typeof y === "number";
  

  return (
    <div>
      {" "}
      <h1 style={{ textAlign: "center" }}>Test Page</h1>
      {hasMovedCursor ? console.log(x, y) : ""}
      <FittsModal />
      <UpdateNode initialElements={initialElements} />
    </div>
  );
}
