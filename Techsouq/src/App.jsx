import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/HomepageView";
import About from "./views/AboutUsView";
import Service from "./views/ServiceView";
import Pricing from "./views/Pricingview";
import CaseStudy from "./views/CaseStudyView";
import Privacy from "./components/base/Privacy";
import Contact from "./views/ContactView";
import Footer from "./components/base/Footer";
import TermsAndConditions from "./components/base/TermsAndConditions";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
