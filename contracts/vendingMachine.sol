// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
contract vendingMachine {


  constructor() public {  // constructor initialises once. 
    owner = msg.sender; // the person who deployed constract is the owner
    skuCount = 0; 
  }
//array of addresses of no specified length
  address payable public owner; 

// variable that stores number of items for sale in vending machine
  uint public skuCount; 

// mapping of items for sale. So each skuID corresponds to a dictionary
  mapping (uint => Item) items; 

  struct Item {
    string name;
    uint skuID;
    uint price; 

  }







}
