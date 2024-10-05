import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import WhyChooseUs from "./components/WhyChooseUs";
import Applications from "./components/Applications";
import Metrics from "./components/Metrics";
import Quality from "./components/Quality";
function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar stays across all pages */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <WhyChooseUs />
              <Metrics />
              <Products />

              <ContactUs />
            </>
          }
        />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/quality" element={<Quality />} />
      </Routes>
      <Footer /> {/* Footer stays across all pages */}
    </Router>
  );
}

export default App;
