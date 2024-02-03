import vimage from "../hospital.png"
export default function Card(props) {
    return (
        <div className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] shadow-lg border-2 rounded-2xl mx-3 mb-5 hover:-translate-y-1 hover:shadow-2xl transition-all flex flex-col items-center">
            <img className="rounded-full h-[50px] w-[50px] sm:h-[100px] sm:w-[100px] mt-3" src={vimage} />
            <div className="text-section flex justify-center items-center h-full">
                <h1 className="font-semibold text-sm sm:text-lg">{props.name}</h1>
            </div>
        </div>
    )
}