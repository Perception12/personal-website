import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Demo from "@/pages/Demo";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import ScrollToHash from "./utils/ScrollToHash";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden selection:bg-highlight/70 selection:text-black">
        <ScrollToHash />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/demo/:id" element={<Demo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
