import './index.css';
import { Navigation } from "./components/Navigation";
import { WalletAddress } from "./WalletAddress";
import Home from './components/Home';

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <WalletAddress />
    </>
  );
}

export default App;
