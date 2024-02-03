import { useState } from 'react'
import reactLogo from './assets/react.svg'
import EntryCarousal from './components/EntryCarousal'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import Chat from './Pages/Chat'

function App() {

  return (
    <>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/chat" element={<Chat/>}/>
        </Routes>
      </Router>
    </ChakraProvider>
    </>
  )
}

export default App
