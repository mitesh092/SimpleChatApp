import React from 'react'
import { RiUserSearchFill } from "react-icons/ri";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <input type="text" placeholder='search Your Friends userName'  className='input input-border rounded-full text-white'/>
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <RiUserSearchFill className='w-6 h-6 outline-none'/>
      </button>
    </form>
  )
}

export default SearchInput
