import { ColoredAddress } from "./Coloring";

interface AddressDisplayProps {
  addresses: string[];
  coloring: boolean;
  simplify: boolean;
  difference: boolean;
  modifyPositions: number[];
  offset: number;
  baseAddressStrippedLength: number; // Should be baseAddress.slice(2).length
}

export function AddressDisplay({
  addresses,
  coloring,
  simplify,
  difference,
  modifyPositions,
  offset,
  baseAddressStrippedLength,
}: AddressDisplayProps) {
  return (
    <div className="flex flex-col gap-4 mb-4">
      {addresses.map((addr, idx) => {
        const diffPos =
          idx > 0 && baseAddressStrippedLength > 0
            ? (modifyPositions[idx - 1] + offset) % baseAddressStrippedLength
            : null;
        return (
          <div
            key={idx}
            className={`rounded-xl border-2 border-black px-6 py-3 text-xl font-mono bg-white w-full flex justify-center items-center`}
            style={simplify ? { letterSpacing: '2px' } : {}}
          >
            <ColoredAddress
              address={addr}
              idx={idx}
              coloring={coloring}
              simplify={simplify}
              difference={difference}
              diffPos={diffPos}
            />
          </div>
        );
      })}
    </div>
  );
} 