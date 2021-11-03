// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;
pragma experimental ABIEncoderV2;

// import "@openzeppelin/contracts/access/AccessControl.sol";
// import "@openzeppelin/contracts/security/ReentrancyGuard.sol";


contract voting {
  // State variables
  uint256 public totalVotes; // total votes received
  uint public totalVotersRegistered; // amount of people registered
  address public chairperson;  // address of the contract deployer is chairperson
  
  uint totalTokens; // Available tokens for this election
  uint balanceTokens; // Total tokens still available for purchase
  uint tokenPrice; //Price per token 
  
  mapping (address => Voter) voterRegister; // mapping of voters 
    struct Voter {
    address voterAddress; // address of voter
    uint vote; // the index of the thing voted for
    // uint voteNumber; // number of votes that voter has given
    string message; // message of the voter
    uint timestamp; // timetamp of the vote
    bool voted; // whether the voter has voted
  }
  
  Proposal[] public proposals; // initialise an empty array of proposals which are the candidates
    struct Proposal {
    string name; // name of the proposal
    uint voteCount; // number of accumulated votes
  }


  enum State {Created, Voting, Ended} State public state;


  // Events
// event itemAdded(uint _skuCount, string _productName);

  // Modifiers
modifier notOwner() {
  require(msg.sender != chairperson);
  _;
}

modifier onlyOwner() {
  require(msg.sender == chairperson);
  _;
}

  constructor(string[] memory proposalNames) public {  // constructor initialises once. 
    chairperson = msg.sender; // the person who deployed constract is the owner
    

    for (uint i = 0 ; i < proposalNames.length; i++) {
      proposals.push(Proposal({
        name: proposalNames[i],
        voteCount:0
      })); 
      }
      state = State.Created;
    }
  

  // Functions
  function addVoter(address _voterAddress) public onlyOwner() {
        Voter memory v;
        v.voted = false;
        voterRegister[_voterAddress] = v;
        totalVotersRegistered++;
        // emit voterAdded(_voterAddress);
    }



  // 1. Create the voting function
  function vote(string memory _message, uint proposal) public payable notOwner() {
    // require(msg.value == 1000000000000000);
    totalVotes ++; // increment total vote counts
    // console.log("%s has voted!", msg.sender); // create a console log indicating a vote event
    Voter storage sender = voterRegister[msg.sender]; // create new 'Voter' struct named sender within voters mapping
    sender.vote = proposal; 
    sender.message = _message;  
    sender.timestamp = block.timestamp;

    proposals[proposal].voteCount +=1; 
  }

// 2. Create a function for obtaining the index of the winning Proposal
  function winningProposal() public view returns (uint winningProposal_) {
    uint winningVoteCount = 0;

    for (uint p=0; p< proposals.length; p++) {
      if (proposals[p].voteCount > winningVoteCount) {
        winningVoteCount = proposals[p].voteCount;
        winningProposal_ = p;
      }
    }
  }

// 3. Create a function for obtaining the string name of the winning proposal
  function winnerName() public view returns (string memory winnerName_) {
    winnerName_ = proposals[winningProposal()].name;
  }

  // 4. Create a function for obtaining the total votes on the proposal
  function getTotalVotes() public view returns (uint256) {
    return totalVotes;
  }

// 5. Create a function for returning the votes a candidate has received so far
function totalVotesFor(uint _index) public view returns (uint256) {
  return proposals[_index].voteCount;
} 

// function validCandidate()










}
  
















