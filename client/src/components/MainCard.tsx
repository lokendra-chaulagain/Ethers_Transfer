import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";

const MainCard = () => {
  const [currentWalletAddress, setCurrentWalletAddress] = useState("");

  //first checking window.ethereum object is present or not that means metamask is installed or not
  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setCurrentWalletAddress(accounts[0]);
        console.log(`Wallet connected successfully and wallet address is ${accounts[0]}`);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install metamask");
    }
  };

  // although wallet gets connected but after refresh it wipe so lets get currentlyConnextWalledAddress
  useEffect(() => {
    const getCurrentlyConnectedWalletAddress = async () => {
      if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
        try {
          const accounts = await window.ethereum.request({ method: "eth_accounts" }); //Note this eth_accounts
          if (accounts.length > 0) {
            setCurrentWalletAddress(accounts[0]);
          } else {
            console.log("Wallet is not connected play try again once ");
          }
        } catch (error) {}
      } else {
        console.log("Please install metamask");
      }
    };
    getCurrentlyConnectedWalletAddress();
  });

  //when we changed wallet or disconnected the wallet the effect should be immediately reflect in the frontend
  useEffect(() => {
    const walletRemovedOrWalletChangedListener = async () => {
      if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
        window.ethereum.on("accountsChanged", (accounts: any) => {
          setCurrentWalletAddress(accounts[0]);
        });
      } else {
        setCurrentWalletAddress("");
        console.log("Please install metamask");
      }
    };
    walletRemovedOrWalletChangedListener();
  });

  return (
    <div className="main_card p-3  rounded-1  col-6">
      <div className="d-flex justify-content-center mb-4">
        <button onClick={connectWallet} className="btn custom_button py-2 rounded-pill">
          {currentWalletAddress ? "Connected" : "Connect wallet"}
        </button>
      </div>

      <div className="sub_card_bg row d-flex flex-column m-0 rounded-1 ">
        <div className="col d-flex d-flex  justify-content-between ">
          <h4>Account</h4>
          <h4>Balance</h4>
        </div>

        <div className="col d-flex justify-content-between">
          <p> {currentWalletAddress ? currentWalletAddress : "No any wallet connected !"}  </p>
          <p>dkkd</p>
        </div>
      </div>

      <div className="input-group input-group-lg flex-nowrap mt-4 ">
        <span className="input_icon_div input-group-text border-0">
          <FaUserAlt />
        </span>
        <input type="text" className=" custom_input_bg border-0 form-control " placeholder="Address" />
      </div>

      <div className="input-group  input-group-lg flex-nowrap mt-2 ">
        <span className=" input_icon_div input-group-text border-0">
          <SiEthereum />
        </span>
        <input type="text" className=" custom_input_bg border-0  form-control" placeholder="Ethers in Wei" />
      </div>

      <textarea className="custom_input_bg border-0 rounded-1 mt-2 form-control" placeholder="Message"></textarea>

      <div className="d-flex justify-content-center mt-4">
        <button className="btn custom_button py-2 rounded-pill">Send Ether</button>
      </div>
    </div>
  );
};

export default MainCard;
