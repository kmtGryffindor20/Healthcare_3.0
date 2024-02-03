
export default function Navbar() {
    return (
        <>
        <div className="sticky top-0 z-10 font-sans opacity-90">
            <nav className="bg-white shadow-lg py-8 flex justify-between px-16 items-center">
                <h3 className="text-blue-600 font-extrabold text-3xl">
                    HEALTH<span className="text-black font-bold">CARE</span> <span className="text-black font-bold text-5xl">3.0</span>
                </h3>
                <a href="" className="btn">
                    Connect Wallet
                </a>
            </nav>
        </div>
        </>
    )
}