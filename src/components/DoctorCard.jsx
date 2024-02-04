import { useEffect } from "react";

export default function DoctorCard(props) {

    return (
        <div className="w-full h-[120px] shadow-md rounded-lg md:w-5/6 hover:shadow-lg transition-all flex m-5">
            <div className="h-full w-1/4 image-section py-2 mx-10">
                <img src={props.image} className="h-full rounded-full"/> 
            </div>
            <div className="description-section h-full w-1/2 flex flex-col">
                <h2 className="font-semibold">{props.name}</h2>
                <p className="text-gray-500 text-sm"><span className="font-normal text-base">Experience : </span>{props.years}</p>
                <p className="text-gray-500">{props.degree}</p>
                <h3 className="font-normal">{props.address}</h3>
            </div>

            <div className="w-1/4 flex flex-col items-center px-1 justify-center gap-[4px]">
                <h2 className="text-gray-500">Consultation</h2>
                <p>{props.price}</p>
                <button className="btn h-1/3 w-full px-1 flex justify-center items-center">Book</button>
            </div>

        </div>
    );
}