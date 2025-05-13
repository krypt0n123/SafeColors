import { memo } from 'react';
import { useReactFlow, type NodeProps, type Node, Handle, Position } from '@xyflow/react';

function AddressNode({ id, data }: NodeProps<Node<{ text: string }>>) {
  const { updateNodeData } = useReactFlow();

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    updateNodeData(id, { text: value });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 min-w-[640px]">
      <div className="text-xl font-medium text-gray-700 mb-2">Address:</div>
      <div className="text-white">
        <input
          onChange={handleInputChange}
          value={data.text}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 font-mono"
          placeholder="Enter address"
        />
      </div>
      <Handle
        id="a-top"
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-blue-500"
      />
      <Handle
        id="a-bottom"
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-blue-500"
      />
    </div>
  );
}

export default memo(AddressNode);