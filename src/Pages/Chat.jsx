import ChatScreen from "../components/ChatScreen"
import Navbar from "../components/Navbar"

export default function Chat() {
    return (
        <>
        <Navbar change={false}/>
        <ChatScreen/>
        </>
    )
}