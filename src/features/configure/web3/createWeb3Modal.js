import Web3Modal, { connectors } from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

let provider = null;
let web3 = null;
let accounts = null;

export const createWeb3Modal = async () => console.log("ppppp");
const web3Modal = new Web3Modal({
  network: "binance",
  cacheProvider: true,
  providerOptions: {
    injected: {
      display: {
        name: "Injected",
        description: "Home-BrowserWallet",
      },
    },
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
  },
});
