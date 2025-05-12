import { memo, useEffect } from 'react';
import { useReactFlow, type NodeProps, type Node, Handle, Position } from '@xyflow/react';

interface NodeData extends Record<string, unknown> {
  text: string;
}

function Hash1Node({ id, data }: NodeProps<Node<NodeData>>) {
  const { getNode, updateNodeData } = useReactFlow();

  const updateHash1 = () => {
    const hashNode = getNode('2');
    if (hashNode && 'text' in hashNode.data && typeof hashNode.data.text === 'string') {
      const hash = hashNode.data.text;
      if (hash) {
        const first48Chars = hash.substring(0, 48);
        updateNodeData(id, { text: first48Chars });
      } else {
        updateNodeData(id, { text: '' });
      }
    }
  };

  useEffect(() => {
    updateHash1();
    const interval = setInterval(updateHash1, 100);
    return () => clearInterval(interval);
  }, [getNode, updateNodeData, id]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 min-w-[470px]">
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-blue-500"
      />
      <div className="text-sm font-medium text-gray-700 mb-2">First 48 Hash:</div>
      <div className="w-full px-3 py-2 border border-gray-300 bg-gray-800 rounded-md text-white font-mono">
        {data.text || 'Waiting for hash...'}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-blue-500"
      />
    </div>
  );
}

export default memo(Hash1Node);