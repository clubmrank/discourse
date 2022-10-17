import { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ModuleRating from "./pages/ModuleRating/ModuleRating";
import Modules from "./pages/Modules/Modules";
import Universities from "./pages/Universities/Universities";
import Account from "./pages/Account/Account";
import GetInspired from "./pages/GetInspired/GetInspired";
import AboutUs from "./pages/AboutUs/AboutUs";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<ModuleRating />} />
        <Route path="/" element={<Modules />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about us" element={<AboutUs />} />
        <Route path="/get inspired" element={<GetInspired />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
