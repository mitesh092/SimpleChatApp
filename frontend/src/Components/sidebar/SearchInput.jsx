import React, { useState } from "react";
import { RiUserSearchFill } from "react-icons/ri";
import useConversation from "../../store/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";
const SearchInput = () => {
  const [search, SetSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handlesubmit = (e) => {
    e.preventDefault();
    if(!search) return ;
    if(search.length < 3 ) toast.error("search term must be 3 charecter")
    

      const conversation = conversations.find((c) =>
        c.userName.toLowerCase() === search.toLowerCase()
      );

    if(conversation){
      setSelectedConversation(conversation)
    }else{
      toast.error("no search  userName Found");
    }


    SetSearch("");


  };
  return (
    <form onSubmit={handlesubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="search Your-Friends userName"
        className="input input-border rounded-full text-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300 lg:max-w-xl "
        value={search}
        onChange={(e) => SetSearch(e.target.value)}
      />

      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <RiUserSearchFill className="w-5 h-5 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
