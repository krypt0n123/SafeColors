import React, { useCallback, useRef, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  MarkerType,
  Position,
  useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';


const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Address: 0xddfa241c39ba6085ae6e1d179dce779d88779265d43d1d14a876297bd9eda6a8' },
    position: { x: 50, y: 0 },
    style: { width: 540, height: 50, fontSize: 14 },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: '2',
    data: { label: 'Sha256 Hash： f91407ce80671193ba60079572497b74272422e37e20bf5479ff80ca90619ebe' },
    position: { x: 105, y: 80 },
    style: { width: 430, height: 50 },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: '3',
    data: { label: 'Take the top 48： f91407ce80671193ba60079572497b74272422e37e20bf54' },
    position: { x: 155, y: 160 },
    style: { width: 330, height: 50 },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: '4',
    data: { label: 'RGB： [#f91407] [#ce8067] [#1193ba] [#600795] ...... [#72497b] [#742724] [#22e37e] [#20bf54]' },
    position: { x: 45, y: 240 },
    style: { width: 550, height: 40 ,fontSize: 12},
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: '5',
    data: { label: 'coloring' },
    position: { x: 170, y: 320 },
    style: { width: 300, height: 40 },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: '6',
    data: { label: 'Result' },
    position: { x: 170, y: 400 },
    style: { width: 300, height: 40 },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
];

const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    sourceHandle: null,
    targetHandle: null,
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
];

const Try = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  // 還原功能
  const onRestore = useCallback(() => {
    setNodes(initialNodes.map(node => ({ ...node })));
    setEdges(initialEdges.map(edge => ({ ...edge })));
  }, []);

  // 節點拖動時自動更新位置
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => nds.map((node) => {
      const change = changes.find((c) => c.id === node.id);
      return change ? { ...node, ...change } : node;
    })),
    []
  );

  return (
    <div className='flex flex-col'>
    <h1 className='text-center text-5xl'>
        Try
      </h1>
    <div style={{ width: '80vw', height: '80vh', position: 'relative' }}>
      
        
      <button
        className='text-black'
        style={{
          position: 'absolute',
          top: 20,
          right: 40,
          zIndex: 10,
          padding: '8px 16px',
          fontSize: 16,
          borderRadius: 6,
          border: '1px solid #aaa',
          background: '#fff',
          cursor: 'pointer',
        }}
        onClick={onRestore}
      >
        Restroe
      </button>
      <div 
      className='justify-center'
      style={{ width: '80vw', height: '80vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
    </div>
  );
};

export default Try;