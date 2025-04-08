import Narbar from "./components/Navbar/Narbar";
import Example from "./components/Example/Example";
import Try from "./components/Try/Try";
import About from "./components/About/About";
import { UpdateFollower } from "react-mouse-follower";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Narbar />
        <section id="example" className="min-h-screen">
          <Example />
        </section>
        <section id="try" className="min-h-screen">
          <Try />
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="algorithm" className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          <div className="container mx-auto px-4 pt-24 text-white">
            <h2 className="text-3xl font-medium mb-8 text-center">算法展示</h2>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <p className="text-lg">這裡是算法展示區域</p>
            </div>
          </div>
        </section>
      </UpdateFollower>
    </main>
  );
};

export default App;