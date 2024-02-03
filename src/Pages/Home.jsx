import Card from "../components/Card";
import EntryCarousal from "../components/EntryCarousal";
import WhyChoose from "../components/WhyChoose";
import orthology from "../orthology.png";
import cardio from "../cardio.png";
import derma from "../derma.png";
import fertility from "../fertility.png";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <>
        <Navbar change={true} />
        <div className="text-black flex flex-col justify-center">
            <EntryCarousal />
            <WhyChoose/>
            <div className="w-full flex justify-center mt-32">
                <Card name={"Orthology"} image={orthology}/>
                <Card name={"Cardiology"} image={cardio}/>
                <Card name={"Dermatology"} image={derma}/>
                <Card name={"Fertility"} image={fertility}/>
            </div>
        </div>
        </>
    )
}