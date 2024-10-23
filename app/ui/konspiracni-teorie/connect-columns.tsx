import React, { useState, useEffect, useCallback } from "react";
import {
  ReactFlow,
  Node,
  Edge,
  addEdge,
  Connection,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import CustomNode from "./custom-node";
import { truths, conspiracies } from "./truths-conspiracies";

interface Item {
  text: string;
  id: number;
}

const ConnectColumns: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  useEffect(() => {
    setIsClient(true);

    const preventZoom = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', preventZoom, { passive: false });

    return () => {
      window.removeEventListener('wheel', preventZoom);
    };
  }, []);
  
  const nodeTypes = {
    customNode: CustomNode,
  };

  const createNode = (item: Item, index: number, isConspiracy: boolean) => ({
    id: `${isConspiracy ? "conspiracy" : "truth"}-${item.id}`,
    type: "customNode",
    data: { label: item.text, isConspiracy, id: item.id },
    position: {
      x: isConspiracy ? 1200 : 0,
      y: index * 160, // 200 (height) + 10 (padding)
    },
  });

  useEffect(() => {
    const shuffledTruths = truths.sort(() => Math.random() - 0.5);
    const shuffledConspiracies = conspiracies.sort(() => Math.random() - 0.5);

    const newNodes: Node[] = [
      ...shuffledTruths.map((truth, index) => createNode(truth, index, false)),
      ...shuffledConspiracies.map((conspiracy, index) =>
        createNode(conspiracy, index, true)
      ),
    ];

    setNodes(newNodes);
  }, []);

  const defaultEdgeOptions = {
    style: { strokeWidth: 3, stroke: "var(--foreground)"},  // Color of the text,
  };

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({...params, ...defaultEdgeOptions}, eds)),
    []
  );

  const isValidConnection = (connection: Edge | Connection): boolean => {
    const sourceNode = nodes.find(node => node.id === connection.source);
    const targetNode = nodes.find(node => node.id === connection.target);
    return !!(sourceNode && targetNode && sourceNode.data.id === targetNode.data.id);
  }

  if (!isClient) {
    return null; // or a loading indicator
  }

  return (
    <div className="w-full h-[60vh] overflow-visible">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        fitView
        preventScrolling={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        panOnScroll={false}
        nodesDraggable={false}
        nodesConnectable={true}
        elementsSelectable={true}
        panOnDrag={false}
        zoomOnDoubleClick={false}
        onlyRenderVisibleElements={false}
        isValidConnection={isValidConnection}
      >
      </ReactFlow>
    </div>
  );
};

export default ConnectColumns;
