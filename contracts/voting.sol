// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract voting {
  // State variables
  uint256 totalVotes; // total votes received
  address public chairPerson;  // address of the contract deployer is chairperson
  mapping (address => Voter) voters; // mapping of items for sale. So each skuID corresponds to a dictionary
  Proposal[] public proposals; // initialise an array of proposals
  
  struct Voter {
    address voterAddress; // address of voter
    uint vote; // the index of the thing voted for
    string message; // message of the voter
    uint timestamp; // timetamp of the vote
  }

  struct Proposal {
    bytes32 name; // name of the proposal
    uint voteCount; // number of accumulated votes
  }

  enum State {
    Created, Voting, Ended
  } State public state


  // Events
// event itemAdded(uint _skuCount, string _productName);

  // Modifiers
modifier enoughItems(uint _inventory) {
  require(_inventory>=1);
  _;
}
  constructor(bytes32[] memory proposalNames) public {  // constructor initialises once. 
    chairPerson = msg.sender; // the person who deployed constract is the owner
    
    for (uint i = 0 ; i < proposalNames.length; i++) {
      proposals.push(Proposals({
        name: ProposalNames[i],
        voteCount:0
      })); 
      }
    }
  

  // Functions

  // 1. Create the voting function
  function vote(string memory _message, uint proposal) public {
    totalVotes +=1; // increment total vote counts
    console.log("%s has voted!", msg.sender); // create a console log indicating a vote event
    Voter storage sender = voters[msg.sender]; // 
    sender.message = _message; 
    sender.vote = proposal; 
    
    proposals[proposal].voteCount +=1; 
  


  }
  















}
