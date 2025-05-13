import { memo, useEffect } from 'react';

import { useReactFlow, type NodeProps, type Node, Handle, Position } from '@xyflow/react';

interface NodeData extends Record<string, unknown> {
  text: string;
}

function GroupNode({ id, data }: NodeProps<Node<NodeData>>) {
  const { getNode, updateNodeData } = useReactFlow();

  const updateGroups = () => {
    const hash1Node = getNode('3');
    if (hash1Node && 'text' in hash1Node.data && typeof hash1Node.data.text === 'string') {
      const hash1 = hash1Node.data.text;
      if (hash1 && hash1.length === 48) {
        // 將48位哈希值分成8組，每組6位
        const groups = [];
        for (let i = 0; i < 8; i++) {
          groups.push(hash1.substring(i * 6, (i + 1) * 6));
        }
        updateNodeData(id, { text: groups.join(',') });
      } else {
        updateNodeData(id, { text: '' });
      }
    }
  };

  useEffect(() => {
    updateGroups();
    const interval = setInterval(updateGroups, 100);
    return () => clearInterval(interval);
  }, [getNode, updateNodeData, id]);

  const renderGroups = () => {
    if (!data.text) {
      return (
        <div className="text-base text-left font-mono justify-center">
          Waiting for hash...
        </div>
      );
    }

    const groups = data.text.split(',');
    return (
      <div className="flex gap-1">
        {groups.map((group, index) => (
          <div
            key={index}
            className="flex flex-col px-3 py-2 bg-gray-700 text-white text-sm font-bold rounded-md font-mono"
            style={{ backgroundColor: `#${group}` }}
          >
            #{group}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 min-w-[710px]">
      <Handle
        id="d-top"
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-blue-500"
      />
      <div className="text-base font-medium text-gray-700 mb-2 text-left">RGB:</div>
      <div className="w-full px-3 py-3 border border-gray-300 bg-gray-800 rounded-md text-white font-mono min-h-[63px]">
        {renderGroups()}
      </div>
      <Handle
        id="d-bottom"
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-blue-500"
      />
    </div>
  );
}

export default memo(GroupNode);