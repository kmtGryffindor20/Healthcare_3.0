import Message from "./Message"
export default function ChatScreen() {
    return (
        <div className="bg-gradient-to-r from-black to-blue-600 h-full py-28 items-center">
            <h1 className="text-white text-6xl font-extrabold text-center mt-10"
            >Ask your Doctor!</h1>
            <div className="flex justify-center items-center">
                <div className="w-3/4 h-screen mt-10">
                    <div className="flex justify-center items-center">
                        <div className="w-1/2 h-1/2 bg-gray-50 rounded-2xl shadow-lg">
                            <h1 className="text-black text-4xl font-bold text-center py-10">Chat with your Doctor</h1>
                            <div className="flex justify-center flex-col h-96">
                                <Message message="Hello Doctor" color="blue-600" />
                            </div>
                            <input type="text" placeholder="Enter your message" className="w-4/5 h-14 rounded-2xl border-2 border-blue-600 focus:outline-none px-5" />
                            <button className="w-1/5 h-14 bg-blue-600 text-white rounded-2xl">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}