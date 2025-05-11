import { ConnectButton } from "@mysten/dapp-kit";
import { useState, useEffect } from "react";
import logo from '../asserts/logo.svg';

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  // 根據滾動位置自動高亮導航
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "play", "about"];
      let found = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            found = id;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-2 border-black rounded-3xl m-2 px-6 flex items-center justify-between font-handwriting"
        style={{ fontFamily: 'Indie Flower, cursive' }}
      >
        {/* Logo區域 */}
        <div className="flex items-center">
            <div className="w-32 h-15 bg-white flex items-center justify-center ml-3"> {/* 修改这里 */}
                <img 
                    src={logo} 
                    alt="SafeColors Logo" 
                    className="w-full h-full object-cover" 
                    style={{ height: "auto" }} // 新增行：强制高度自适应
                /> 
            </div>
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
          <div className="ml-4">
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

