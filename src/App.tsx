import { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ModuleRating from "./pages/ModuleRating/ModuleRating";

import UniversityReview from "./pages/UniversityReviews/UniversityReview";
import Account from "./pages/Account/Account";
import GetInspired from "./pages/GetInspired/GetInspired";
import AboutUs from "./pages/AboutUs/AboutUs";
import UniversityList from "./pages/UniversityList/UniversityList";
import Module from "./pages/Modules/Module";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modulesrating" element={<ModuleRating />} />
        <Route path="/module" element={<Module />} />
        <Route path="/universities" element={<UniversityList />}>
          <Route path=":name" element={<UniversityReview />} />
        </Route>
        <Route path="/account" element={<Account />} />
        <Route path="/about us" element={<AboutUs />} />
        <Route path="/get inspired" element={<GetInspired />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
