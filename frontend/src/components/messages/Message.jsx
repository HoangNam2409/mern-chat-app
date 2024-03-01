import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation.js";
import { extractTime } from "../../utils/extractTime.js";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe
        ? authUser.profilePic
        : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? "bg-blue-500" : "";

    const shakeClass = message.shouldShake ? 'shake' : ''

    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        src={profilePic}
                        alt="Tailwind CSS chat bubble component"
                    />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass } pb-2`}>
                {message.message}
            </div>
            <div className="chat-footer text-white opacity-50 flex gap-1 items-center">
                {formattedTime}
            </div>
        </div>
    );
};

export default Message;

// STATER CODE SNIPPET
// const Message = () => {
//   return (
//     <div className="chat chat-end">
//         <div className="chat-image avatar">
//             <div className="w-10 rounded-full">
//                 <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind CSS chat bubble component" />
//             </div>
//         </div>
//         <div className={`chat-bubble text-white bg-blue-500`}>Hi! What is up?</div>
//         <div className="chat-footer text-white opacity-50 flex gap-1 items-center">12:42</div>
//     </div>
//   )
// }

// export default Message
