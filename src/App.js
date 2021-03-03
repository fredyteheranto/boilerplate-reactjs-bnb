import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Web3Modal, { connectors } from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { convertWeitToBnb } from "./features/helpers";
import { getBalanceBnb } from "./features/configure/web3";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Alert, Layout } from "antd";
import "./App.css";
import HeaderWeb from "./components/Header";

let web3Modal;
let provider;
const { Header, Footer, Content } = Layout;
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        1: "https://bsc-dataseed.binance.org/",
        56: "https://bsc-dataseed.binance.org/",
        97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      },
    },
  },
  "custom-binance": {
    display: {
      name: "Binance",
      description: "Binance Chain Wallet",
      logo: "",
    },
    package: "binance",
    connector: async (ProviderPackage, options) => {
      const provider = window.BinanceChain;
      await provider.enable();
      return provider;
    },
  },
  "custom-math": {
    display: {
      name: "Math",
      description: "Math Wallet",
      logo: "",
    },
    package: "math",
    connector: connectors.injected,
  },
  "custom-twt": {
    display: {
      name: "Trust",
      description: "Trust Wallet",
      logo: "",
    },
    package: "twt",
    connector: connectors.injected,
  },
  "custom-safepal": {
    display: {
      name: "SafePal",
      description: "SafePal App",
      logo: "",
    },
    package: "safepal",
    connector: connectors.injected,
  },
};

const inject = async () => {
  try {
    web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions,
      disableInjectedProvider: false,
    });
    provider = await web3Modal.connect();
    window.web3 = new Web3(provider);
    console.log("Conect");
    return true;
  } catch (err) {
    console.error(err);
  }

  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    return true;
  } else {
    try {
      web3Modal = new Web3Modal({
        cacheProvider: true,
        providerOptions,
        disableInjectedProvider: false,
      });
      provider = await web3Modal.connect();
      window.web3 = new Web3(provider);
      console.log("Conect", window.ethereum);
      return true;
    } catch (err) {
      console.error(err);
    }
  }

  return false;
};

function App() {
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState(null);
  useEffect(() => {
    const initialize = async () => {
      const injected = await inject();
      if (!injected) {
        setError("web3 object not found");
        return;
      } else {
        const accounts = await window.web3.eth.getAccounts();
        const weibnb = await getBalanceBnb(accounts[0]);
        await setBalance(convertWeitToBnb(weibnb));
      }
    };
    initialize();
  });
  return (
    <>
      <Layout>
        <Header style={{ textAlign: "center" }}>
          {" "}
          {error ? <Alert type="error" message={error} banner /> : ""}
          <HeaderWeb />
        </Header>
        <Content style={{ textAlign: "center" }}> {balance}</Content>
        <Footer style={{ textAlign: "center" }}>Footer</Footer>
      </Layout>
    </>
  );
}

export default App;
