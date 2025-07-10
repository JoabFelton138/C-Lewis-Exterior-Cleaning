import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from "@/components/shared/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/shared/Footer";
import { Testimonials } from './pages/Testimonials';
import { Patios } from './pages/services/Patios';
import { RoofCleaning } from './pages/services/RoofCleaning';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/driveways-and-patios" element={<Patios />}/>
        <Route path="/roof-cleaning" element={<RoofCleaning />}/>
        <Route path="/testimonials" element={<Testimonials />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
