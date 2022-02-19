import React, { useEffect, useState } from 'react';
import ReactFlow from 'react-flow-renderer';
import { nodeTypes } from './CircleNode';

const UpdateNode = ({ initialElements }) => {
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
        return el;
      })
    );
  }, [nodeBg, nodeId, setElements]);

  return (
    <div style={{ height: 800, width: 1000 }}>
      <ReactFlow
        elements={elements}
        nodeTypes={nodeTypes}
        onElementClick={onElementClick}
        defaultZoom={1.5}
        minZoom={0.2}
        maxZoom={4}>
      </ReactFlow>
    </div>
  );
};

export default UpdateNode;