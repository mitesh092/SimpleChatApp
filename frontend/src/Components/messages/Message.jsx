import React from "react";

const Message = () => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://www.koimoi.com/wp-content/new-galleries/2020/08/joe-goldberg-from-netflixs-you-character-analysis-of-penn-badgleys-one-of-the-most-talked-about-role-001.jpg"
            alt="user avatar"
          />
        </div>
      </div>
      <div className={"chat-bubble text-white bh-bule-500"}>hello you !</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1  text-white tems-center">12:42</div>
    </div>
  );
};

export default Message;
