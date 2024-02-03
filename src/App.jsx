import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import EntryCarousal from './components/EntryCarousal'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
    </>
  )
}

export default App
