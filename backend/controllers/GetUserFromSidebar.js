import User from "../models/Users.model.js"
export const GetUserFromSidebar = async (req, res) => {
    try {
        const loggedInuserId =  req.user._id;
        
        const FilterUsers  = await User.find({_id : {$ne : loggedInuserId}}).select("-password").select("-email");

        res.status(200).json(FilterUsers);
    } catch (error) {
        console.log("Error  In controller -> GetUserFromSidebar -> err.msg : ", error.message)
        res.status(400).json("Internal Server Error")
    }
}