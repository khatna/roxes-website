import React from "react";
import { Route, Routes } from "react-router-dom";
import "../src/App.css";
import About from "./Pages/About_us";
import Contact from "./Pages/Contact";
import Home from "./Pages/HomePage";
import Navbar from "./Pages/Navbar";
function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/service" Component={Contact} />
        </Routes>
      </React.Fragment>
    </div>
  );
}
export default App;
