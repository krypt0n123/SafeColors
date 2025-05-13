import { useState } from "react";
import { useCurrentAccount } from "@mysten/dapp-kit";
import { ColoredAddress } from "./Coloring";

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
    for (let i = 0; i < 3; i++) {
      const pos = modifyPositions[i] + offset;
      let arr = baseAddress.slice(2).split("");
      const realPos = pos % arr.length;
      const oldChar = arr[realPos];
      arr[realPos] = oldChar === "1" ? "0" : "1";
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

  return (
    <div className=" w-full flex items-center justify-center text-mono">
      <div className=" w-[90vw] max-w-8xl min-h-[70vh] rounded-3xl flex flex-row items-center justify-between bg-gray-900/80 backdrop-blur-lg p-12 shadow-xl">
        {/* 左側 SafeColors 標題與介紹 */}
        <div className="ml-40 flex-1 flex flex-col items-left justify-center">
          <h1
            className="font-bold text-7xl mb-8 bg-gradient-to-r from-[#4dabf7] via-[#a18cd1] to-[#fbc2eb] bg-clip-text text-transparent">
            Safecolors
          </h1>
          <div className="text-3xl text-left leading-relaxed whitespace-pre-line">
          This tool by wallet address hash into the unique color combination. 
          Users can quickly distinguish different addresses through color combinations,
          simplifies the wallet address alignment process, 
          effectively resist similar to address safety concerns such as fishing.
          </div>
        </div>
        {/* 右側毛玻璃區 */}
        <div className="ml-20 flex-1 flex flex-col items-center justify-center">
          <div className="min-h-[400px] min-w-[900px] bg-gray-300/80 backdrop-blur-lg border-2 border-black rounded-2xl p-9 shadow-lg flex flex-col justify-between">
            {/* 地址列表 */}
            <div className="flex flex-col gap-4 mb-4">
              {addresses.map((addr, idx) => {
                const diffPos = idx > 0 ? (modifyPositions[idx - 1] + offset) % (baseAddress.length - 2) : null;
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
            {/* 三個 bool 按鈕 + new address 水平排列 */}
            <div className="flex flex-row items-center justify-between w-full mt-2 gap-1">
              <BoolButton label="coloring" value={coloring} onClick={() => setColoring(v => !v)} />
              <BoolButton label="simplify" value={simplify} onClick={() => setSimplify(v => !v)} />
              <BoolButton label="difference" value={difference} onClick={() => setDifference(v => !v)} />
              <button 
                className={`ml-2 px-4 py-2 rounded-xl border-2 border-black text-2xl text-black font-bold shadow transition-all duration-200 min-w-[180px] ${!account?.address ? 'opacity-50 cursor-not-allowed' : 'bg-white hover:bg-gray-200'}`} 
                onClick={handleNewAddress}
                disabled={!account?.address}
              >
                new address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// BoolButton 子組件
function BoolButton({ label, value, onClick }: { label: string; value: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between px-6 py-2 rounded-xl border-2 border-black text-2xl text-black font-bold shadow transition-all duration-200 bg-white`}
      style={{ fontFamily: 'Indie Flower, cursive' }}
    >
      <span>{label}</span>
      <span className="ml-3 w-6 h-6 rounded-md border-2 border-black flex items-center justify-center bg-white">
        {value ? <span className="text-2xl leading-none">✔</span> : null}
      </span>
    </button>
  );
} 