import mongoose from "mongoose";

const messageScema = new mongoose.Schema(
  {
    SenderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      requre: true,
    },
    ReceiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      requre: true,
    },
    
    message: {
      type: String,
      requre: true,
    },
    // create and update
  },
  { timestamps: true }
);

const Message = mongoose.model("Messages", messageScema);
export default Message;
