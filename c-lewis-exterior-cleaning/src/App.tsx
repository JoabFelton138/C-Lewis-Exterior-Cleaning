import { lazy, Suspense } from 'react'; 
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "./components/shared/Footer";

const Home = lazy(() => import("./pages/Home"));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Patios = lazy(() => import('./pages/services/Patios'));
const RoofCleaning = lazy(() => import('./pages/services/RoofCleaning'));
const Gutters = lazy(() => import('./pages/services/Gutters'));
const WindowCleaning = lazy(() => import('./pages/services/WindowCleaning'));
const Conservatories = lazy(() => import('./pages/services/Conservatories'));
const Portfolio = lazy(() => import('./pages/services/Portfolio'));

function App() {

  return (
    <Router>
      <Navbar />
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen bg-white">
          <div className="text-center">
            <div className="animate-spin rounded-full w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-sky-400 mx-auto mb-3 sm:mb-4"></div>
            <div className="text-lg font-medium title-style">Loading...</div>
            <div className="text-xs sm:text-sm title-style text-gray-500 mt-1 sm:mt-2">C. Lewis Exterior Cleaning</div>
          </div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/pressure-washing" element={<Patios />}/>
          <Route path="/roof-cleaning" element={<RoofCleaning />}/>
          <Route path="/gutter-cleaning" element={<Gutters />}/>
          <Route path="/window-cleaning" element={<WindowCleaning />}/>
          <Route path="/conservatory-and-solar-panel-cleaning" element={<Conservatories />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/testimonials" element={<Testimonials />}/>
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
