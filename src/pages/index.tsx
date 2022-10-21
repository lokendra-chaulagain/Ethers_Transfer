import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { etherTransferContractAddress, etherTransferABI } from "../../context/constants.js";
import MainCard from "../../components/MainCard";
import LatestTransactionTable from "../../components/LatestTransactionTable";

const Home = () => {
  //connecting our smart contract

  useEffect(() => {
    //fetch contract
    const fetchContract = (signerOrProvider: any) => new ethers.Contract(etherTransferContractAddress, etherTransferABI, signerOrProvider);

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
  });

  return (
    <div className="app_body  d-flex flex-column align-items-center gap-2 mt-5">
      <MainCard />
      <LatestTransactionTable />
    </div>
  );
};

export default Home;
