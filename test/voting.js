// const { assert } = require("console");


const voting = artifacts.require("voting");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("voting", function (accounts) {
  
  it("voting should assert true for successful deployment", async () => {
    await voting.deployed();
    return assert.isTrue(true);
  });

  it("voting should have an initial total votes of 0", async  () => {
    // get the contract that has been deployed
    const votingInstance = await voting.deployed(); 

    // verify it has an initial value of 0

    const _totalVotes = await votingInstance.totalVotes.call();
    assert.equal(_totalVotes, 0, `Initial state of votes should be zero`)
  });

  it("voting should have no voters registered initially", async  () => {
    // get the contract that has been deployed
    const votingInstance = await voting.deployed(); 

    // verify it has an initial value of 0

    const _totalRegisteredVoters = await votingInstance.totalVotersRegistered.call() 

    assert.equal(_totalRegisteredVoters,0,"total registered voters initially should be zero")
  })

  it("voting should have the first proposal name as mason", async () => {
      // get the contract that has been deployed
      const votingInstance = await voting.deployed(); 

      const _proposalOne = await votingInstance.proposals[0]["name"];
      assert.equal(_proposalOne,"mason","Proposal one should be 'mason'")





  })



  it("voting should only let the chairperson change the state", async function () {
    // get the contract that has been deployed
    const votingInstance = await voting.deployed(); 

    try {
      await votingInstance.startVote({from:accounts[0]}); //for some reason, function with the accounts work
      console.log('voting success')
    } catch(err) {
      console.log('error reported')
     }

    const currentState = await votingInstance.state.call();
    // console.log(currentState)

    assert.equal(currentState,1,"state was not changed")


  })



  // describe("Functionality", () => {
  //     it("should store a new value of 42", async () =>{ 
        
  //       // grab the contract we need
  //       const votingInstance = await voting.deployed();

        


  //     })
    
    
    
  // })


  // it("voting should have no initial registered voters", async function () => {





  
  







});
