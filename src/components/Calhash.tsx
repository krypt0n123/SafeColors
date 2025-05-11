import sha256 from "crypto-js/sha256";

export function calculateHash(address: string): string {
  return sha256(address).toString();
}

export function getColorsFromHash(hash: string): string[] {
  return Array.from({ length: 8 }, (_, i) => `#${hash.slice(i * 6, i * 6 + 6)}`);
}