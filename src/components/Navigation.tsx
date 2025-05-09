import { ConnectButton } from "@mysten/dapp-kit";
import { useState } from "react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="w-full max-x-">
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white border-2 border-black rounded-3xl m-2 px-6 py-2 flex items-center justify-between font-handwriting"
        style={{ fontFamily: 'Indie Flower, cursive' }}
      >
        {/* Logo區域 */}
        <div className="flex items-center space-x-3">
          {/* 圖片logo預留位 */}
          <div className="w-10 h-10 rounded-2xl border-2 border-black bg-white flex items-center justify-center mr-1">
            <img src="../src/assets/logo.svg" alt="logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-3xl font-bold text-black select-none">Safecolors</span>
        </div>

        {/* 右側導航與連接按鈕 */}
        <div className="flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className={`text-2xl px-2 transition-colors duration-200 ${
              activeSection === "home"
                ? "text-black"
                : "text-black/70 hover:text-black"
            }`}
            style={{ fontFamily: 'Indie Flower, cursive' }}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("play")}
            className={`text-2xl px-2 transition-colors duration-200 ${
              activeSection === "play"
                ? "text-black"
                : "text-black/70 hover:text-black"
            }`}
            style={{ fontFamily: 'Indie Flower, cursive' }}
          >
            Try
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`text-2xl px-2 transition-colors duration-200 ${
              activeSection === "about"
                ? "text-black"
                : "text-black/70 hover:text-black"
            }`}
            style={{ fontFamily: 'Indie Flower, cursive' }}
          >
            About
          </button>
          <div className="max-h-15 ml-4">
            <div className="rounded-2xl border-2 border-black px-4 py-1">
              <ConnectButton connectText="Connect Wallet" />
            </div>
          </div>
        </div>
      </nav>
      {/* 佔位防止內容被遮擋 */}
      <div className="h-20"></div>
    </div>
  );
}

