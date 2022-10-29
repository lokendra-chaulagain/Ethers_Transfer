// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Transactions {
    uint256 transactionCount;

    event Transfer(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp
    );

    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
    }

    // transactions array of type TransferStruct
    TransferStruct[] transactions;

   // This function does not return anything it just add data to the blockchain.
    function addToBlockchain(address payable receiver,uint256 amount,string memory message) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender,receiver,amount,message,block.timestamp));
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp);
    }

    // GetAlltransaaction history
    function getAllTransactions()public view returns (TransferStruct[] memory){
        return transactions;
    }

    // Tracking the no. of transaction happened.
    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
