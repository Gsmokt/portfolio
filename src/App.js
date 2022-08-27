import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Skills from "./pages/Skills";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
