import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import EntryCarousal from "./components/EntryCarousal";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import Footer from "./components/Footer";
import AnimatedCursor from "./components/AnimatedCursor";

function App() {
  const [haveMetamask, setHaveMetamask] = useState(true);

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        setHaveMetamask(false);
      } else {
        setHaveMetamask(true);
      }
    };
    checkMetamaskAvailability();
  }, []);
  return (
    <>
      <ChakraProvider>
        <AnimatedCursor />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/chat" element={<Chat />} exact />
          </Routes>
          <Footer />
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
