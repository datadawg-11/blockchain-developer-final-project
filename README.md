# Blockchain-developer-bootcamp-final-project
---
## Project Description
This project is submitted as part of the Blockchain Developer Bootcamp. The core objective is to demonstrate my understanding of the Ethereum Blockchain and interacting with the EVM through the use of smart contracts. 

The idea is a simplified watered down version of a voting process. Contract will initally be deployed with predefined candidates (in this case, whether should people 'purchase' or 'rent'). There is a centralised chairman that registers accounts to the voter register to allow certain accounts to participate. Once added, the chairman initates the voting round where accounts can vote. The chairman then closes the voting round and when this action is performed the winner is declared. 

In a fully built out idea, the voters also send in some money or the vote could cost like this amount of ETH. Whoever wins, gets the pot of the other side according to the number of votes they put in. 

## Directory Structure
- `contracts`: Smart contract deployed to Ropsten testnet
- `migrations`: Migration files for deploying contracts in the `contracts` directory
- `test`: Tests written for the smart contracts to ensure correct actions
- `index.html`: The vanilla HTML file for the frontend
- `dapp.js`: The vanilla javascript for the frontend and connection with the deployed smart contract

## Front-end Project Location (Deployed with fleek)
odd-cloud-5728.on.fleek.co


## How to run the project locally
### Base dependencies
- Node.js >=16
- truffle v5.4.21 `npm install truffle` and ganache-cli `npm install -g ganache-cli`
- 
### Contracts
- Run `npm install` in the project root folder to install smart contract dependencies
- Run local testnet in port `8545` using `ganache-cli network development` which is pre-configured
- Run `truffle migrate --network development`
- Run `truffle console --network development`
- Run truffle tests with `truffle test`
- The development network id is * but in metamask change to network id 1337
- 

### Front End
- Front end is using vanilla HTML and javascript  
- Currently using WSL so open `http://172.29.12.39:5500/` otherwise i think it would be `http://localhost:3000` as currently using VS studio `Go Live`
- In dapp.js file, change the constant `votingAddress` (line 4) to the locally deployed address that `voting` is deployed to on the local testnet

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

  
## Walkthrough of user interactions
1. Initially the website will have two categories to vote for, i.e whether to 'purchase' or to 'rent'.
2. The Chairperson is the owner of the smart contract and the deployer of the contract. The chairperson is the first account address and is only allowed to add people to the voter registry to allow other users to vote. In addition, the chairperson is the only account allowed to change the state of the voting i.e registration, voting, ending
3. Once all voters are registered, the chairperson starts the voting round. 
4. User accounts can now submit their votes
5. Once all votes are cast, the chairperson closes the voting round by ending the voting round state. 
6. Once chairperson has closed the network the winner is displayed

## Credits and Inspiration from
https://medium.com/coinmonks/voting-on-a-blockchain-solidity-contract-codes-explained-c677996d94f2
https://github.com/jacksonng77/ballot/blob/master/ballot.sol
https://gist.github.com/hanssv/deaacfc9be2929683087484684164e6b
https://cryptodetail.com/logic-voting-contract
https://www.toshblocks.com/solidity/complete-example-voting-ballot-smart-contract/
https://medium.com/coinmonks/voting-on-a-blockchain-solidity-contract-codes-explained-c677996d94f2
https://stackoverflow.com/questions/68691636/ethereum-lottery-smart-contract-with-the-following-conditions


