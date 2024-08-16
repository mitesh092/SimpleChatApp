import React from 'react'

// import sidebar
import SideBar from '../../Components/sidebar/SideBar';
import MessageContainer from '../../Components/messages/MessageContainer';

const Home = () => {
  return (
    //  i Will add responsive tailwind css in future
    <div spe className='flex sm:h-[550px] sm:w-[900px] md:h-[-500px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'> 
      <SideBar/>
      <MessageContainer/>
    </div>
  )
}

export default Home;
