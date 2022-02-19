import React, { useEffect, useState } from 'react';
import ReactFlow from 'react-flow-renderer';
import { nodeTypes } from './Nodes';


const container = { height: 700, width: 1000 }
const center_x = container.width / 2; //middle of the container x coordinate
const center_y = container.height / 2; //middle of the container y coordinate

const radius = 120; // radius from container middle
const num_circles = 7; // number of circles
const radians = Math.PI * 2 / num_circles;  // distance between each circle


const UpdateNode = () => {
    const initialElements = [
        {
          id: '1',
          type: 'circle',
          position: { x: Math.abs(Math.round(center_x + radius * Math.cos(radians * 1))), y: Math.abs(Math.round(center_y + radius * Math.sin(radians * 1))) },
          data: {},
          draggable: false,
        },
        {
          id: '2',
          type: 'circle',
          position: { x: Math.abs(Math.round(center_x + radius * Math.cos(radians * 2))), y: Math.abs(Math.round(center_y + radius * Math.sin(radians * 2))) },
          data: {},
          draggable: false,
        },
        {
          id: '3',
          type: 'circle',
          position: { x: Math.abs(Math.round(center_x + radius * Math.cos(radians * 3))), y: Math.abs(Math.round(center_y + radius * Math.sin(radians * 3))) },
          data: {},
          draggable: false,
        },
        {
          id: '4',
          type: 'circle',
          position: { x: Math.abs(Math.round(center_x + radius * Math.cos(radians * 4))), y: Math.abs(Math.round(center_y + radius * Math.sin(radians * 4))) },
          data: {},
          draggable: false,
        },
        {
          id: '5',
          type: 'circle',
          position: { x: Math.abs(Math.round(center_x + radius * Math.cos(radians * 5))), y: Math.abs(Math.round(center_y + radius * Math.sin(radians * 5))) },
          data: {},
          draggable: false,
        },
        {
          id: '6',
          type: 'circle',
          position: { x: Math.abs(Math.round(center_x + radius * Math.cos(radians * 6))), y: Math.abs(Math.round(center_y + radius * Math.sin(radians * 6))) },
          data: {},
          draggable: false,
        },
        {
          id: '7',
          type: 'circle',
          position: { x: Math.abs(Math.round(center_x + radius * Math.cos(radians * 7))), y: Math.abs(Math.round(center_y + radius * Math.sin(radians * 7))) },
          data: {},
          draggable: false,
        },
      ];

    // State Management
    const [elements, setElements] = useState(initialElements);
    const [nodeId, setNodeId] = useState('');
    const [nodeBg, setNodeBg] = useState('black');

    // Event Listeners
    const onElementClick = (event, element) => {
        setNodeBg('red');
        setNodeId(element.id);
    }

    useEffect(() => {
        setElements((els) =>
            els.map((el) => {
                if (el.id === nodeId) {
                    el.data = {backgroundColor: nodeBg }
                    console.log(el)
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