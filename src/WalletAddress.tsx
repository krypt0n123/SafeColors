import { useCurrentAccount } from "@mysten/dapp-kit";
import { useState, useEffect } from "react";
import sha256 from "crypto-js/sha256";
import enc from "crypto-js/enc-hex";

export function WalletAddress() {
  const account = useCurrentAccount();
  const [inputValue, setInputValue] = useState("");
  const [hash, setHash] = useState("");
  const [walletHash, setWalletHash] = useState(""); // 新增状态变量存储钱包地址哈希

  // 当account变化时计算钱包地址的哈希
  useEffect(() => {
    if (account) {
      const addressHash = sha256(account.address).toString(enc.Hex);
      setWalletHash(addressHash);
    } else {
      setWalletHash(""); // 钱包未连接时清空哈希
    }
  }, [account]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    // 计算输入内容的SHA256哈希
    const hashResult = sha256(value).toString(enc.Hex);
    setHash(hashResult);
  };

  return (
    <>
      {account && (
        <div>
          <p>Address: {account.address}</p>
          <p>Wallet SHA256 Hash: {walletHash}</p>
        </div>
      )}
    </>
  );
}