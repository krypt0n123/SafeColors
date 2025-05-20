import { useAddressVisuals } from '../hooks/Calhash';

interface ColoringProps {
  address: string;
  idx: number;
  coloring: boolean;
  simplify: boolean;
  difference: boolean;
  diffPos: number | null;
}

/**
 * 彩色地址显示组件
 * 用于美化地址的显示，支持颜色区分、简化显示和差异对比
 */
export function ColoredAddress({ address, idx, coloring, simplify, difference, diffPos }: ColoringProps) {
  if (address === "please connect wallet") {
    return <span className="text-gray-500">{address}</span>;
  }

  const { addressColors } = useAddressVisuals(address);
  const addrArr = address.slice(2).split("");

  return (
    <span className="font-mono font-bold">
      <span style={{ color: "#000" }}>0x</span>
      {addrArr.map((c, i) => (
        <span
          key={i}
          style={{
            color: coloring
              ? i < 4
                ? addressColors[i] || "#000"
                : i >= addrArr.length - 4
                  ? addressColors[4 + i - (addrArr.length - 4)] || "#000"
                  : "#000"
              : "#000",
            borderBottom: difference && idx > 0 && i === diffPos ? "2px solid red" : undefined,
            paddingBottom: difference && idx > 0 && i === diffPos ? 2 : undefined,
          }}
        >
          {simplify && i >= 4 && i < addrArr.length - 4 ? (i === 4 ? "......" : null) : c}
        </span>
      ))}
    </span>
  );
}
