// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
contract voting {
  uint totalVotes; 
    
  struct Vote {
    address voterAddress;
    uint votes; 
    string message; 
    uint timestamp; 
  }


  enum State {
    Created, Voting, Ended
  } State public state


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
    uint inventory; 
    State state;
    address payable seller;
  }


  // Events
event itemAdded(uint _skuCount, string _productName);

  // Modifiers
modifier enoughItems(uint _inventory) {
  require(_inventory>=1);
  _;
}
  constructor() public {  // constructor initialises once. 
    owner = msg.sender; // the person who deployed constract is the owner
    
  }

  // Functions

  function addItem(string memory _name, uint _price, uint _inventory) 
  public enoughItems(_inventory) returns (bool) {
    // This function is where sellers can add items to the vending machine
    // This would increment the SKU count by 1
    // Emits an event
    // returns true
    items[skuCount] = Item({
      name: _name,
      skuID: skuCount+1,
      price: _price,
      inventory: _inventory,
      state: State.Available,
      seller: msg.sender
    });

    skuCount = skuCount + 1;
    emit itemAdded(skuCount, _name);
    return true;  

  }

  function getItems(uint index) public view returns (uint) {
    return (items[index].price);
  }


  // function removeItem(uint _skuId) external returns (uint[]) {
  //   require(_skuId < array.length);
  // }
















}
