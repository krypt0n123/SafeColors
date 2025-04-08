import { MdMenu } from "react-icons/md";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    title: "Example",
    link: "#example",
  },
  {
    id: 2,
    title: "Try",
    link: "#try",
  },
  {
    id: 3,
    title: "About",
    link: "#about",
  },
  {
    id: 4,
    title: "Algorithm",
    link: "#algorithm",
  }
];

const Narbar = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-blue-900/80 to-gray-900/80 backdrop-blur-md" />
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="container relative flex justify-between items-center px-6 py-4"
        >
          {/* Logo */}
          <a 
            href="#example" 
            onClick={(e) => scrollToSection(e, '#example')}
            className="font-medium text-xl text-white hover:text-blue-400 transition-colors duration-300"
          >
            Safecolors
          </a>

          {/* Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 999,
                      followSpeed: 1.5,
                      scale: 3,
                      mixBlendMode: "difference",
                    }}
                  >
                    <a
                      href={item.link}
                      onClick={(e) => scrollToSection(e, item.link)}
                      className="relative inline-block text-sm py-2 px-3 text-white/70 hover:text-white transition-all duration-300
                        after:content-[''] after:absolute after:bottom-0 after:left-0 
                        after:w-full after:h-[2px] after:bg-blue-400 
                        after:transform after:scale-x-0 after:origin-bottom-right
                        after:transition-transform after:duration-300
                        hover:after:scale-x-100 hover:after:origin-bottom-left"
                    >
                      {item.title}
                    </a>
                  </UpdateFollower>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button className="text-white/70 hover:text-white transition-colors duration-300">
              <MdMenu className="text-2xl" />
            </button>
          </div>
        </motion.nav>
      </motion.div>
    </>
  );
};

export default Narbar;