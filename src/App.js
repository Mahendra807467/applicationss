import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you/:productName" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default App