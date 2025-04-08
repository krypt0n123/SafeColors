import React, { useState } from 'react';
import { motion } from "framer-motion";

const Example = () => {
  const [addresses] = useState([
    "0x.......abasdasdab",
    "0x.......abasdasdab",
    "0x.......abasdasdab",
    "0x.......abasdasdab"
  ]);

  const [activeButtons, setActiveButtons] = useState({
    colored: true,
    simplify: false,
    showDifferent: false
  });

  const toggleButton = (button) => {
    setActiveButtons(prev => ({
      ...prev,
      [button]: !prev[button]
    }));
  };

  return (
    <section className="min-h-screen pt-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl font-medium text-white mb-12 text-center">Example</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side - Address Display */}
            <motion.div 
              className="flex-1 bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6">
                {addresses.map((address, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="font-mono text-lg text-white/90 bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/20 transition-colors duration-200"
                  >
                    {address}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Controls */}
            <motion.div 
              className="w-full md:w-80 space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button 
                onClick={() => toggleButton('colored')}
                className={`w-full p-4 rounded-xl text-left transition-all duration-200 backdrop-blur-xl border border-white/20 
                  ${activeButtons.colored 
                    ? 'bg-white/20 text-white' 
                    : 'bg-white/10 text-white/70 hover:bg-white/15'}`}
              >
                {activeButtons.colored ? '■' : '□'} colored (染色地址，默认开启)
              </button>
              <button 
                onClick={() => toggleButton('simplify')}
                className={`w-full p-4 rounded-xl text-left transition-all duration-200 backdrop-blur-xl border border-white/20 
                  ${activeButtons.simplify 
                    ? 'bg-white/20 text-white' 
                    : 'bg-white/10 text-white/70 hover:bg-white/15'}`}
              >
                {activeButtons.simplify ? '■' : '□'} simplify (简化地址，不开启是全展开)
              </button>
              <button 
                onClick={() => toggleButton('showDifferent')}
                className={`w-full p-4 rounded-xl text-left transition-all duration-200 backdrop-blur-xl border border-white/20 
                  ${activeButtons.showDifferent 
                    ? 'bg-white/20 text-white' 
                    : 'bg-white/10 text-white/70 hover:bg-white/15'}`}
              >
                {activeButtons.showDifferent ? '■' : '□'} show different (展示不同)
              </button>
              <button className="w-full p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors duration-200 backdrop-blur-xl font-medium">
                new address
                <div className="text-sm text-white/80">(生成一个新地址)</div>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Example; 