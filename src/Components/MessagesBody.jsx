import React, { useState } from 'react'
import "./MessageBody.css"
// make scrollable to messageContainer ->  FIxed
// last message add in end of bottom ->  Fixed
// I don't even  Know how it had fixed and Then  i suddenly realized problem once done also work done ! 


const MessagesBody = () => {
  // Making state  for message saving and postion of message with uniuqe id 
  const[msg, setMsg] = useState("");
  const[pos, setpos] = useState(7);
  const[Ids, setId] = useState(1);

  // set onclick event to send button
  const setsendMessage = () => {
    let val = document.getElementById("userInput");
    setMsg(val.value)
  }

  const sender = () => {
    // if msg is empty we dont have to send 
    // get messagebody  
    if(msg.trim().length ==  0) return;

    
    let messageBody  = document.getElementsByClassName("msgcontainer");

    // creating new message div 
    let newmsg  = document.createElement("div");

    // setting value & styling to new div 
    newmsg.id  = `${Ids}`; // with new id
    newmsg.innerHTML = `<p id='name'>You</p>
            <p id='msgs' className='paragraph'>${msg}</p>`

    newmsg.className = "Sending hide";
    
    // make every message postion with 
    if(pos != 7){
      setpos(pos+4);
      newmsg.style.top = `${pos}rem`;
    }
    
    messageBody[0].appendChild(newmsg);
    console.log(messageBody[0])

    // seting text inside paragraph 
    
    let rmclass = document.getElementsByClassName("Sending");

    // remove hide class from messages
    rmclass[0].classList.remove("hide");
    newmsg.classList.remove("hide")
    setId(Ids+1);
    

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
