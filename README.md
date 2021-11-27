# Blockchain-developer-bootcamp-final-project
---
## Project Description
This project is submitted as part of the Blockchain Developer Bootcamp. The core objective is to demonstrate my understanding of the Ethereum Blockchain and interacting with the EVM through the use of smart contracts. 

The idea is a simplified watered down version of a voting process. Contract will initally be deployed with predefined candidates (in this case, should people 'buy' or 'rent'). There is a centralised chairman that registers accounts to the voter register to allow certain accounts to participate. Once added, the chairman initates the voting round where accounts can vote. The chairman then closes the voting round and when this action is performed the winner is declared. 

In a fully built out idea, the voters also send in some money or the vote could cost like this amount of ETH. Whoever wins, gets the pot of the other side according to the number of votes they put in. 

## Directory Structure
- `contracts`: Smart contract deployed in Ropsten testnet
- `migrations`: Migration files for deploying contracts in the `contracts` directory
- `test`: Tests written for the smart contracts to ensure correct actions
- 

## Front-end Project Location
https://fancy-tooth-9776.on.fleek.co/


## How to run the project locally
### Base dependencies
- Node.js >=16
- truffle v5.4.21 and ganache
- npm install @truffle/hdwallet-provider

### Contracts
- Run local testnet in port `8545` with `ganache-cli --port 8545` or `ganache-cli network development` which is pre-configured
- Run `truffle migrate --network development`
- Run `truffle console --network development`
- Run truffle tests with `truffle test`
- The development network id is * but in metamask changet to network id 1337
- 

### Front End
- Front end is using vanilla HTML and javascript  
- Currently using WSL so open `http://172.29.12.39:5500/` otherwise i think it would be `http://localhost:3000`
- In dapp.js file, change the constant `votingAddress` to the locally deployed address on the local testnet

## Tech Stack | Libraries | Frameworks
- Solidity for Smart Contract 
- Remix for initial and localised development
- web3.js for the ethereum web client library
- Ganache for localised testing, migration and deployment
- Truffle for testing, migration and deployment
- Metamask to handle account management 
- React front end javascript library for building web applications
- OpenZeppelin Library

### Ethereum Public Address 
0x520A2d4842312A49dA8E04FedFe81F3431Cd853f 

  
## User Workflow
1. Initially the website will have two people to vote for.  timer should be set off initially for a set period. 
2. The users will then be able to send waves/votes to either party based on their preference
3. The votes should populate a wall and the amount of votes bought 
4. Once the time is out, whoever received the most votes win. 


## The Bigger Picture
. 

**Other Things to Look into To**


## Resources and credits for inspiration
Main Resource then improve
https://medium.com/coinmonks/voting-on-a-blockchain-solidity-contract-codes-explained-c677996d94f2

https://github.com/jacksonng77/ballot/blob/master/ballot.sol



https://gist.github.com/hanssv/deaacfc9be2929683087484684164e6b
https://cryptodetail.com/logic-voting-contract
https://www.toshblocks.com/solidity/complete-example-voting-ballot-smart-contract/
https://medium.com/coinmonks/voting-on-a-blockchain-solidity-contract-codes-explained-c677996d94f2
https://stackoverflow.com/questions/68691636/ethereum-lottery-smart-contract-with-the-following-conditions


Use Lume for screen recording