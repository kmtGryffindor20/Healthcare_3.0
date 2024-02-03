import Card from "../components/Card";
import EntryCarousal from "../components/EntryCarousal";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
    return (
        <div className="text-black flex flex-col justify-center">
            <EntryCarousal />
            <WhyChoose/>
            <div className="w-full flex justify-center">
                <Card name={"Orthology"}/>
                <Card name={"Cardiology"}/>
                <Card name={"Dermatology"}/>
                <Card name={"Fertility"}/>

            </div>
        </div>
    )
}