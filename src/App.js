import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About_us from "./components/About_us/about_us";
import HowToUse from "./components/How_to_use/how_to_use";
import PrivacyPolicy from "./components/PrivacyPolicy/privacy_policy"
import Footer from "./components/Footer/footer"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import { Link } from "react-scroll";
import Example from "./components/Example/example";






function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div style={{ display: 'flex', flexDirection: 'column' }}><Navbar /> <Intro /> <Footer /></div>} />
        <Route path="/how-to-use" element={<div style={{ display: 'flex', flexDirection: 'column' }}><Navbar /> <HowToUse /><Footer /></div>} />
        <Route path="/privacy-policy" element={<div style={{ display: 'flex', flexDirection: 'column' }}><Navbar /> <PrivacyPolicy /><Footer /></div>} />
        <Route path="/example" element={<div style={{ display: 'flex', flexDirection: 'column' }}><Navbar /> <Example/> <Footer /></div>}/>
      </Routes>
    </>
      
  );
}

export default App;
