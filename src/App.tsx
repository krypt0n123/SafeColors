import './index.css';
import { Navigation } from "./components/Navigation";
import Home from './components/Home';
import Try from './components/Try';
import About from './components/About'

function App() {
  return (
    <>
      <Navigation />
      <section id="home" className="min-h-[calc(100vh-80px)] flex items-center justify-center"><Home /></section>
      <section id="play" className="min-h-[calc(100vh-80px)] flex items-center justify-center"><Try/></section>
      <section id="about" className="min-h-[calc(100vh-80px)] flex items-center justify-center"><About/></section>
    </>
  );
}

export default App;
