import React, { useEffect, useState } from 'react';
import ReactFlow from 'react-flow-renderer';

const container = { height: 500, width: 1700 }
const center_x = container.width / 2; //middle of the container x coordinate
const center_y = container.height / 2; //middle of the container y coordinate

const radius = 120; // radius from container middle
const num_circles = 7; // number of circles
const radians = Math.PI * 2 / num_circles;  // distance between each circle


const elements = [
  {
    id: '1',
    type: 'special',
    position: { x: Math.abs(Math.round(center_x + radius * Math.cos(radians * 1))), y: Math.abs(Math.round(center_y + radius * Math.sin(radians * 1))) },
    data: {},
    draggable: false,
  },
  {
    id: '2',
    type: 'special',
    position: { x: Math.abs(Math.round(center_x + radius * Math.cos(radians * 2))), y: Math.abs(Math.round(center_y + radius * Math.sin(radians * 2))) },
    data: {},
    draggable: false,
  },
  {
    id: '3',
    type: 'special',
    position: { x: Math.abs(Math.round(center_x + radius * Math.cos(radians * 3))), y: Math.abs(Math.round(center_y + radius * Math.sin(radians * 3))) },
    data: {},
    draggable: false,
  },
  {
    id: '4',
    type: 'special',
    position: { x: Math.abs(Math.round(center_x + radius * Math.cos(radians * 4))), y: Math.abs(Math.round(center_y + radius * Math.sin(radians * 4))) },
    data: {},
    draggable: false,
  },
  {
    id: '5',
    type: 'special',
    position: { x: Math.abs(Math.round(center_x + radius * Math.cos(radians * 5))), y: Math.abs(Math.round(center_y + radius * Math.sin(radians * 5))) },
    data: {},
    draggable: false,
  },
  {
    id: '6',
    type: 'special',
    position: { x: Math.abs(Math.round(center_x + radius * Math.cos(radians * 6))), y: Math.abs(Math.round(center_y + radius * Math.sin(radians * 6))) },
    data: {},
    draggable: false,
  },
  {
    id: '7',
    type: 'special',
    position: { x: Math.abs(Math.round(center_x + radius * Math.cos(radians * 7))), y: Math.abs(Math.round(center_y + radius * Math.sin(radians * 7))) },
    data: {},
    draggable: false,
  },
];

// Styling Nodes
const customNodeStyles = {
  background: 'aqua',
  color: 'black',
  padding: 10,
  borderRadius: 50,
  width: 10,
  height: 10,
};

const CustomNodeComponent = () => {
  return (
    <div style={customNodeStyles} />
  );
};

const nodeTypes = {
  special: CustomNodeComponent,
};

// Event Listeners
const onElementClick = (event, element) => console.log('click', element.id);

const CustomNodeExample = () => {
  const [nodeBg, setNodeBg] = useState('aqua');

  return (
    <div style={{ height: container.height, width: container.width }}>
      <ReactFlow
        elements={elements}
        nodeTypes={nodeTypes}
        onElementClick={onElementClick}
      />  
    </div>
  );
};

export default CustomNodeExample;