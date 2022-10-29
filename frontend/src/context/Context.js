import { useEffect, useState, createContext } from "react";
export const TransactionContext = createContext();
import { contractAddress, contractAbi } from "../utils/constants";

export const TransactionContextProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [transactions, setTransactions] = useState([]);

  // This functions runs on every page refresh and gets connected wallet address.
  useEffect(() => {
    const isWalletConnected = async () => {
      if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
        try {
          const accounts = await window.ethereum.request({ method: "eth_accounts" });
          if (accounts.length > 0) {
            setCurrentAccount(accounts[0]);
          } else {
            console.log("Wallet is not connected please try again once ");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("Please install metamask");
      }
    };
    isWalletConnected();
  }, []);

  // Connect wallet function
  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setCurrentAccount(accounts[0]);
        walletConnectionSuccessToast();
        console.log(`Wallet connected successfully and wallet address is ${accounts[0]}`);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install metamask");
    }
  };

  // Function that listen on account changed
  useEffect(() => {
    const walletRemovedOrWalletChangedListener = async () => {
      if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
        window.ethereum.on("accountsChanged", (accounts) => {
          setCurrentAccount(accounts[0]);
        });
      } else {
        console.log("Please install metamask");
      }
    };
    walletRemovedOrWalletChangedListener();
  });

  // fetch all transaction on every page refresh
  useEffect(() => {
    const getAllTransactions = async () => {
      try {
        const { ethereum } = window;
        if (ethereum) {
          //create instance of contract
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const transactionsContract = new ethers.Contract(contractAddress, contractAbi, signer);

          const availableTransactions = await transactionsContract.getAllTransactions();
          console.log(availableTransactions)

          const structuredTransactions = availableTransactions.map((transaction) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
            message: transaction.message,
            amount: parseInt(transaction.amount._hex) / 10 ** 18,
          }));
          console.log(structuredTransactions);
          setTransactions(structuredTransactions);
        } else {
          console.log("Ethereum is not present");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllTransactions;
  }, []);

  return <TransactionContext.Provider value={{ connectWallet, currentAccount, transactions }}>{children}</TransactionContext.Provider>;
};
