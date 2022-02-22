import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import { Route, Routes } from "react-router-dom";
import Stake from "./screens/Stake";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stake" element={<Stake />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

// Author : hammadhabib64@gmail.com | mehfoozijaz786@gmail.com
