var Voting = artifacts.require('voting');

module.exports = function(deployer) {
    deployer.deploy(Voting,["purchase","rent"]);
};