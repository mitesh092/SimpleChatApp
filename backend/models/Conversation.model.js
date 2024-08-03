import mongoose, { Types } from "mongoose";
const conversationscama = new mongoose.Schema({
    participates : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Users"
        }
    ],
    messages: [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Messages",
            default : [] // start with empty conversation
        }
    ]
}, {timestamps : true}); 

const Conversation  = mongoose.model("conversation",conversationscama);

export default Conversation;