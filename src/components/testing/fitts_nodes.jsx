import React, { useEffect, useState } from "react";
import ReactFlow from "react-flow-renderer";
import Timer from "../timer/Timer";
import { nodeTypes } from "./CircleNode";

const UpdateNode = ({ initialElements, countTrial }) => {
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
        if (nodeId > 7) {
          setNodeId('1'); // restart test for next trial
          countTrial(); //update state of the current trial on the test page
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
    <div style={{ height: 700, width: 1800 }}>
    <Timer minutes={minutes} seconds={seconds} centiseconds={centiseconds} />
      <ReactFlow
        onElementClick={onElementClick}
        nodeTypes={nodeTypes}
        elements={elements}
        minZoom={2.0}
        maxZoom={2.0}
        defaultZoom={2.0}
        zoomOnPinch={false}
        zoomOnScroll={false}
        panOnScroll={false}
        panOnDrag={false}
        defaultPosition={[-209,-396]}
        >
      </ReactFlow>
    </div>
  );
};

export default UpdateNode;
