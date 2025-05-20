import sha256 from "crypto-js/sha256";
import { useMemo } from 'react';

// 内部辅助函数：计算哈希值
const calculateHashInternal = (address: string): string => {
  // crypto-js/sha256 会为一个空字符串也生成一个有效的哈希值
  return sha256(address).toString();
};

// 内部辅助函数：从哈希值获取颜色数组
const getColorsFromHashInternal = (hash: string): string[] => {
  // SHA256 哈希值是64个十六进制字符。
  // 我们需要8种颜色，每种颜色从哈希中取6个字符 (总共48个字符)。
  // 这是安全的，因为 48 <= 64。
  // 如果哈希值意外地过短（理论上不应该发生），slice 操作会优雅地处理，
  // 最多返回可用字符构成的颜色，不足6个字符的颜色值会不完整。
  return Array.from({ length: 8 }, (_, i) => `#${hash.slice(i * 6, i * 6 + 6)}`);
};

interface UseAddressVisualsResult {
  addressHash: string;       // 计算得到的地址哈希值
  addressColors: string[];   // 根据哈希值生成的颜色数组
}

/**
 * 自定义 Hook：useAddressVisuals
 * 用于计算给定地址字符串的 SHA256 哈希值，并从中派生出一组颜色。
 *
 * @param address 需要处理的输入字符串（例如，一个以太坊地址）。
 * @returns 一个包含 `addressHash` 和 `addressColors` 数组的对象。
 */
export function useAddressVisuals(address: string): UseAddressVisualsResult {
  // 使用 useMemo 优化哈希计算，仅当 address 变化时才重新计算
  const addressHash = useMemo(() => {
    return calculateHashInternal(address);
  }, [address]);

  // 使用 useMemo 优化颜色生成，仅当 addressHash 变化时才重新计算
  const addressColors = useMemo(() => {
    // 如果 addressHash 为空（例如，上一步因为某种原因返回了空字符串），则返回空颜色数组
    if (!addressHash) {
      return [];
    }
    return getColorsFromHashInternal(addressHash);
  }, [addressHash]);

  return { addressHash, addressColors };
}