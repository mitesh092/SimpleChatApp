import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex ">
      {/* male checkbox*/}
      <div className="flex form-control justify-center  items-center  bg-transparent border-0">
        <label className="{lable gap-2 cursor-pointer }">
          <span className="label-text text-lg">Male</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox  ml-2  mt-2 border-orange-400 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange] checked:border-indigo-800"
          />
        </label>
      </div>

      {/* female checkbox */}
      <div className="form-control bg-transparent border-0">
        <label className="{lable gap-2 cursor-pointer}">
          <span className="label-text text-lg">Female</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox ml-2 mt-2 border-orange-400 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange] checked:border-indigo-800"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
