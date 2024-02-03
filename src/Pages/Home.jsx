import Card from "../components/Card";
import EntryCarousal from "../components/EntryCarousal";
import WhyChoose from "../components/WhyChoose";
import orthology from "../orthology.png";
import cardio from "../cardio.png";
import derma from "../derma.png";
import fertility from "../fertility.png";
import syringe from "../syringe.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
    useEffect(() => {
        Aos.init({duration: 800});
    }, []);
    return (
        <>
        <Navbar change={true} />
        <div className="text-black flex flex-col justify-center">
            <EntryCarousal />
        
            <div data-aos="fade-up" data-aos-once="true">
                <WhyChoose/>
            </div>

            <div className="w-full flex justify-center mt-32" data-aos="fade-up" data-aos-once="true">
                <Card name={"Orthology"} image={orthology}/>
                <Card name={"Cardiology"} image={cardio}/>
                <Card name={"Dermatology"} image={derma}/>
                <Card name={"Fertility"} image={fertility}/>
                <Card name={"Other"} image={syringe}/>
            </div>
        </div>
        </>
    )
}