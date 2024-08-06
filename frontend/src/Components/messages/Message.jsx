import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";
import { extractTime } from "../../utils/extractTime";
const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.SenderId === authUser._id;

  const chatName = fromMe ? "chat-end" : "chat-start";

  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  const bgMessage = fromMe ? "bg-bule-500" : "bh-gray-500";

  const formatTime = extractTime(message.updatedAt) 

  return (
    <div className={`chat ${chatName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={`${profilePic}`} alt="user avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bgMessage} pb-2`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1  text-white tems-center">
        {formatTime}
      </div>
    </div>
  );
};

export default Message;
