import React from "react";
import img from "../../Assets/image copy 4.png";
import img2 from "../../Assets/image copy 3.png";
import Questions from "./Questions";

const Bottom = () => {
  return (
    <div className="flex items-center justify-center  pb-10 ">
      <div className="bg-[#E8EEE7] rounded-[50px] flex items-center justify-between w-full p-[20px]">
        <div className="flex flex-col gap-[50px]">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-start p-[100px]">
              <img src={img} alt="img" className="w-[215px]" />
              <div className="text-[60px] flex items-center">Ask Questions</div>
            </div>
          </div>

          <div className="">
            <img src={img2} alt="ok" className="w-[419px]" />
          </div>
        </div>
        <div>
          <div>
            <div className="p-[100px]">
              <Questions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
