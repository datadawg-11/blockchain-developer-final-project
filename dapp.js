// const { send } = require("process")

// Contract deployed on the ropsten testnet. Change below if working on local net
const votingAddress = '0x25Cc8D3ba761CFCa8cF134174A4BBad1c3C6d634' 

const votingABI = [
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "proposalNames",
				"type": "string[]"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_voterAddress",
				"type": "address"
			}
		],
		"name": "addVoter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "chairperson",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "endVote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getTotalVotes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "proposals",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "startVote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "state",
		"outputs": [
			{
				"internalType": "enum voting.State",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalVotersRegistered",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalVotes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "totalVotesFor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_message",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "proposal",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voterRegister",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "vote",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "message",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "voted",
				"type": "bool"
			},
			{
				"internalType": "enum voting.voterStatus",
				"name": "status",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "winnerName",
		"outputs": [
			{
				"internalType": "string",
				"name": "winnerName_",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "winningProposal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "winningProposal_",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

console.log("hello world")

window.addEventListener('load', function() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('Metamask Detected')
        let mmDetected = document.getElementById('mm-detected')
        mmDetected.innerHTML = "Metamask detected"

        const deployedAddress = document.getElementById("voting-deployed-address");
        deployedAddress.innerText = `Contract Address is deployed to ${votingAddress}`;

    }

    else {
        console.log("Metamask Not Available")
        alert("Download and install metamask")
    }

})


const mmEnable = document.getElementById("mm-connect")
const mmAccount = document.getElementById("mm-currentAccount")

mmEnable.onclick = async () => { 
    console.log('beep') 
    await ethereum.request({method:'eth_requestAccounts'})
    mmAccount.innerText = `Connected to ${window.ethereum.selectedAddress}`;
}


const votingGetChairpersonButton = document.getElementById('get-chairperson-button');
const votingChairpersonAddress = document.getElementById('chairperson-address');

votingGetChairpersonButton.onclick = async () => {


    var web3 = new Web3(window.ethereum)
    const voting = new web3.eth.Contract(votingABI, votingAddress)
    // voting.setProvider(window.ethereum)

    let chairAddress = await voting.methods.chairperson().call({from:ethereum.selectedAddress})
	// console.log(x);
	votingChairpersonAddress.innerText = `Address of chairperson: ${chairAddress}`;
	
}

// var web3 = new web3(window.ethereum);

// Setup the functions for chairperson to add voters
const votingSubmitUser = document.getElementById("voting-address-button");

votingSubmitUser.onclick = async () => {
    const votingAddressSubmit = document.getElementById("voting-address").value;
    console.log(votingAddressSubmit);

	var web3 = new Web3(window.ethereum)
    const voting = new web3.eth.Contract(votingABI, votingAddress)
	await voting.methods.addVoter(votingAddressSubmit).send({from:ethereum.selectedAddress});

}

// Setup the functions for public to return total voters that are registered

const getVoterButton = document.getElementById('obtain-number-of-voters');
const totalVoterText = document.getElementById('total-voters-text');

getVoterButton.onclick =  async () => {
	var web3 = new Web3(window.ethereum)
    const voting = new web3.eth.Contract(votingABI, votingAddress)
	
	let registered = await voting.methods.totalVotersRegistered().call({from:ethereum.selectedAddress});
	totalVoterText.innerText = `Total Voters : ${registered}`
}

// Setup the function to obtain the registry of the voter, yet to be created




// Setup the functions for the chairperson to start button
const votingStart = document.getElementById("start-vote");

votingStart.onclick = async () => {
    console.log("Button for starting the voting process has been pressed");

    var web3 = new Web3(window.ethereum)
    
    const voting = new web3.eth.Contract(votingABI, votingAddress)
    // voting.setProvider(window.ethereum)

    await voting.methods.startVote().send({from:ethereum.selectedAddress})
}


// Setup the functions to vote
const votingCast = document.getElementById('submit-vote'); 

votingCast.onclick = async () => {
    console.log("button for casting the vote has been pressed")
	
	let votingMessage = document.getElementById('vote-msg').value
	console.log(votingMessage.value)

	let votingChoice = document.getElementById('vote-choice').value
	console.log(votingChoice.value)

	var web3 = new Web3(window.ethereum)
    
    const voting = new web3.eth.Contract(votingABI, votingAddress)
    // voting.setProvider(window.ethereum)

    await voting.methods.vote(votingMessage, votingChoice).send({from:ethereum.selectedAddress})

}

// Setup the button to retreive total votes so far in the voting stage
const votingTotalVotesReceived = document.getElementById('button-get-total-votes'); 

votingTotalVotesReceived.onclick = async () => {
	const votingTextTotalVotesReceived = document.getElementById('text-total-votes-received')

	var web3 = new Web3(window.ethereum);

	const voting = new web3.eth.Contract(votingABI, votingAddress)

	let _totalvotes = await voting.methods.getTotalVotes().call({from:ethereum.selectedAddress})

	votingTextTotalVotesReceived.innerText = `Total votes received : ${_totalvotes}`;

}

// Setup the functions to obtain the votes so far for candidate 1 and 2
const candidateVotes= document.getElementById('text-total-candidate-votes');
const votesCandidateOne = document.getElementById('votes-for-candidate-1');
const votesCandidateTwo = document.getElementById('votes-for-candidate-2');

votesCandidateOne.onclick = async () => {
	console.log("Button - Votes for Candidate 1 Pressed")
	var web3 = new Web3(window.ethereum);

	const voting = new web3.eth.Contract(votingABI, votingAddress)

	let _totalVotesFor = await voting.methods.totalVotesFor(0).call({from:ethereum.selectedAddress})
	candidateVotes.innerText = `Total votes for candidate 1 is : ${_totalVotesFor}`;


}


votesCandidateTwo.onclick = async () => {
	console.log("Button - Votes for Candidate 2 Pressed")
	var web3 = new Web3(window.ethereum);

	const voting = new web3.eth.Contract(votingABI, votingAddress)

	let _totalVotesFor = await voting.methods.totalVotesFor(1).call({from:ethereum.selectedAddress})
	candidateVotes.innerText = `Total votes for candidate 1 is : ${_totalVotesFor}`;

}




// Setup the functions to end the vote
const votingEndVote = document.getElementById('end-vote'); 
const votingWinner = document.getElementById('winners-text')

votingEndVote.onclick = async () => {
    console.log("button pressed for ending the vote")
    
    var web3 = new Web3(window.ethereum) //metamask no longer injects web3 so you have to include this
    
    const voting = new web3.eth.Contract(votingABI, votingAddress)
    // voting.setProvider(window.ethereum)

    await voting.methods.endVote().send({from:ethereum.selectedAddress})
	let _winnerName = await voting.methods.winnerName().call({from:ethereum.selectedAddress});
	let _winnerProposal = await voting.methods.winningProposal().call({from:ethereum.selectedAddress})

	votingWinner.innerText = `The winner of this round is ${_winnerName}!`

}



// Setup the functions to return the state of the network
const stateButton = document.getElementById('state-button');

stateButton.onclick = async () => {
	console.log('get button for state pressed');
	
	var web3 = new Web3(window.ethereum); 

	const voting = new web3.eth.Contract(votingABI, votingAddress) 

	let stateIndex = await voting.methods.state().call({from:ethereum.selectedAddress});
	
	
	const stateText = document.getElementById('state-text');
	stateText.innerText = `State of the network is : ${stateIndex}`;

}





