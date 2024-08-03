import Conversation from "../models/Conversation.model.js";
import Message from "../models/Messagees.model.js";
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: ReceiverId } = req.params;
    const SenderId = req.user._id;

    let conversation = await Conversation.findOne({
      participates: {
        $all: [SenderId, ReceiverId],
      },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participates: [SenderId, ReceiverId],
      });
    }

    const NewMessage = new Message({
      SenderId,
      ReceiverId,
      message,
    });

    if (NewMessage) {
      conversation.messages.push(NewMessage._id);
    }

    // Socket IO Fucntionality

    // await conversation.save();
    // await NewMessage.save();

    await Promise.all([conversation.save(), NewMessage.save()]);

    res.status(201).json({ message: "Message Sended" });
  } catch (error) {
    console.log("ERROR in SendMessage.controller err.msg : ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const GetMessage = async (req, res) => {
  try {
    const {id:userToChatId} = req.params;
    const SenderId  = req.user._id;
    
    const conversation = await  Conversation.findOne({
        participates : {$all : [SenderId, userToChatId]},
    }).populate("messages");
    
    
    if(!Conversation) return res.status(200).json([]);
    
    const message = conversation.messages;
    res.status(200).json(conversation.messages);



  } catch (error) {
    console.log("ERROR in GetMessage.controller err.msg : ", error.message);
    res.status(500).json({ error: "Internal server  error" });

  }
};
