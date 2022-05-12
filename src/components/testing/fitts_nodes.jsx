import React, { useEffect, useState } from 'react';
import ReactFlow from 'react-flow-renderer';
import { nodeTypes } from './CircleNode';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const UpdateNode = ({ initialElements, countTrial }) => {
  // State Management
  const [elements, setElements] = useState(initialElements);
  const [nodeId, setNodeId] = useState('1');
  const nodeBg = 'red';

  // Event Listeners
  const onElementClick = (event, element) => {
    const nextId = (parseInt(element.id) + 1).toString() //increment integer value and convert to string
    setNodeId(nextId);
  }

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === nodeId) {
          el.data = { backgroundColor: nodeBg }
        }
        else {
          el.data = { backgroundColor: "black" }
        }
        if (nodeId > 7) {
          setNodeId('1'); // restart test for next trial
          countTrial(); //update state of the current trial on the test page
        }
        return el;
      })
    );
  }, [nodeBg, nodeId, setElements]);

  return (
    <div>
       <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
      >
        {({ zoomIn, zoomOut, resetTransform,zoomToElement, ...rest }) => (
          <div>
          <React.Fragment>
            <div className="tools" >
              <button onClick={() => zoomIn()}>Zoom In</button>
              <button onClick={() => zoomOut()}>Zoom Out</button>
              <button onClick={() => resetTransform()}>Reset</button>
            </div>
            <TransformComponent>
              <div style={{ height: 700, width: 1800 }}>
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
            </TransformComponent>
          </React.Fragment>
          </div>
        )}
      </TransformWrapper>
    </div>
  );
};

export default UpdateNode;
