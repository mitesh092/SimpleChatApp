import React, { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";
import { IoIosSend } from "react-icons/io";

const MessageInput = () => {
  const [message, setmessage] = useState("");

  const { SendMessage, loading } = useSendMessage();
  const hanldesubmit = async (e) => {
    e.preventDefault();
    if (!message) return;

    await SendMessage(message);
    setmessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={hanldesubmit}>
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Sent a message"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center text-white pe-3"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <IoIosSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
