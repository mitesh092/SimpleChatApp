import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../store/useConversation";
const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // on logout clean up conversation
    return () => setSelectedConversation(null)
  },[])
  return (
    <div className="md:min-w[600px] w-100 flex flex-col">
      {!selectedConversation ? (
        <NoChatSelectedcom />
      ) : (
        <>
          {/* header */}
          <div className="bg-slte-500 px-4 py-2 mb-2">
            <span className="label-text">To</span>{" "}
            <span className="text-gray-900 font-bold">{selectedConversation.userName}</span>
          </div>

          {/* messages */}
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelectedcom = () => {
  // const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {"you"} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
