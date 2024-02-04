import Navbar from "../components/Navbar";
import cardio from "../cardio.png";
import orthology from "../orthology.png";
import derma from "../derma.png";
import fertility from "../fertility.png";
import syringe from "../syringe.png";
import DoctorCard from "../components/DoctorCard";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const data = [
    {name: "Shishir Kushwaha", experience: "10yrs", degree: "MBBS , MD", hospital: "Vedanta Hospital, Sector-34, New Delhi", price: "500" , image:"https://thispersondoesnotexist.com" , department: "Orthology"},
    {name: "Julie Bryant", experience: "5yrs", degree: "MBBS , MD", hospital: "Vedanta Hospital, Sector-34, New Delhi", price: "500" , image:"https://thispersondoesnotexist.com" , department: "Orthology"},
    {name: "Austin Kelly", experience: "7yrs", degree: "MBBS , MD", hospital: "Vedanta Hospital, Sector-34, New Delhi", price: "500" , image:"https://thispersondoesnotexist.com" , department: "Cardiology"},
    {name: "Katherine Bell", experience: "9yrs", degree: "MBBS , MD", hospital: "Vedanta Hospital, Sector-34, New Delhi", price: "500" , image:"https://thispersondoesnotexist.com" , department: "Orthology"},
    {name: "Roberto Soto", experience: "17yrs", degree: "MBBS , MD", hospital: "Vedanta Hospital, Sector-34, New Delhi", price: "500" , image:"https://thispersondoesnotexist.com" , department: "Cardiology"},
    {name: "Melinda Brown", experience: "3yrs", degree: "MBBS , MD", hospital: "Vedanta Hospital, Sector-34, New Delhi", price: "500" , image:"https://thispersondoesnotexist.com" , department: "Fertility"},
    {name: "Shelly West", experience: "2yrs", degree: "MBBS , MD", hospital: "Vedanta Hospital, Sector-34, New Delhi", price: "500" , image:"https://thispersondoesnotexist.com" , department: "Dermatology"},
    {name: "Brad Douglas", experience: "30yrs", degree: "MBBS , MD", hospital: "Vedanta Hospital, Sector-34, New Delhi", price: "500" , image:"https://thispersondoesnotexist.com" , department: "Others"},
]

export default function Doctors() {
    const [searchParams] = useSearchParams();
    const [dept,setDept] = useState(searchParams.get("q"));
    const [doctors,setDoctors] = useState(data.filter((doc) => doc.department === dept));
    
    function changeDept(department){
        setDept(department);
        setDoctors(data.filter((doc) => doc.department === department));
    }

    useEffect(() => {
        Aos.init({duration: 800});
    }, []);
    
    const docs = () => {
        return doctors.map((doc) => {
            return <DoctorCard name={doc.name} years={doc.experience} degree={doc.degree} address={doc.hospital} price={doc.price} image={doc.image} />
        } )
    }

    return(
        <>
        <Navbar/>
        <div className="bg-gradient-to-r from-black to-blue-600 h-screen pt-32 pb-4 px-5">
            <div className="doctors-list h-full bg-white w-full rounded-lg flex">
                <div className="department-section invisible w-0 sm:visible sm:w-1/3 md:w-1/4 flex flex-col items-end pt-5 px-1 gap-2">
                    <h1 className="font-bold mb-5">Departments</h1>
                    <div className="hover:bg-gray-300 w-2/3 text-end py-0.5 px-2 rounded-full transition-all flex justify-evenly items-center" onClick={()=>{changeDept("Orthology")}}><img src={orthology} className="h-4 rounded-lg"></img><p>Orthology</p></div>
                    <div className="hover:bg-gray-300 w-2/3 text-end py-0.5 px-2 rounded-full transition-all flex justify-evenly items-center" onClick={()=>{changeDept("Cardiology")}}><img src={cardio} className="h-4 rounded-lg"></img><p>Cardiology</p></div>
                    <div className="hover:bg-gray-300 w-2/3 text-end py-0.5 px-2 rounded-full transition-all flex justify-evenly items-center" onClick={()=>{changeDept("Fertility")}}><img src={fertility} className="h-4 rounded-lg"></img><p>Fertility IVF</p></div>
                    <div className="hover:bg-gray-300 w-2/3 text-end py-0.5 px-2 rounded-full transition-all flex justify-evenly items-center" onClick={()=>{changeDept("Dermatology")}}><img src={derma} className="h-4 rounded-lg"></img><p>Dermatology</p></div>
                    <div className="hover:bg-gray-300 w-2/3 text-end py-0.5 px-2 rounded-full transition-all flex justify-evenly items-center" onClick={()=>{changeDept("Others")}}><img src={syringe} className="h-4 rounded-lg"></img><p>Other Dept</p></div>

                </div>
                <div className="doctor-section w-full flex flex-col items-center py-5 px-3">
                    {docs()}
                </div>

            </div>
        </div>
        </>
    )
}