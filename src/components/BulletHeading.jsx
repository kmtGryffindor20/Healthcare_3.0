export default function BulletHeading(props){
    return(
        <>
            <div className="flex px-16 items-center mt-16 mb-8 font-sans">
                <div className="w-[6px] h-10 bg-blue-600 rounded"></div>
                <h4 className="text-3xl font-bold text-black px-2">{props.title}</h4>
            </div>
        </>
    );
}