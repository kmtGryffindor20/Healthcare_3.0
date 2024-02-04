import Message from "./Message";
import Web3 from "web3";
import { useState, useEffect } from "react";
import { healthABI } from "../components/abi.js";
const web3js = new Web3(window.ethereum);
var myContractAddress = "0xD7ACd2a9FD159E69Bb102A1ca21C9a3e3A5F771B";
var myContract = new web3js.eth.Contract(healthABI, myContractAddress);
export default function ChatScreen() {
  const [array, setArray] = useState([
    {
      message: "Hello Doctor",
      color: "bg-blue-600",
      by: "justify-start",
    },
    {
      message: "How are you feeling?",
      color: "bg-green-600",
      by: "justify-end",
    },
    {
      message: "I am feeling good",
      color: "bg-blue-600",
      by: "justify-start",
    },
    {
      message:
        "So why the f*ck are you wasting my time you f*cking stupif donkey!",
      color: "bg-green-600",
      by: "justify-end",
    },
  ]);

  const messages = () => {
    return array.map((item) => {
      return <Message message={item.message} color={item.color} by={item.by} />;
    });
  };

  const [message, setMessage] = useState("");

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  function sendMessage(e) {
    e.preventDefault();
    if (message === "") return;
    let newArray = [...array];
    newArray.push({
      message: message,
      color: "bg-blue-600",
      by: "justify-start",
    });
    setArray(newArray);
    console.log(myContract.methods);
    console.log(message);
    myContract.methods
      .sendMessage("0xfC986a6A04D2Bd4bF87123e5d1F3bc91B84e5515", message)
      .send({
        from: "0x90804f282DE56a1e5Fe5E722801Ad12b0fC9158B",
      });
    setMessage("");
  }

  return (
    <div className="items-center py-32">
      <h1 className="text-white text-6xl font-extrabold text-center">
        Chat with your Doctor!
      </h1>
      <div className="flex justify-center items-center">
        <div className="w-3/4 mt-10">
          <div className="flex justify-center items-center">
            <div className="w-full lg:w-1/2 h-1/2 bg-gray-300 rounded-2xl shadow-lg pt-8">
              <div className="flex justify-start flex-col h-96 overflow-y-scroll ">
                {messages()}
              </div>
              <input
                onChange={handleMessageChange}
                value={message}
                type="text"
                placeholder="Enter your message"
                className="w-4/5 h-14 rounded-2xl border-2 border-blue-600 focus:outline-none px-5"
              />
              <button
                onClick={sendMessage}
                className="w-1/5 h-14 bg-blue-600 text-white rounded-2xl"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
