import { Navbar } from "@/layout/Navbar";
import {
  Hero,
  About,
  Projects,
  Experience,
  // Testimonials,
  Contact,
} from "@/sections";
import { Footer } from "@/layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
