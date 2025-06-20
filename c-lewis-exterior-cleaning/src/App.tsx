import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from "@/components/shared/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/shared/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
