import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import AboutUs from "./components/AboutUs/AboutUs";
import Add from "./components/Add/Add";
import Users from "./components/Users/Users";
import Contacts from "./components/Contacts/Contacts";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/team" element={<Users />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
