import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {
  NetworkInfo,
  WalletProvider,
  WalletStatus,
  getChainOptions,
} from "@terra-money/wallet-provider";

getChainOptions().then((chainOptions) => {
  ReactDOM.render(
    <WalletProvider {...chainOptions}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WalletProvider>,
    document.getElementById("root")
  );
});
