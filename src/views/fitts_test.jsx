import React from 'react';
import ReactFlow from 'react-flow-renderer';

const container = {height: 1000, width: 1000 }
const center_x = container.width / 2; //middle of the container x coordinate
const center_y = container.height / 2; //middle of the container y coordinate

const radius = 200; // radius from container middle
const num_circles = 7; // number of circles
var angle = 0 //current angle
var step = (2*Math.PI) / num_circles; 

const elements = [
  {
    id: '1',
    type: 'special',
    position: { x: 1000  , y: 1000  },
    data: {  },
    draggable: false,
  },
  {
    id: '2',
    type: 'special',
    position: { x: Math.abs(Math.round(center_x + radius * Math.cos(angle) - center_x))  , y: Math.abs(Math.round(center_y + radius * Math.sin(angle += step) - center_y) )  },
    data: {  },
    draggable: false,
  },
  {
    id: '3',
    type: 'special',
    position: { x: Math.abs(Math.round(center_x + radius * Math.cos(angle) - center_x))  , y: Math.abs(Math.round(center_y + radius * Math.sin(angle += step) - center_y) )  },
    data: {  },
    draggable: false,
  },
  {
    id: '4',
    type: 'special',
    position: { x: Math.abs(Math.round(center_x + radius * Math.cos(angle) - center_x))  , y: Math.abs(Math.round(center_y + radius * Math.sin(angle += step) - center_y) )  },
    data: {  },
    draggable: false,
  },
  {
    id: '5',
    type: 'special',
    position: { x: Math.abs(Math.round(center_x + radius * Math.cos(angle) - center_x))  , y: Math.abs(Math.round(center_y + radius * Math.sin(angle += step) - center_y) )  },
    data: {  },
    draggable: false,
  },
  {
    id: '6',
    type: 'special',
    position: { x: Math.abs(Math.round(center_x + radius * Math.cos(angle) - center_x))  , y: Math.abs(Math.round(center_y + radius * Math.sin(angle += step) - center_y) )  },
    data: {  },
    draggable: false,
  },
  {
    id: '7',
    type: 'special',
    position: { x: Math.abs(Math.round(center_x + radius * Math.cos(angle) - center_x))  , y: Math.abs(Math.round(center_y + radius * Math.sin(angle += step) - center_y) )  },
    data: {  },
    draggable: false,
  },
];
console.log(elements)
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
    <div style={customNodeStyles}/>
  );
};

const nodeTypes = {
  special: CustomNodeComponent,
};

const CustomNodeExample = () => {
  return (
    <div style={{ height: container.height, width: container.width }}>
      <ReactFlow elements={elements} nodeTypes={nodeTypes} />
    </div>
  );
};

export default CustomNodeExample;