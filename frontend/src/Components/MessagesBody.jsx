import React, { useState, useRef, useEffect } from "react";
import "./MessageBody.css";
import "./Responsive.css";
import "./animation.css";
import EmojiPicker from "emoji-picker-react";
import { MdEmojiEmotions } from "react-icons/md";
import { MdCancel } from "react-icons/md"; // cancel button
import { MdOutlineSend } from "react-icons/md";
import io from "socket.io-client"; 

const MessagesBody = () => {
  // State for message, position, id, username, and message history
  const [msg, setMsg] = useState("");
  const [Ids, setId] = useState(1);
  const [username, setUsername] = useState("You");
  const [messages, setMessages] = useState([]);
  const messageBodyRef = useRef(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);


  // Backend Logic 
  // const socket = io("http://localhost:5000");
  // useEffect(() => {
  //   socket.on('receiveMessage', (message) => {
  //     setMessages((prevMessages) => [
  //       ...prevMessages,
  //       { ...message, type: 'incoming' } // Add type property for incoming messages
  //     ]);
  //   });

  //   return () => {
  //     socket.off('receiveMessage');
  //   };
  // }, []);

  // Set message when typing in input
  const handleInputChange = (e) => {
    setMsg(e.target.value);
  };

  // Set username when typing in input
  // const handleUsernameChange = (e) => {
  //   setUsername(e.target.value);
  // };

  // Send message function
  const sender = () => {
  if (msg.trim().length === 0) return;

  const newMessage = {
    id: Ids,
    text: msg,
    username: username,
    timestamp: new Date().toLocaleTimeString(),
    type: 'outgoing',
  };

  

  setMessages((prevMessages) => [...prevMessages, newMessage]);
  setId((prevId) => prevId + 1);
  setMsg("");

  // Scroll to the bottom
  requestAnimationFrame(() => {
    if (messageBodyRef.current) {
      messageBodyRef.current.scrollTop = messageBodyRef.current.scrollHeight;
    }
  });
};

  // Send message on Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sender();
    }
  };
  // window refresh alert
  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };
    // after reload site show message alert
    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);
  

  //Scroll Efect
  useEffect(() => {
    // Scroll to the bottom on initial render
    if (messageBodyRef.current) {
      messageBodyRef.current.scrollTop = messageBodyRef.current.scrollHeight;
    }

  }, []);
  
  
  
  // emoji handler
  const handleEmojiClick = (emoji) => {
    setMsg(msg + emoji.emoji);
  };


  // emoji picker styling 
  const emojiPickerStyle = {
    height: "18rem",
    position: "absolute",
    bottom: "3rem",
    width: "100%",
    animation: "fadeIn 0.5s ",
  };

  // resize messageBody 
  const handleResizeMessage = () => {
    let messagecontainer = document.getElementsByClassName("msgcontainer")[0];
    if(showEmojiPicker){
      messagecontainer.style.height = "98.50%";
    }else{
      messagecontainer.style.height = "57%";
    }
  }


  // Rendering component MessageBodu
  return (
    <div className="mainbody">
      <div className="messageBody">
        <div className="msgcontainer" ref={messageBodyRef}>
          {/* maping to new message in msgcontainer */}
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

      {/* emoji picker box */}
      {showEmojiPicker && (
        <EmojiPicker searchDisabled lazyLoadEmojis skinTonesDisabled emojiStyle={"facebook"}
          style={emojiPickerStyle}
          onEmojiClick={handleEmojiClick}
          
        />
      )}

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

        {/* Button for Emoji picker  */}
        <button id="emoji" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>

          {/* onclick change icon of emoji picker*/}
          {showEmojiPicker ? <MdCancel onClick={handleRegesizeMessage}  /> : <MdEmojiEmotions onClick={handleResizeMessage} />}
        </button>

          {/* send button */}
        <button id="send" onClick={sender}>
          <MdOutlineSend/>
        </button>
      </div>
    </div>
  );
};

export default MessagesBody;
