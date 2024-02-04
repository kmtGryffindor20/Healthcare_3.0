import { useState } from 'react'
import reactLogo from './assets/react.svg'
import EntryCarousal from './components/EntryCarousal'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import Chat from './Pages/Chat'
import Footer from './components/Footer'
import Doctors from './Pages/Doctors'

function App() {

  return (
    <>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/chat" element={<Chat/>} exact/>
          <Route path="/department" element={<Doctors/>} exact/>
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
    </>
  )
}

export default App
