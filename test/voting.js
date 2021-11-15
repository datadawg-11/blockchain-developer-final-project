const voting = artifacts.require("voting");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("voting", function (accounts) {
  it("voting should assert true for successful deployment", async function () {
    await voting.deployed();
    return assert.isTrue(true);
  });

  it("voting should have an initial total votes of 0", async function () {
    // get the contract that has been deployed
    const votingInstance = await voting.deployed(); 

    // verify it has an initial value of 0

    const _totalVotes = await votingInstance.totalVotes.call();
    assert.equal(_totalVotes, 0, `Initial state of votes should be zero`)
  });

  it("voting should only let the chairperson change the state", async function () {
    // get the contract that has been deployed
    const votingInstance = await voting.deployed(); 

    try {
      await 
    } catch(err) {

    }

    




  })



  describe("Functionality", () => {
      it("should store a new value of 42", async () =>{ 
        
        // grab the contract we need
        const votingInstance = await voting.deployed();

        


      })
    
    
    
  })


  // it("voting should have no initial registered voters", async function () => {





  
  







});
