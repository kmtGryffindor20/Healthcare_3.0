import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import EntryCarousal from './components/EntryCarousal'
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <>
    <ChakraProvider>
      <Navbar />
      <EntryCarousal />
    </ChakraProvider>
    </>
  )
}

export default App
