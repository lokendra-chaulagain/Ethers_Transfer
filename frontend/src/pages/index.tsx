import React, { useEffect, useState } from "react";
import MainCard from "../components/MainCard";
import LatestTransactionTable from "../components/LatestTransactionTable";

const Home = () => {
  const [transactionCount, setTransactionCount] = useState();

  useEffect(() => {
    const getTransactionCount = () => {
      const item = localStorage.getItem("transactionCount");
      setTransactionCount(item);
    };
    getTransactionCount();
  }, []);

  console.log(transactionCount);

  return (
    <div className="app_body  d-flex flex-column align-items-center gap-2 mt-5">
      <MainCard />
      <LatestTransactionTable />
    </div>
  );
};

export default Home;
