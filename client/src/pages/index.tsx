import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import axios from "axios";
import MainCard from "../components/MainCard";
import LatestTransactionTable from "../components/LatestTransactionTable";
import { EtherTransferContractAddress, EtherTransferContractAbi } from "../context/constants";

const Home = () => {
  // Connecting with smart contract
  const fetchContract = (signerOrProvider: any) => new ethers.Contract(EtherTransferContractAddress, EtherTransferContractAbi, signerOrProvider);

  const connectWithSmartContract = async () => {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);
      return contract;
    } catch (error) {
      console.log("Something went wrong while connecting with contract");
    }
  };

  const [transactionCount, setTransactionCount] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendEther = async (address: any, ether: any, message: any) => {
    try {
      if (currentAccount) {
        const contract = await connectWithSmartContract();
        const unFormatedPrice = ethers.utils.parseEther(ether);
        await ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: currentAccount,
              to: address,
              gas: "0x5208",
              value: unFormatedPrice._hex,
            },
          ],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [transferAmount, setTransferAmount] = useState("");
  const [transferAccount, setTransferAccount] = useState("");
  const [message, setMessage] = useState("");
  const [readMessage, setReadMessage] = useState("");
  const [openBox, setOpenBox] = useState(false);

  return (
    <div className="app_body  d-flex flex-column align-items-center gap-2 mt-5">
      <MainCard />
      <LatestTransactionTable />
    </div>
  );
};

export default Home;
