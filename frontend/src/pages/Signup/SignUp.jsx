import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-click-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-amber-200 text-3xl font-semibold text-center text-center">
          <span className="text-amber-300"> SimpleChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">UserName</span>
            </label>
            <input
              type="text"
              placeholder="Joe123"
              className="w-full input input-bordered  h-10 text-lime-50"
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Joe@example.com"
              className="w-full input input-bordered h-10 text-lime-50"
            />

            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
