# Blockchain-developer-bootcamp-final-project
---
## Abstract - Project Explaination KISS
This project is submitted as part of the Blockchain Developer Bootcamp. The core objective is to demonstrate my understanding of the Ethereum Blockchain and interacting with the EVM through the use of smart contracts. 

The idea is a simplified burger shop. For the restaurant owners, to add a new burger to the menu they must go through a multi-signature process. In addition burger shop is part of a franchise and as a resut, every burger sale, leads to a portion of the burger price that is sent to a contract account that is held in escrow for a year to be paid out to the original owner. 

In addition, users will be able to buy their favourite burgers when visiting this shop

## Tech Stack | Libraries | Frameworks
### Smart Contracts
- Solidity and JavaScript in VSCode
- Remix for initial and localised development
- OpenZeppelin for ERC20 Standard

### Infrastructure
- Ganache for localised testing, migration and deployment
- Truffle for testing, migration and deployment
- Web3 and Metamask for intergration
- React
  
## User Workflow
1. Initially the store will have no items for sale. Too add an item for sale, the owner interacts with a contract to add an item to the store. This is a multi-signature transaction and requires the franchisee and the owner to approve the transaction. Once approved the product goes to sale. 
2. The store will have burgers for sale at different price points. The customer will be able to purchase the burger by sending ETH to a smart contract address. 
3. A percentage of the ETH is then sent off to another contract in escrow with a timelock to represent the franchisees ownership cost


## The Bigger Picture
. 

**Other Things to Look into To**
linking to chainlink to convert to USD price

## Resources and credits for inspiration
- https://github.com/thedarkjester/ConsensysAssignment
- https://github.com/Opyet/central-b-bookshop
- https://nakamotoinstitute.org/the-idea-of-smart-contracts/
- https://github.com/PatrickAlphaC/vrf_pizza/blob/main/contracts/VRF_Pizza.sol
