import ChatScreen from "../components/ChatScreen"
import Navbar from "../components/Navbar"
import { useLockBodyScroll } from "@uidotdev/usehooks";
export default function Chat() {
    useLockBodyScroll();
    return (
        <div className="h-screen w-screen bg-gradient-to-r from-black to-blue-600 scroll">
        <Navbar change={false}/>
        <ChatScreen />
        </div>
    )
}