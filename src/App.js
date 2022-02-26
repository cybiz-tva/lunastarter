import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import { Route, Routes } from "react-router-dom";
import Stake from "./screens/Stake";

function App() {
  const [walletAddress, setWalletAddress] = useState("");
  const [isOn, setIsOn] = useState("home");
  return (
    <>
      <Header setWalletAddress={setWalletAddress} isOn={isOn} />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home setWalletAddress={setWalletAddress} setIsOn={setIsOn} />
            }
          />
          <Route
            path="/stake"
            element={<Stake walletAddress={walletAddress} setIsOn={setIsOn} />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

// Author : hammadhabib64@gmail.com | mehfoozijaz786@gmail.com
