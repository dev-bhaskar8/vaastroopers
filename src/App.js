import Main from "./components/Main";
import Nav from "./components/Nav";
import About from "./components/About";
import React from "react"
function App() {
  const [address,setAddress] = React.useState("")

  function handleConnect(){
    if(window.ethereum && window.ethereum.isMetaMask){
    window.ethereum.request({method:'eth_requestAccounts'})
    .then(result => setAddress(result[0]))
    }
    else{
      alert("Metamask not installed.")
    }
  }
  function handleDisconnect(){
    setAddress("")    
  }
  window.ethereum.on('accountsChanged', handleConnect);

  return (
   <div>
     <Nav handleConnect={handleConnect} address={address} handleDisconnect={handleDisconnect}/>
     <Main address={address} />
     <About/>
   </div>
  );
}

export default App;

// window.ethereum.request({
//   method: "wallet_requestPermissions",
//   params: [{
//       eth_accounts: {}
//   }]
// }).then(() => window.ethereum.request({
//   method: 'eth_requestAccounts'
// })).then(() => setAddress(""))


// window.ethereum.request({method:'eth_requestAccounts'})
// .then(result => setAddress(result[0]))

