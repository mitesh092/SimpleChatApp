import React from "react";
import Conversation from "./Conversion";
import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();

  return (
    <div className="py-2 flex flex-col owerflow-scroll">
      {conversations.map((conversation, Idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx = {Idx === conversations.length -1}
        />
      ))}
      
      {loading ? (<span className="loading loading-spinner"></span>) : null}
    </div>
  );
};

export default Conversations;
