import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";

const MainCard = () => {
  return (
    <div className="main_card p-3 rounded-1  col-6">
      <div className="d-flex justify-content-center mb-4">
        <button className="btn custom_button py-2 rounded-pill">Connect wallet</button>
      </div>

      <div className="sub_card_bg row d-flex flex-column m-0 rounded-1 ">
        <div className="col d-flex d-flex  justify-content-between ">
          <h4>Account</h4>
          <h4>Balance</h4>
        </div>

        <div className="col d-flex justify-content-between">
          <p>dkkd</p>
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
