
export default function Message(props) {
    return (
        <>
        <div className="flex justify-end">
            <div className={`bg-${props.color} p-3 rounded-lg text-white mr-5`}>
                <p>{props.message}</p>
            </div>  
        </div>
        </>
    )
}