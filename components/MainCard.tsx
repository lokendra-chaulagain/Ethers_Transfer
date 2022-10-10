import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";

const MainCard = () => {
  return (
    <div className="mainCard p-3 rounded-2" style={{ backgroundColor: "#0016ee", width: "36rem" }}>
      <div className="row d-flex flex-column   m-0 rounded-2 " style={{ backgroundColor: "#fe00fe" }}>
        <div className="col d-flex d-flex justify-content-between ">
          <h4>Account</h4>
          <h4>Balance</h4>
        </div>

        <div className="col d-flex justify-content-between">
          <p>dkkd</p>
          <p>dkkd</p>
        </div>
      </div>

      <div className="input-group input-group-lg flex-nowrap mt-4">
        <span className="input-group-text">
          <FaUserAlt />
        </span>
        <input type="text" className="form-control " placeholder="Address" />
      </div>

      <div className="input-group  input-group-lg flex-nowrap mt-2">
        <span className="input-group-text">
          <SiEthereum />
        </span>
        <input type="text" className="form-control" placeholder="Ethers in Wei" />
      </div>

      <div className="mt-2">
        <textarea className=" rounded-2" id="" placeholder="Any Message" style={{ width: "100%", minHeight: "100px", outline: "none", border: "none", backgroundColor: "#fe00fe" }} />
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button className="py-2 rounded-pill customButton " style={{ width: "100%", border: "none", outline: "none", fontSize: "20px", fontWeight: "500" }}>
          Send Ether
        </button>
      </div>
    </div>
  );
};

export default MainCard;
