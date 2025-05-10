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
    data: { label: 'sha256' },
    position: { x: 400, y: 10 },
    style: { width: 505, height: 40, fontSize: 14 },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: '2',
    data: { label: 'c809f099167e611bd4b6c4d71fdfb188f729590cae1134c69faa33e5f0814437' },
    position: { x: 185, y: 100 },
    style: { width: 430, height: 40 },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: '3',
    data: { label: '809f099167e611bd4b6c4d71fdfb188f729590cae1134c6' },
    position: { x: 235, y: 200 },
    style: { width: 330, height: 40 },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: '4',
    data: { label: 'Convert to RGB' },
    position: { x: 350, y: 300 },
    style: { width: 600, height: 40 },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: '5',
    data: { label: 'coloring' },
    position: { x: 700, y: 200 },
    style: { width: 300, height: 40 },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: '6',
    data: { label: 'Result' },
    position: { x: 700, y: 100 },
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
  {
    id: 'e6-1',
    source: '6',
    target: '1',
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
    <>
    <h1 style={{
        position: 'absolute',
        top: 10,
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: 32,
        zIndex: 10,
        margin: 0,
      }}>
        流程圖：安全色生成
      </h1>
    <div style={{ width: '80vw', height: '80vh', position: 'relative' }}>
      
        
      <button
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
        還原
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
    </>
  );
};

export default Try;