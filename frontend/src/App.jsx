import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FindTailors from "./pages/FindTailors";
import HowItWorks from "./pages/HowItWorks";
import MyTailors from "./pages/MyTailors";
import Orders from "./pages/Orders";
import Profile from "./pages/Profle";
import Bulk from "./pages/Bulk";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-tailors" element={<FindTailors />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/bulk" element={<Bulk />} />

        <Route path="/my-tailors" element={<MyTailors />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />

        {/* Page Not Found → Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
