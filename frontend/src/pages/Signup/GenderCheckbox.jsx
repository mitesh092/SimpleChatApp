import React from "react";

const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className="flex ">
      {/* male checkbox*/}
      <div className="flex form-control justify-center  items-center  bg-transparent border-0">
        <label className={`lable gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
          <span className="label-text text-lg">Male</span>
          <input
            type="checkbox"
            className="checkbox ml-2 mt-2 border-orange-400 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange] checked:border-indigo-800"
            checked ={selectedGender === "male"}
            onChange={() => {onCheckboxChange("male")}}
          />
        </label>
      </div>

      {/* female checkbox */}
      <div className="form-control bg-transparent border-0">
      <label className={`lable gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
          <span className="label-text text-lg">Female</span>
          <input
            type="checkbox"
            className="checkbox ml-2 mt-2 border-orange-400 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange] checked:border-indigo-800"
            checked ={selectedGender === "female"}
            onChange={() => {onCheckboxChange("female")}}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
