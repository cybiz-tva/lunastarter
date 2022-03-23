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
          token: "terra17fj78yt7qqpdkh492v45qscvvpnnma7e3m4k3d",
          stake: "terra1p7zj346ag30palk27unvxunwkahc26jxvy3rl0",
        }
      : {
          token: "terra1pmq40axp9a06zwypnkmkqdtf3hlpamlv36vx9a",
          stake: "terra1szl8xwmyt4z8kmsdfqthfq6rc9umypw374nrqp",
        };
  console.log("json", json);
  console.log("chainId", network.chainID);
  console.log("lcd", network.lcd);
  console.log("name", network.name);
  console.log(network);

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
                setWalletAddress={setWalletAddress}
                setIsOn={setIsOn}
                json={json}
              />
            }
          />
          <Route
            path="/governance"
            element={
              <Governance
                setWalletAddress={setWalletAddress}
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
