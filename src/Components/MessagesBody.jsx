import React, { useState, useRef, useEffect } from "react";
import "./MessageBody.css";
import "./Responsive.css";
import "./animation.css";

const MessagesBody = () => {
  // State for message, position, id, username, and message history
  const [msg, setMsg] = useState("");
  const [pos, setPos] = useState(7);
  const [Ids, setId] = useState(1);
  const [username, setUsername] = useState("You");
  const [messages, setMessages] = useState([]);
  const messageBodyRef = useRef(null);

  // Set message when typing in input
  const handleInputChange = (e) => {
    setMsg(e.target.value);
  };

  // Set username when typing in input
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Send message function
  const sender = () => {
    if (msg.trim().length === 0) return;

    if (msg.length >= 29) {
      messageViewFixer();
    }
    // add more css in date function
    const newMessage = {
      id: Ids,
      text: msg,
      username: username,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, newMessage]);
    setId(Ids + 1);
    setMsg("");

    // Scroll to the bottom
    setTimeout(() => {
      if (messageBodyRef.current) {
        messageBodyRef.current.scrollTop = messageBodyRef.current.scrollHeight;
      }
    }, 100);
  };

  // Send message on Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sender();
    }
  };

  useEffect(() => {
    // Scroll to the bottom on initial render
    if (messageBodyRef.current) {
      messageBodyRef.current.scrollTop = messageBodyRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="mainbody">
      <div className="messageBody">
        <div className="msgcontainer" ref={messageBodyRef}>
          {messages.map((message) => (
            <div key={message.id} className="Sending">
              <p id="name">{message.username}</p>
              <p id="msgs" className="paragraph">
                {message.text}
              </p>
              <span className="timestamp">{message.timestamp}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="messageBox">
        {/* some time i remove username becouse i want to change user name when user click on setting button and open user panel */}

        {/* <input
          type="text"
          placeholder='Username'
          value={username}
          onChange={handleUsernameChange}
          className='usernameInput'
        /> */}
        <input
          id="userInput"
          type="text"
          value={msg}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter Your Message..."
        />
        <button id="send" onClick={sender}>
          Send
        </button>
      </div>
    </div>
  );
};

export default MessagesBody;
