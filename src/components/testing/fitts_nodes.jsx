import React, { useEffect, useState } from "react";
import ReactFlow from "react-flow-renderer";
import Timer from "../timer/Timer";
import { nodeTypes } from "./CircleNode";
import PostClick from "../../api/test/trialApi";

const UpdateNode = ({ initialElements, countTrial, coordinate, trial_num }) => {
  // State Management
  const [elements, setElements] = useState(initialElements);
  const [nodeID, setNodeID] = useState("1");
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
    coordinate = {x: coordinate.x.toString(), y: coordinate.y.toString()}
    console.log(coordinate)
    PostClick({ coordinate, time: { minutes, seconds, centiseconds }, on_target: 'true', node_id: nodeID.toString(),trial_num: trial_num.toString() })
    const nextId = (parseInt(element.id) + 1).toString(); //increment integer value and convert to string
    setNodeID(nextId);
    if (element.id === "1") {
      setTime(0);
      setIsActive(true);
      setIsStopped(false);
    }
    if (element.id === "7") {
      setIsActive(false);
      setIsStopped(true);
    }
    console.log('event'+event.data)
  };

  

  const onPaneClick = (event) => {
    PostClick({ coordinate: {x: coordinate.x.toString(), y: coordinate.y.toString()}, time: { minutes, seconds, centiseconds }, on_target: 'false', node_id: nodeID.toString(), trial_num: trial_num.toString()  })
  }

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === nodeID) {
          el.data = { backgroundColor: nodeBg };
        } else {
          el.data = { backgroundColor: "black" };
        }
        if (nodeID > 7) {
          setNodeID('1'); // restart test for next trial
          countTrial(); //update state of the current trial on the test page
        }
        return el;
      })
    );
  }, [nodeBg, nodeID, setElements]);

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
    <div>
      <Timer minutes={minutes} seconds={seconds} centiseconds={centiseconds} />
      <div style={{ height: 700, width: 1800 }}>
        <ReactFlow
          onElementClick={onElementClick}
          onPaneClick={onPaneClick}
          nodeTypes={nodeTypes}
          elements={elements}
          minZoom={2.0}
          maxZoom={2.0}
          defaultZoom={2.0}
          zoomOnPinch={false}
          zoomOnScroll={false}
          panOnScroll={false}
          defaultPosition={[-209, -396]}
        >
        </ReactFlow>
      </div>
    </div>
  );
};

export default UpdateNode;