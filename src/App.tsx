import './index.css';
import { Navigation } from "./components/Navigation";
import Home from './components/Home';
import Try from './components/Try';
import About from './components/About';
import Background from './components/Background';

function App() {
  return (
    <>
      <Background />
      <div className="relative z-10">
        <Navigation />
        <section id="home" className="min-h-[calc(100vh-80px)] flex items-center justify-center">
          <Home />
        </section>
        <section id="play" className="min-h-[calc(100vh-80px)] flex items-center justify-center mb-24">
          <Try />
        </section>
        <section id="about" className="min-h-[calc(100vh-80px)] flex items-center justify-center">
          <About />
        </section>
      </div>
    </>
  );
}

export default App;
