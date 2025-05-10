import { calculateHash, getColorsFromHash } from './Calhash';

interface ColoringProps {
  address: string;
  idx: number;
  coloring: boolean;
  simplify: boolean;
  difference: boolean;
  diffPos: number | null;
}

export function ColoredAddress({ address, idx, coloring, simplify, difference, diffPos }: ColoringProps) {
  if (address === "please connect wallet") {
    return <span className="text-gray-500">{address}</span>;
  }

  const hash = calculateHash(address);
  const colors = getColorsFromHash(hash);
  const addrArr = address.slice(2).split("");

  return (
    <span className="font-mono">
      <span style={{ color: "#000" }}>0x</span>
      {addrArr.map((c, i) => {
        const underline = difference && idx > 0 && i === diffPos;
        let color = "#000";
        if (coloring) {
          if (i < 4) color = colors[i];
          else if (i >= addrArr.length - 4) color = colors[4 + i - (addrArr.length - 4)];
        }
        return (
          <span
            key={i}
            style={{
              color,
              borderBottom: underline ? "2px solid red" : undefined,
              paddingBottom: underline ? 2 : undefined,
            }}
          >
            {simplify && i >= 4 && i < addrArr.length - 4 ? (i === 4 ? "......" : null) : c}
          </span>
        );
      })}
    </span>
  );
}
