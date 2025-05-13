import { memo, useEffect } from 'react';
import { useReactFlow, type NodeProps, type Node, Handle, Position } from '@xyflow/react';

interface NodeData extends Record<string, unknown> {
  text: string;
  colorGroups?: string[];
}

function ColorAddressNode({ id, data }: NodeProps<Node<NodeData>>) {
  const { getNode, updateNodeData } = useReactFlow();

  const updateColorAddress = () => {
    const addressNode = getNode('1');
    const hash1Node = getNode('3');
    
    if (addressNode && hash1Node && 
        'text' in addressNode.data && 
        'text' in hash1Node.data && 
        typeof addressNode.data.text === 'string' &&
        typeof hash1Node.data.text === 'string') {
      
      const address = addressNode.data.text;
      const hash = hash1Node.data.text;

      if (address && address.startsWith('0x') && hash && hash.length === 48) {
        // 將48位哈希值分成8組，每組6位
        const colorGroups = [];
        for (let i = 0; i < 8; i++) {
          colorGroups.push(hash.slice(i * 6, (i + 1) * 6));
        }

        updateNodeData(id, { 
          text: address,
          colorGroups
        });
      } else {
        updateNodeData(id, { text: '', colorGroups: [] });
      }
    }
  };

  useEffect(() => {
    updateColorAddress();
    const interval = setInterval(updateColorAddress, 100);
    return () => clearInterval(interval);
  }, [getNode, updateNodeData, id]);

  const renderColoredAddress = () => {
    if (!data.text || !data.colorGroups) {
      return <div className="text-white">Waiting for hash...</div>;
    }

    const addressWithoutPrefix = data.text.slice(2);
    const firstFour = addressWithoutPrefix.slice(0, 4);
    const lastFour = addressWithoutPrefix.slice(-4);
    const middlePart = addressWithoutPrefix.slice(4, -4);

    // 確保 colorGroups 存在且長度為 8
    const colorGroups = data.colorGroups!;

    return (
      <div className="font-mono">
        <span className="text-white">0x</span>
        {firstFour.split('').map((char, index) => (
          <span key={`first-${index}`} style={{ color: `#${colorGroups[index]}` }}>
            {char}
          </span>
        ))}
        <span className="text-white">{middlePart}</span>
        {lastFour.split('').map((char, index) => (
          <span key={`last-${index}`} style={{ color: `#${colorGroups[index + 4]}` }}>
            {char}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 min-w-[640px]">
      <Handle
        id="e-top"
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-blue-500"
      />
      <div className="text-base font-medium text-gray-700 mb-2">Colored Address:</div>
      <div className="w-full px-3 py-2 border border-gray-300 bg-gray-800 rounded-md text-white font-mono">
        {renderColoredAddress()}
      </div>
      
    </div>
  );
}

export default memo(ColorAddressNode);