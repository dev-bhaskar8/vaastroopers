import Main from "./components/Main";
import Nav from "./components/Nav";
import About from "./components/About";
import React from "react"
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Footer from "./components/Footer";


toast.configure()
function App() {
  const [address,setAddress] = React.useState("")

  function handleConnect(){
    if(window.ethereum && window.ethereum.isMetaMask){
    window.ethereum.request({method:'eth_requestAccounts'})
    .then(result => setAddress(()=>result[0]))
    }
    else{
      toast.error("Metamask not installed.",{position:toast.POSITION.BOTTOM_RIGHT})
    }

  }
  function handleDisconnect(){
    setAddress("")    
  }
  window.ethereum.on('accountsChanged', handleConnect);
	const handleSubmit = (e) => {
		e.preventDefault();

		const objt = { address };

		axios
			.post(
				process.env.REACT_APP_SHEETAPI,
				objt
			)
			.then((response) => {
				if(response.status === 200 && address!==""){
          toast("Address submitted successfully.",{position:toast.POSITION.BOTTOM_RIGHT})
         }
			});
	};

  return (
   <div>
     <Nav handleConnect={handleConnect} address={address} handleDisconnect={handleDisconnect} />
     <Main address={address} setAddress={setAddress} handleSubmit={handleSubmit}/>
     <About/>
     <Footer/>
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

