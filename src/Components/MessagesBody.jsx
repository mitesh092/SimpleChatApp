import React, { useState } from 'react'
import "./MessageBody.css"


const MessagesBody = () => {
  // Making state 
  const[msg, setMsg] = useState("");
  const [pos, setpos] = useState(7);

  // set onclick event event pn send button
  const setsendMessage = () => {
    let val = document.getElementById("userInput");
    setMsg(val.value)
  }

  const sender = () => {
    // get messagebody  
    let messageBody  = document.getElementsByClassName("msgcontainer");
    let newmsg  = document.createElement("div");
    newmsg.innerHTML = `<p id='name'>You</p>
            <p id='msgs' >${msg}</p>`
    newmsg.className = "Sending hide";
    
    setpos(pos+6);
    newmsg.style.bottom = `${pos}rem`;
    messageBody[0].appendChild(newmsg);
    
    // seting text inside paragraph 
    let msgs = document.getElementById("msgs"); 
    msgs.innerText = msg;
    let rmclass = document.getElementsByClassName("Sending");

    // remove hide messages
    rmclass[0].classList.remove("hide");
    newmsg.classList.remove("hide")
  }

  return (
    <div className='mainbody'>
        <div className='messageBody'>
          <div className='msgcontainer'>

          </div>
        </div>
        <div className="messageBox">
          <input id="userInput" type="text" onChange={setsendMessage} placeholder='Enter Your Message...' />
          <button id='send' value={msg} onClick={sender}>Send</button>
        </div>
    </div>
  )
}

export default MessagesBody
