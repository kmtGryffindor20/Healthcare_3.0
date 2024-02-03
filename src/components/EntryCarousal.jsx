import { ChakraProvider } from '@chakra-ui/react'
import bgImage from '../origin.jpg'
export default function EntryCarousal() {
    return (
        <ChakraProvider>
        <div className="flex justify-center items-center h-screen bg-cover text-white" style={{backgroundImage:`url(${bgImage})`}}>
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold w-2/4 text-center">Empowering Wellness, Ensuring Privacy: Blockchain-Powered Health Consultations, </h1>
                <h1 className="text-6xl font-extrabold w-2/4 text-center"> Your <span className="text-blue-600">Health</span>,</h1>
                <h1 className="text-6xl font-extrabold w-2/4 text-center"> Your <span className="text-blue-600">Anonymity</span>.</h1>
            </div>
        </div>
        </ChakraProvider>
    )
}