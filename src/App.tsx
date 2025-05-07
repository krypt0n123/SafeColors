import { ConnectButton } from "@mysten/dapp-kit";
import { WalletAddress } from "./WalletAddress";

function App() {
  return (
    <>
      <ConnectButton />
      <WalletAddress />
    </>
  );
}

export default App;
