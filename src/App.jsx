
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Career from "./pages/Career";
import Contactus from "./pages/Contactus";
import AboutUs from "./pages/AboutUs";
import GwashPage from "./pages/GwashPage";
import Dr7Page from "./pages/Dr7Page";
export default function App() {
  return (
    <div className="App">
      <Router> 

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/career" element={<Career />} />
      <Route path="/contact" element={<Contactus />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/gwash" element={<GwashPage />} />
      <Route path="/dr7" element={<Dr7Page />} />
      </Routes>
    
        
     </Router>
     
    </div>
  );
}
