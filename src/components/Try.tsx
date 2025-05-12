import { useCallback } from 'react';
import {
  ReactFlow,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
  Background,
  type Edge,
  type OnConnect,
} from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';
 
import AddressNode from '../components/Nodes/AddressNode';
import HashNode from '../components/Nodes/HashNode';
import Hash1Node from '../components/Nodes/Hash1Node';
import GroupNode from '../components/Nodes/GroupNode';
import ColorAddressNode from '../components/Nodes/ColorAddressNode';

const nodeTypes = {
  address: AddressNode,
  hash: HashNode,
  hash1: Hash1Node,
  group: GroupNode,
  colorAddress: ColorAddressNode,
};
 
const initialNodes = [
  {
    id: '1',
    type: 'address',
    data: {
      text: '',
    },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    type: 'hash',
    data: {
      text: '',
    },
    position: { x: 0, y: 150 },
  },
  {
    id: '3',
    type: 'hash1',
    data: { text: '' },
    position: { x: 0, y: 300 },
  },
  {
    id: '4',
    type: 'group',
    data: { text: '' },
    position: { x: 0, y: 450 },
  },
  {
    id: '5',
    type: 'colorAddress',
    data: { text: '' },
    position: { x: 0, y: 600 },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    animated: true,
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    animated: true,
  },
  {
    id: 'e1-5',
    source: '1',
    target: '5',
    animated: true,
  },
  {
    id: 'e3-5',
    source: '3',
    target: '5',
    animated: true,
  },
];
 
const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const handleRestore = useCallback(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [setNodes, setEdges]);
 
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: 'Indie Flower, cursive' }}>Try</h1>
      <div style={{ width: '80vw', height: '80vh' }}>
        <div className="absolute top-4 right-4 z-10">
        </div>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          style={{ backgroundColor: "#F7F9FB" }}
        >
          <Controls />
          <Background />
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={handleRestore}
              className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors shadow-md"
            >
              Restore
            </button>
          </div>
        </ReactFlow>
      </div>
    </div>
  );
};
 
export default CustomNodeFlow;