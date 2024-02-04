
export default function Message(props) {
    return (
        <>
        <div className={`flex ${props.by} px-4`}>
            <div className={`${props.color} p-3 rounded-lg text-white mr-5 mb-2 max-w-sm`}>
                <p>{props.message}</p>
            </div>  
        </div>
        </>
    )
}