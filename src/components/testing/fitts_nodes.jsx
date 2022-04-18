import React, { useEffect, useState } from "react";
import ReactFlow from "react-flow-renderer";
import Timer from "../timer/Timer";
import { nodeTypes } from "./CircleNode";

const UpdateNode = ({ initialElements }) => {
  // State Management
  const [elements, setElements] = useState(initialElements);
  const [nodeId, setNodeId] = useState("1");
  const nodeBg = "red";

  // Timer State Management
  const [isActive, setIsActive] = useState(false);
  const [isStopped, setIsStopped] = useState(true);
  const [time, setTime] = useState(0);
  // Timer Values
  let centiseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
  let seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);

  // Event Listeners
  const onElementClick = (event, element) => {
    const nextId = (parseInt(element.id) + 1).toString(); //increment integer value and convert to string
    setNodeId(nextId);
    if (element.id === "1") {
      setTime(0);
      setIsActive(true);
      setIsStopped(false);
    }
    if (element.id === "7") {
      setIsActive(false);
      setIsStopped(true);
    }
  };

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === nodeId) {
          el.data = { backgroundColor: nodeBg };
        } else {
          el.data = { backgroundColor: "black" };
        }
        return el;
      })
    );
  }, [nodeBg, nodeId, setElements]);

  // Timer useEffect
  useEffect(() => {
    let interval = null;
    if (isActive && isStopped === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isStopped]);

  return (
    <div style={{ height: 800, width: 1000 }}>
      <Timer minutes={minutes} seconds={seconds} centiseconds={centiseconds} />
      <ReactFlow
        elements={elements}
        nodeTypes={nodeTypes}
        onElementClick={onElementClick}
        defaultZoom={1.5}
        minZoom={0.2}
        maxZoom={4}
      ></ReactFlow>
    </div>
  );
};

export default UpdateNode;
