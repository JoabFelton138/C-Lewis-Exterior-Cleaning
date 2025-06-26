import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from "@/components/shared/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/shared/Footer";
import { Testimonials } from './pages/Testimonials';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/testimonials" element={<Testimonials />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
