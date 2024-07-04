import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Home";
import { Add_listing } from "./components/Add-listing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/listing" element={<Add_listing />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
