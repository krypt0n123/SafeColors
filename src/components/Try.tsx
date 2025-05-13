import { useCallback } from 'react';
import {
  ReactFlow,
  Controls,
  useNodesState,
  useEdgesState,
  Background as FlowBackground,
  Edge,
  MarkerType,
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
    position: { x: 0, y: 430 },
  },
  {
    id: '5',
    type: 'colorAddress',
    data: { text: '' },
    position: { x: 0, y: 600 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', sourceHandle: 'a-bottom', targetHandle: 'b-top', animated: false, type: 'default' },
  { id: 'e2-3', source: '2', target: '3', sourceHandle: 'b-bottom', targetHandle: 'c-top', animated: false, type: 'default' },
  { id: 'e3-4', source: '3', target: '4', sourceHandle: 'c-bottom', targetHandle: 'd-top', animated: false, type: 'default' },
  { id: 'e4-5', source: '4', target: '5', sourceHandle: 'd-bottom', targetHandle: 'e-top', animated: false, type: 'default' },
];
 
const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const handleRestore = useCallback(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [setNodes, setEdges]);
 
  return (
    <div className="mt-20 flex flex-col items-center">
      <h1 className="text-6xl font-bold mb-4 text-white text-mono">Try</h1>
      <div style={{ width: '80vw', height: '80vh' }} className="bg-gray-900/80 backdrop-blur-lg rounded-xl shadow-2xl border border-white/10">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          className="bg-transparent"
          >
          <Controls className="bg-white/5 backdrop-blur-sm border border-white/10" />
          <FlowBackground className="bg-transparent" />
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={handleRestore}
              className="px-4 py-2 bg-pink-500/80 backdrop-blur-sm text-white rounded-md hover:bg-pink-600 transition-colors shadow-md border border-white/10"
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