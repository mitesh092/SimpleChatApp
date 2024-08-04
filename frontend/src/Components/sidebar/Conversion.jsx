import React from "react";

const Conversion = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online ">
          <div className="w-16 rounded-full">
            <img 
              src="https://www.koimoi.com/wp-content/new-galleries/2020/08/joe-goldberg-from-netflixs-you-character-analysis-of-penn-badgleys-one-of-the-most-talked-about-role-001.jpg"
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="felx gap-3 justify-between">
            <p className="font-bold text-gray-200">JoeGoldberg</p>
            <span className="text-lg text-white">Hello You 😀</span>
          </div>
        </div>
      </div>

      {/* devider */}
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default Conversion;
