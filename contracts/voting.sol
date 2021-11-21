// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;
pragma experimental ABIEncoderV2;

/// @title A contract for voting
/// @author datadawg-11
/// @notice This contract is used to perform a simple voting between two groups and governed by a chairperson aka the owner of contract
import "@openzeppelin/contracts/access/Ownable.sol"; // ownable functions installed

contract voting is Ownable {
  // State variables
  uint256 public totalVotes; // total votes received
  uint public totalVotersRegistered; // amount of people registered
  address public chairperson;  // address of the contract deployer is chairperson
  
  uint totalTokens; // Available tokens for this election
  uint balanceTokens; // Total tokens still available for purchase
  uint tokenPrice; //Price per token 
  
  mapping (address => Voter) public voterRegister; // mapping of voters 
    
    struct Voter {
    uint vote; // the index of the thing voted for
    // uint voteNumber; // number of votes that voter has given
    string message; // message of the voter
    uint timestamp; // timetamp of the vote
    bool voted; // whether the voter has voted
    voterStatus status; //whether the voter is verified
    }
  
  Proposal[] public proposals; // initialise an empty array of proposals which are the candidates
    struct Proposal {
    string name; // name of the proposal
    uint voteCount; // number of accumulated votes
  }

  enum voterStatus {unverified, verified} 
  enum State {Created, Voting, Ended} State public state;

  // Modifiers
modifier notOwner() {
  require(msg.sender != chairperson);
  _;
}

modifier inState(State _state) {
    require(state == _state);
    _;
}

  constructor(string[] memory proposalNames) {  // constructor initialises once. 
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


  /// @notice Add a voted to the registry so they are able to vote in the voting stage
  /// @param _voterAddress The address of the voter
  function addVoter(address _voterAddress) public onlyOwner inState(State.Created) {
        Voter memory v;
        v.voted = false;
        v.status = voterStatus.verified;
        voterRegister[_voterAddress] = v;
        
        totalVotersRegistered++;
        // emit voterAdded(_voterAddress);
    }
    
    /// @notice Starts the voting round
    /// @dev there are three states for voting
    function startVote() public onlyOwner inState(State.Created) {
        state = State.Voting;
    }
    
    /// @notice Ends the voting round
    /// @dev there are three states for voting
    function endVote() public onlyOwner inState(State.Voting) {
        state = State.Ended;
    }

    /// @notice the voting function that registered users will call
    /// @dev there are three states for voting
    /// @param _message Message that the voter sends
    /// @param proposal This is the index of the candidates, either 0 or 1  
  function vote(string memory _message, uint proposal) public notOwner() inState(State.Voting) {
    // require(msg.value == 1000000000000000);
    require(voterRegister[msg.sender].voted == false, "Already Voted");
    totalVotes ++; // increment total vote counts
    // console.log("%s has voted!", msg.sender); // create a console log indicating a vote event
    Voter storage sender = voterRegister[msg.sender]; // create new 'Voter' struct named sender within voters mapping
    sender.vote = proposal; 
    sender.message = _message;
    sender.voted = true;
    sender.timestamp = block.timestamp;

    proposals[proposal].voteCount +=1; 
    
  }


/// @notice function to return the winning proposal after voting has ended
/// @dev for loop initiated that iterates through each of the candidates vote count to determine the winner
/// @return winningProposal_ this is the index of the winning proposal
  function winningProposal() public view inState(State.Ended) returns (uint winningProposal_) {
    uint winningVoteCount = 0;

    for (uint p=0; p< proposals.length; p++) {
      if (proposals[p].voteCount > winningVoteCount) {
        winningVoteCount = proposals[p].voteCount;
        winningProposal_ = p;
      }
    }
  }

/// @notice function to return the winning proposal string after voting has ended
/// @dev has a nested function which it calls to return the index
/// @return winnerName_ this is the string of the winning proposal
  function winnerName() public view inState(State.Ended) returns (string memory winnerName_) {
    winnerName_ = proposals[winningProposal()].name;
  }

 /// @notice function to return the total votes received (getter function)
  function getTotalVotes() public view returns (uint256) {
    return totalVotes;
  }

/// @notice function to return the total votes for a particular candidate
function totalVotesFor(uint _index) public view returns (uint256) {
  return proposals[_index].voteCount;
}

}








  
















