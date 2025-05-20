import { BoolButton } from './BoolButton';

interface ControlsPanelProps {
  coloring: boolean;
  onColoringToggle: () => void;
  simplify: boolean;
  onSimplifyToggle: () => void;
  difference: boolean;
  onDifferenceToggle: () => void;
  onNewAddress: () => void;
  isWalletConnected: boolean;
}

export function ControlsPanel({
  coloring,
  onColoringToggle,
  simplify,
  onSimplifyToggle,
  difference,
  onDifferenceToggle,
  onNewAddress,
  isWalletConnected,
}: ControlsPanelProps) {
  return (
    <div className="flex flex-row items-center justify-between w-full mt-2 gap-1">
      <BoolButton label="coloring" value={coloring} onClick={onColoringToggle} />
      <BoolButton label="simplify" value={simplify} onClick={onSimplifyToggle} />
      <BoolButton label="difference" value={difference} onClick={onDifferenceToggle} />
      <button
        className={`ml-2 px-4 py-2 rounded-xl border-2 border-black text-2xl text-black font-bold shadow transition-all duration-200 min-w-[180px] ${!isWalletConnected ? 'opacity-50 cursor-not-allowed' : 'bg-white hover:bg-gray-200'}`}
        onClick={onNewAddress}
        disabled={!isWalletConnected}
      >
        new address
      </button>
    </div>
  );
} 