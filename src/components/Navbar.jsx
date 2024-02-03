import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
export default function Navbar() {
    const [navColor, setNavColor] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setNavColor(true)
            }else{
                setNavColor(false)
            }
        })
    },[])
    return (
        <ChakraProvider>
        <div className={`fixed w-screen top-0 z-10 font-sans ${navColor?'bg-white shadow-lg':''}`} style={{transition:'all 0.3s ease-in'}}>
            <nav className="py-8 flex justify-between px-16 items-center">
                <h3 className="text-blue-600 font-extrabold text-3xl">
                    HEALTH<span className={`font-bold ${navColor?'text-black':'text-white'}`}>CARE</span> <span className={`font-bold text-5xl ${navColor?'text-black':'text-white'}`}>3.0</span>
                </h3>
                <a href="" className="btn">
                    Connect Wallet
                </a>
            </nav>
        </div>
        </ChakraProvider>
    )
}