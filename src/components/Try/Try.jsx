import React, { useState } from 'react';
import { motion } from "framer-motion";

const Try = () => {
  const [address, setAddress] = useState('');

  return (
    <section className="min-h-screen pt-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-medium text-white mb-16 text-center">Try</h1>
          
          <div className="flex flex-col items-center gap-6">
            <motion.div 
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative group">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="input address..."
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 
                    text-white placeholder-white/50 outline-none focus:border-blue-500 transition-all duration-200
                    text-lg font-mono"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 
                  group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="px-12 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 
                text-white rounded-xl transition-all duration-200 transform hover:scale-105 font-medium text-lg
                shadow-lg hover:shadow-blue-500/25"
            >
              apply
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Try; 