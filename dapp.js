console.log("hello world")

window.addEventListener('load', function() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('Metamask Detected')
        let mmDetected = document.getElementById('mm-detected')
        mmDetected.innerHTML = "Metamask detected"

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

const ssAddress = 