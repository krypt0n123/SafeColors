import React from 'react';
import { motion } from "framer-motion";

const AboutSection = ({ title, items = [], delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20"
  >
    <h2 className="text-2xl font-medium text-white mb-6">{title}</h2>
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: delay + index * 0.1 }}
          className="text-white/80 leading-relaxed"
        >
          {item}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const About = () => {
  const whyItems = [
    "為了確保地址的安全性和可讀性",
    "減少人為錯誤和地址混淆",
    "提供直觀的地址驗證工具",
    "幫助用戶更好地管理和驗證地址",
    "增強區塊鏈地址的使用體驗"
  ];

  const whatItems = [
    "智能地址顏色編碼系統",
    "地址簡化和對比工具",
    "直觀的地址驗證界面",
    "支持多種地址格式",
    "即時地址分析功能"
  ];

  const whoItems = [
    "區塊鏈開發者和用戶",
    "加密貨幣交易者",
    "數字資產管理者",
    "區塊鏈安全專家",
    "一般加密貨幣用戶"
  ];

  return (
    <section className="min-h-screen pt-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-medium text-white mb-12 text-center">About</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AboutSection title="Why" items={whyItems} delay={0.2} />
            <AboutSection title="What" items={whatItems} delay={0.4} />
            <AboutSection title="Who" items={whoItems} delay={0.6} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 