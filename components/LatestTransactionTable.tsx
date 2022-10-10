import React from "react";

type Props = {};

const LatestTransactionTable = (props: Props) => {
  return (
    <div className="container p-3"  style={{backgroundColor:"#0016ee"}}>
        <h2 className="text-center my-3 mb-5">Latest Transaction History</h2>
      <table className="table " >
        <thead>
          <tr>
            <th scope="col">Transaction ID</th>
            <th scope="col">Sender</th>
            <th scope="col">Receiver</th>
            <th scope="col">Amount</th>
            <th scope="col">Message</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td col-span="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LatestTransactionTable;
