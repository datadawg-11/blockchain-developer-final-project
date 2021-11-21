# Design Patterns Incorporated
## Access Control Design Patterns
Contract uses `Ownable` as a basic form of access control of ownership. The deployer of the smart contract is the `owner` and can do administrative tasks on it. 

## Inheritance and Interfaces
Contract uses inheritance from OpenZeppelin Contracts `Ownable`. As defult, the owner is the smart contract is the account that deployed it. The inherited contract also has functions such as `transferOwnership`(transfer owner account to a new one) and `renounceOwnership`(owner can relinquish administrative priveledge) however these are not incorporated in the model yet. 



# Appendix
- Inter-Contract Execution
- Inheritance and Interfaces
- Oracles
- Access Control Design Patterns
- Upgradeable Contracts