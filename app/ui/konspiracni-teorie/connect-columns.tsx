import React, { useState, useEffect, useCallback } from "react";
import {
  ReactFlow,
  Node,
  Edge,
  Background,
  ReactFlowProvider,
  ReactFlowInstance,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const ConnectColumns: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

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

  const truths = [
    {
      text: "V roce 1969 astronauti z NASA přistáli na Měsíci. Umístili tam americkou vlajku a dokonce dovezli domů množství vzorků jeho povrchu, který vědci dodnes zkoumají.",
      id: 1,
    },
    {
      text: "Linie, které za sebou nechávají při letu letadla, jsou tvořeny kondenzovanou vodou a brzy se rozplynou. Neobsahují žádné záměrně přidávané škodliviny.",
      id: 2,
    },
    {
      text: "Pandemie koronaviru Covid-19 vypukla na konci roku 2019. Dodnes si vyžádala přes sedm milionů obětí. Vakcinace snížila úmrtnost a zmírnila průběh nemoci.",
      id: 3,
    },
    {
      text: "Země je kulatá. Dokazuje to množství vědeckých výzkumů, které probíhají již od dob antiky, ale také fotografie z vesmíru.",
      id: 4,
    },
    {
      text: "Reptiliáni neexistují. Konspirační teorie s nimi spojení pravděpodobně vychází z povídky Království stínů Roberta E. Howarda z roku 1929.",
      id: 5,
    },
  ];

  const conspiracies = [
    {
      text: "Američani zfalšovali přistání na Měsíci a natočili ho ve filmových ateliérech, protože zoufale chtěli předběhnout Rusy. Na Měsíci nikdy nepřistáli.",
      id: 1,
    },
    {
      text: "Letadla zanechávají na obloze bílé čáry plné látek, které přidávají vědci a vlády (např. pro změnu počasí či kontrolu populace). Ochrana proti nim je možná octem.",
      id: 2,
    },
    {
      text: "Covid-19 nikdy neexistoval. Vymysleli si ho mocní, aby nám mohli pomocí vakcín implantovat sledovací čipy, které fungují pomocí 5G sítě.",
      id: 3,
    },
    {
      text: "Země je plochá. Když hledíme před sebe, vidíme rovný horizont, který se nijak neohýbá. To znamená, že Země má tvar disku.",
      id: 4,
    },
    {
      text: "Americkou vládu tajně ovládli tzv. reptiliáni (humanoidi ještěřího vzhledu, kteří se maskují za lidi), jejichž plánem je převzít vládu nad světem.",
      id: 5,
    },
  ];

  const shuffledTruths = truths.sort(() => Math.random() - 0.5);
  const shuffledConspiracies = conspiracies.sort(() => Math.random() - 0.5);

  const node_horizontal_padding = 10;

  const commonNodeStyle = {
    padding: 10,
    borderRadius: 5,
    width: "50vw",
    height: 200,
    fontSize: 30,
    zIndex: 1,
  };

  const createNode = (item: any, index: number, isConspiracy: boolean) => ({
    id: `${isConspiracy ? "conspiracy" : "truth"}-${item.id}`,
    type: "default",
    data: { label: item.text },
    position: {
      x: isConspiracy ? 1200 : 0,
      y: index * (commonNodeStyle.height + node_horizontal_padding),
    },
    style: {
      ...commonNodeStyle,
      background: isConspiracy ? "#FED7D7" : "#C6F6D5",
    },
    zIndex: 1,
  });

  const nodes: Node[] = [
    ...shuffledTruths.map((truth, index) => createNode(truth, index, false)),
    ...shuffledConspiracies.map((conspiracy, index) =>
      createNode(conspiracy, index, true)
    ),
  ];

  const edges: Edge[] = shuffledTruths.map((truth, index) => ({
    id: `edge-${truth.id}`,
    source: `truth-${truth.id}`,
    target: `conspiracy-${truth.id}`,
    type: "straight",
    style: {
      strokeWidth: 10,
    },
    zIndex: 1000,
  }));

  if (!isClient) {
    return null; // or a loading indicator
  }

  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        overflow: "visible",
      }}
    >
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          preventScrolling={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          panOnScroll={false}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnDrag={false}
          onlyRenderVisibleElements={false}
          style={{ height: "100%" }}
        >
          <Background />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default ConnectColumns;
