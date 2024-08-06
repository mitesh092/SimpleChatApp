import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../Skeleton/MessageSkeleton";
import useConversation from "../../store/useConversation";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const { selectedConversation } = useConversation();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading ? (
        // Render skeletons while loading
        [...Array(3)].map((_, idx) => (
          <MessageSkeleton key={`skeleton-${idx}`} />
        ))
      ) : messages.length === 0 ? (
        // Render empty state message when there are no messages
        <p className="text-lime-300 text-center text-lg">
          {`Send a message to ${selectedConversation.userName} 👋`}
        </p>
      ) : (
        // Render messages if loaded and there are messages
        messages.map((message) => (
          <div key={message?._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
          // <Message key={message?._id} message={message} />
        ))
      )}
    </div>
  );
};

export default Messages;
