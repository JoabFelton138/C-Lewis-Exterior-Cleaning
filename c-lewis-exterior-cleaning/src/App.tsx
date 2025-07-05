import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from "@/components/shared/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/shared/Footer";
import { Testimonials } from './pages/Testimonials';
import { Patios } from './pages/services/Patios';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/testimonials" element={<Testimonials />}/>
        <Route path="/driveways&patios" element={<Patios />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
