import Web3 from "web3";
import ChatScreen from "../components/ChatScreen";
import Navbar from "../components/Navbar";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { healthABI } from "../components/abi.js";
const web3js = new Web3(window.ethereum);

var myContractAddress = "0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8";
var myContract = new web3js.eth.Contract(healthABI, myContractAddress);
export default function Chat() {
  useLockBodyScroll();
  console.log(myContract);
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-black to-blue-600 scroll">
      <Navbar change={false} />
      <ChatScreen />
    </div>
  );
}
