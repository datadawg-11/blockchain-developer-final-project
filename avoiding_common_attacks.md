# Avoiding Security Pitfalls

## SWC-102 Outdated Compiler Version
One of the later solidity compiler versions has been utilised in the smart contract


## SWC-103 Floating Pragma
Initially, the contract used floating pragma during testing. However to prevent the contract being deployed accidentally with an outdated compiler versions that may introduce bugs, the pragma version has been locked. 

## SWC-118 Incorrect Constructor Name
Constructors are special functions called once during contract creation. Before solidity version 0.4.22, the only way to define a constructor was through a function with the same name. If named differently, it could be an inherent security issue. Solidity version 0.4.22 introcduces a new `constructor` keyword which is used to ensure constructors are specifically defined and are only executed once on initially smart contract deployment. 

## SWC-135 Code With No Effects
In solidity it is possible to write code that does not produce intended effects. As a result, this smart contract has been addressed by specifically writing unit tests to correct behaviour of the code. 

# Appendix
Refer to the Smart Contract Weakness Classification (SWC) Registry for an overview of different attack vectors. https://swcregistry.io/
