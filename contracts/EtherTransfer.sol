// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract EtherTransfer {
    uint256 transactionCount;

    event TransferEvent(
        address sender,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp
    );

    struct EtherTransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
    }

    //transactions array of type EtherTransferStruct
    EtherTransferStruct[] transactions;

    function addDataToBlockchain(
        address payable receiver,
        uint256 amount,
        string memory message
    ) public {
        transactionCount += 1;
        transactions.push(
            EtherTransferStruct(
                msg.sender,
                receiver,
                amount,
                message,
                block.timestamp
            )
        );

        emit TransferEvent(
            msg.sender,
            receiver,
            amount,
            message,
            block.timestamp
        );
    }

    //getAlltransaaction history
    function getAllTransactions()
        public
        view
        returns (EtherTransferStruct[] memory)
    {
        return transactions;
    }

    //tracking the no. of transaction happened
    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
