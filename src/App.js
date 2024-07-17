import React, {useEffect}  from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Add_listing } from "./components/Add-listing";
import { Dashboard } from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Sidenav from "./components/slidenav";
import Header from "./components/Header2";
import { Add_listing2 } from "./components/Add-listing2";
import { Profile } from "./components/Profile";
import { Listings_grid } from "./components/Listings-grid-1";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Pricing } from "./components/Pricing";
import { Sign_in } from "./components/Sign-in";
import { Sign_up } from "./components/Sign-up";
import { Forgot_Password } from "./components/Forgot-Password";
import { Faq } from "./components/Faq";
import { Terms_Condition } from "./components/Terms_condition";
import { Leads } from "./components/Leads";


  // import AOS from 'aos';
  // import 'aos/dist/aos.css';


function App() {
  // useEffect(() => {
  //   AOS.init({ duration: 1200 });
  // }, []);


  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/listing" element={<Add_listing />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/sidenav" element={<Sidenav />} />
          <Route exact path="/listing2" element={<Add_listing2   />} />
          <Route exact path="/profile" element={<Profile   />} />
          <Route exact path="/listing-grid" element={<Listings_grid   />} />
          <Route exact path="/about" element={<About   />} />
          <Route exact path="/contact" element={<Contact  />} />
          <Route exact path="/pricing" element={<Pricing  />} />
          <Route exact path="/sign-in" element={<Sign_in  />} />
          <Route exact path="/sign-up" element={<Sign_up  />} />
          <Route exact path="/forgot-password" element={<Forgot_Password  />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/terms" element={<Terms_Condition />} />
          <Route exact path="/leads" element={<Leads />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
