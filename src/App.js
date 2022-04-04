import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import { Route, Routes } from "react-router-dom";
import Stake from "./screens/Stake";
import { useWallet } from "@terra-money/wallet-provider";
import IDO from "screens/IDO";
import Sales from "screens/Sales";
import Governance from "screens/Governance";

function App() {
  const [walletAddress, setWalletAddress] = useState("");
  const [isOn, setIsOn] = useState("home");
  const { network } = useWallet();

  const json =
    network.name === "mainnet"
      ? {
          token: "terra1g8d8dmfangktvwul2a0dvkjvztk8ehw6sseqpw",
          stake: "terra1yzz52pnx78j4y8rkl6rk852w6d7naxc2ulvncw",
          sale: "",
        }
      : {
          token: "terra1pmq40axp9a06zwypnkmkqdtf3hlpamlv36vx9a",
          stake: "terra1szl8xwmyt4z8kmsdfqthfq6rc9umypw374nrqp",
          sale: "terra184v7dfn4lax0dvnvmqgkxtmmx8xlpsl540q033",
        };
  // console.log("json", json);
  // console.log("chainId", network.chainID);
  // console.log("lcd", network.lcd);
  // console.log("name", network.name);
  // console.log(network);

  return (
    <>
      <Header setWalletAddress={setWalletAddress} isOn={isOn} />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setWalletAddress={setWalletAddress}
                setIsOn={setIsOn}
                json={json}
              />
            }
          />
          <Route
            path="/ido"
            element={
              <IDO
                setWalletAddress={setWalletAddress}
                setIsOn={setIsOn}
                json={json}
              />
            }
          />
          <Route
            path="/sales"
            element={
              <Sales
                walletAddress={walletAddress}
                setIsOn={setIsOn}
                json={json}
              />
            }
          />
          <Route
            path="/governance"
            element={
              <Governance
                walletAddress={walletAddress}
                setIsOn={setIsOn}
                json={json}
              />
            }
          />
          <Route
            path="/stake"
            element={
              <Stake
                walletAddress={walletAddress}
                setIsOn={setIsOn}
                json={json}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

// Author : hammadhabib64@gmail.com | mehfoozijaz786@gmail.com
