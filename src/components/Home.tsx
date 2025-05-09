import React, { useState } from "react";

export default function Home() {
  // 三個 bool 狀態
  const [coloring, setColoring] = useState(false);
  const [simplify, setSimplify] = useState(false);
  const [difference, setDifference] = useState(false);

  // 假地址數據
  const addresses = [
    "0xf783607f6ffff1bba81c7e671376f0addc1d5d48b5799d9121f1768f2c80a44e",
    "0xf783607f6ffff1bba81c7e671376f0addc1d5d48b5799d9121f1768f2c80a44e",
    "0xf783607f6ffff1bba81c7e671376f0addc1d5d48b5799d9121f1768f2c80a44e",
    "0xf783607f6ffff1bba81c7e671376f0addc1d5d48b5799d9121f1768f2c80a44e",
  ];

  // 地址簡化函數
  function displayAddress(addr: string) {
    if (simplify) {
      return addr.slice(0, 4) + "......" + addr.slice(-4);
    }
    return addr;
  }

  return (
    <div className=" w-full flex items-center justify-center" style={{ fontFamily: 'Indie Flower, cursive' }}>
      <div className="mt-12 w-[90vw] max-w-7xl min-h-[70vh] rounded-3xl flex flex-row items-center justify-between p-12 shadow-xl">
        {/* 左側 SafeColors 標題與介紹 */}
        <div className="mr flex-1 flex flex-col items-left justify-center">
          <h1 className="font-bold text-6xl text-white mb-8">Safecolors</h1>
          <div className="text-2xl text-white text-left leading-relaxed whitespace-pre-line">
            TextTextTextTextTextTextTextTextTextText
            TextTextTextTextTextTextTextText
            TextTextTextTextTextTextTextText
            TextTextTextTextTextTextTextText
            TextTextTextTextTextTextTextText
            TextTextTextTextTextTextTextText
          </div>
        </div>
        {/* 右側毛玻璃區 */}
        <div className="ml-40 flex-1 flex flex-col items-center justify-center">
          <div className="max-w-lg min-h-[340px] min-w-[669px] bg-gray-300/80 backdrop-blur-lg border-2 border-black rounded-2xl p-6 shadow-lg flex flex-col justify-between">
            {/* 地址列表 */}
            <div className="flex flex-col gap-3 mb-2 ">
              {addresses.map((addr, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl border-2 border-black px-4 py-2 text-base font-mono text-black bg-white w-full ${simplify ? 'flex justify-center items-center text-lg' : 'break-all'}`}
                  style={simplify ? { letterSpacing: '2px' } : {}}
                >
                  {displayAddress(addr)}
                </div>
              ))}
            </div>
            {/* 三個 bool 按鈕 + new address 水平排列 */}
            <div className="flex flex-row items-center justify-between w-full mt-2 gap-1">
              <BoolButton label="coloring" value={coloring} onClick={() => setColoring(v => !v)} />
              <BoolButton label="simplify" value={simplify} onClick={() => setSimplify(v => !v)} />
              <BoolButton label="difference" value={difference} onClick={() => setDifference(v => !v)} />
              <button className="ml-2 px-4 py-2 rounded-xl border-2 border-black bg-white text-xl text-black font-bold shadow transition-all duration-200 min-w-[180px]">
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
      className={`flex items-center justify-between px-4 py-2 rounded-xl border-2 border-black text-lg text-black font-bold shadow transition-all duration-200 min-w-[120px] bg-white`}
      style={{ fontFamily: 'Indie Flower, cursive' }}
    >
      <span>{label}</span>
      <span className="ml-2 w-6 h-6 rounded-md border-2 border-black flex items-center justify-center bg-white">
        {value ? <span className="text-2xl leading-none">✔</span> : null}
      </span>
    </button>
  );
}
