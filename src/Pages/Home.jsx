import Card from "../components/Card";
import EntryCarousal from "../components/EntryCarousal";

export default function Home() {
    return (
        <div className="text-black flex flex-col justify-center">
            <EntryCarousal />
            <div className="w-full flex justify-center mt-32">
                <Card name={"Orthology"}/>
                <Card name={"Cardiology"}/>
                <Card name={"Dermatology"}/>
                <Card name={"Fertility"}/>
            </div>
        </div>
    )
}