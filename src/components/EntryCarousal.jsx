import { ChakraProvider } from '@chakra-ui/react'
import bgImage from '../origin.jpg'
import {ReactTyped as Typed} from 'react-typed'


export default function EntryCarousal() {
    return (
        <ChakraProvider>
        <div className="flex justify-center items-center h-screen bg-cover text-white" style={{backgroundImage:`url(${bgImage})`, animation: 'slideRight 10s linear infinite'}}>
            <div className="flex flex-col items-center w-full">
                <h1 className="text-xl font-bold w-2/4 text-center">Empowering Wellness,<br></br> Ensuring Privacy:<br></br> Blockchain-Powered <br></br>Health Consultations, </h1>
                <h1 className="text-4xl font-extrabold w-2/4 text-center"> Your <span className="text-blue-600">Health</span>,</h1>
                <h1 className="text-4xl font-extrabold w-2/4 text-center"> Your <span className="text-blue-600"><Typed strings={["Anonymity"]} startWhenVisible typeSpeed={100} backSpeed={70} loop/></span>.</h1>
            </div>
        </div>
        </ChakraProvider>
    )
}