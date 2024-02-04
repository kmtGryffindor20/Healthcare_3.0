
export default function Conversation(props) {
    return (
        <div className="border-2 px-2 bg-slate-50">
                <h3 className="font-bold">{props.person}</h3>
                <small className="font-extralight max-w-16 overflow-hidden">{props.message.length > 32 ? props.message.substring(0, 32) + '...' : props.message}</small>
        </div>
    );
}