import React from "react";
import { MdCopyright } from "react-icons/md";
const Footer = () => {
  return (
    <div className="bg-[#F5F5F5] rounded-[20px] mx-10 my-2">
      <div className=" flex items-center justify-between py-9 px-7 text-[15px]">
        <div className="flex items-center gap-2">
          <MdCopyright />
          <p>Talup 2023. All rights reserved</p>
        </div>
        <div className="flex items-center gap-8">
          <div>Terms & Condtions</div>
          <div>Privecy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
