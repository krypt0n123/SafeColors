import { memo, useEffect } from 'react';
import { useReactFlow, type NodeProps, type Node, Handle, Position } from '@xyflow/react';
import { sha256 } from 'js-sha256';

interface NodeData extends Record<string, unknown> {
  text: string;
}

function HashNode({ id, data }: NodeProps<Node<NodeData>>) {
  const { getNode, updateNodeData, getNodes } = useReactFlow();

  const calculateHash = () => {
    const addressNode = getNode('1');
    if (addressNode && 'text' in addressNode.data && typeof addressNode.data.text === 'string') {
      const address = addressNode.data.text;
      if (address.length === 66) {
        const hash = sha256(address);
        updateNodeData(id, { text: hash });
      } else {
        updateNodeData(id, { text: '' });
      }
    }
  };

  useEffect(() => {
    calculateHash();
    const interval = setInterval(calculateHash, 100);
    return () => clearInterval(interval);
  }, [getNode, updateNodeData, id]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 min-w-[600px]">
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-blue-500"
      />
      <div className="text-sm font-medium text-gray-700 mb-2">Hash:</div>
      <div className="w-full px-3 py-2 border border-gray-300 bg-gray-800 rounded-md text-white font-mono">
        {data.text || 'Waiting for valid address...'}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-blue-500"
      />
    </div>
  );
}

export default memo(HashNode);