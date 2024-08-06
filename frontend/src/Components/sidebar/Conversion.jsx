import React from "react";
import useConversation from "../../store/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversion = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => {
          setSelectedConversation(conversation);
        }}
      >
        <div className={`avatar ${isOnline ? "online": "" }`}>
          <div className="w-16 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="felx gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.userName}</p>
            <span className="text-lg text-white">{emoji}</span>
          </div>
        </div>
      </div>

      {/* devider */}
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversion;
