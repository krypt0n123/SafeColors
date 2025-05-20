import { useState } from "react";
import { useCurrentAccount } from "@mysten/dapp-kit";
// Removed ColoredAddress import as it's used within AddressDisplay
import { TitleSection } from "./TitleSection";
import { AddressDisplay } from "./AddressDisplay";
import { ControlsPanel } from "./ControlsPanel";
import { homeDescriptionText } from "../data/homeContent"; // 导入描述文本

export default function Home() {
  const account = useCurrentAccount();
  const [coloring, setColoring] = useState(true);
  const [simplify, setSimplify] = useState(false);
  const [difference, setDifference] = useState(false);
  const [offset, setOffset] = useState(0);

  // baseAddress 來自錢包
  const baseAddress = account?.address || "please connect wallet";

  // 需要修改的位（不含0x）
  const modifyPositions = [7, 26, 43];

  // 根據 baseAddress 和 offset 生成 4 行地址
  function getAddresses() {
    if (!account?.address) {
      return Array(4).fill("please connect wallet");
    }
    const addrs = [baseAddress];
    const baseArr = baseAddress.slice(2).split("");
    for (let i = 0; i < 3; i++) {
      const pos = modifyPositions[i] + offset;
      let arr = [...baseArr]; // Create a new array to avoid modifying the same array reference
      const realPos = pos % arr.length;
      const oldChar = arr[realPos];
      // Ensure modification only happens if arr is not empty and realPos is valid
      if (arr.length > 0 && realPos >= 0 && realPos < arr.length) {
        arr[realPos] = oldChar === "1" ? "0" : "1";
      }
      addrs.push("0x" + arr.join(""));
    }
    return addrs;
  }
  const addresses = getAddresses();

  // new address 按鈕功能
  function handleNewAddress() {
    if (account?.address) {
      setOffset(offset + 1);
    }
  }

  const baseAddressStrippedLength = baseAddress.length > 2 ? baseAddress.length - 2 : 0;

  return (
    <div className=" w-full flex items-center justify-center text-mono">
      <div className=" w-[90vw] max-w-8xl min-h-[70vh] rounded-3xl flex flex-row items-center justify-between bg-gray-900/80 backdrop-blur-lg p-12 shadow-xl">
        <TitleSection title="Safecolors" description={homeDescriptionText} /> {/* 使用导入的文本 */}

        {/* 右側毛玻璃區 */}
        <div className="ml-20 flex-1 flex flex-col items-center justify-center">
          <div className="min-h-[400px] min-w-[900px] bg-gray-300/80 backdrop-blur-lg border-2 border-black rounded-2xl p-9 shadow-lg flex flex-col justify-between">
            <AddressDisplay
              addresses={addresses}
              coloring={coloring}
              simplify={simplify}
              difference={difference}
              modifyPositions={modifyPositions}
              offset={offset}
              baseAddressStrippedLength={baseAddressStrippedLength}
            />
            <ControlsPanel
              coloring={coloring}
              onColoringToggle={() => setColoring(v => !v)}
              simplify={simplify}
              onSimplifyToggle={() => setSimplify(v => !v)}
              difference={difference}
              onDifferenceToggle={() => setDifference(v => !v)}
              onNewAddress={handleNewAddress}
              isWalletConnected={!!account?.address}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 