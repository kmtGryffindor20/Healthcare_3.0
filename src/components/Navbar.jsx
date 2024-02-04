import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
export default function Navbar(props) {
  const [accountAddress, setAccountAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const { ethereum } = window;
  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccountAddress(accounts[0]);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };
  const [navColor, setNavColor] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    });
  }, []);
  return (
    <ChakraProvider>
      <div
        className={`cursor-none fixed w-screen top-0 z-10 font-sans ${
          navColor & props.change
            ? "bg-gradient-to-r from-black to-blue-900"
            : ""
        } ${!props.change & "bg-gradient-to-r from-black to-blue-600"} `}
      >
        <nav className="py-8 flex justify-between px-16 items-center">
          <h3 className="text-blue-600 font-extrabold text-3xl">
            HEALTH<span className={`font-bold text-white`}>CARE</span>{" "}
            <span
              className={`font-bold text-5xl ${
                navColor ? "text-white" : "text-white"
              }`}
            >
              3.0
            </span>
          </h3>
          <button className="btn" onClick={connectWallet}>
            Connect Wallet
          </button>
        </nav>
      </div>
    </ChakraProvider>
  );
}

