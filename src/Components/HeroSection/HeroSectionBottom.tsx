import React from "react";
import hero from "../../Assets/image.png";
import icon from "../../Assets/image copy.png";
import icon2 from "../../Assets/image copy 2.png";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./Bulet.css";
import "swiper/css/pagination";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Data = [
  "Enhance fortune 50 company's insights teams research capabilities",
  "Enhance fortune 50 company's insights teams research capabilities",
  "Enhance fortune 50 company's insights teams research capabilities",
];
interface HeroSectionBottomProps {
  data: string;
}

const HeroSectionBottom: React.FC<HeroSectionBottomProps> = ({ data }) => {
  return (
    <div className="flex items-center justify-around p-[10px] pb-[200px]">
      <div className="flex  justify-around items-center 1 ">
        <div className=" max-w-[600px] flex items-center 2 ">
          <div className="max-w-[700px] relative 3">
            <div className="max-w-[500px]">
              <img src={hero} alt="" className=" rounded-[50px]" />
            </div>
            <div className="absolute rounded-[30px] bg-white px-4 py-2 top-[20%] left-[-20%] shadow-lg">
              <div className="relative">
                <img src={icon} alt="" className="w-[80px]" />
                <p className="ml-[30px] mt-[-50px] text-[64px]">40%</p>
              </div>
              <p className="max-w-[200px] text-[#828282] p-4 leading-[23px]">
                Achieved reduction in project execution time by optimising team
                availability
              </p>
            </div>
            <div className="absolute top-[80%] left-[-30px]">
              <div className="flex items-center gap-2 bg-white  rounded-[50px] shadow-lg  px-4 py-2 p-2">
                <div className="bg-[#F3F3F3] p-1 rounded-full">
                  <img src={icon2} alt="" className="w-[29px]" />
                </div>
                <div>
                  <p className="font-bold text-[20px]">10 DAYS</p>
                  <p className="text-[#828282] text-[15px] ">Staff Deploymet</p>
                </div>
              </div>
            </div>
            <div
              className=" rounded-[20px] text-white absolute 
                  bg-[#012E18] max-w-[400px] shadow-lg left-[60%]
                  top-[70%] "
            >
              <div className="flex items-end p-3">
                <div className="text-[50px] gap-1 flex items-baseline ">
                  $0.5 <p className="text-[10px]">MILLION</p>
                </div>
              </div>
              <div className="p-6 min-w-[250px] font-[200]">
                Reduced client expenses by saving on hiring and employee costs.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[600px] flex flex-col gap-[50px]">
        <div>
          <Swiper
            className="max-w-[300px] "
            modules={[Pagination, Autoplay, Navigation]}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            pagination={{ clickable: true }}
            spaceBetween={5}
            style={{
              paddingBottom: "70px",
            }}
          >
            {Data.map((dataItem, index) => (
              <SwiperSlide key={index} className="w-[500px] flex items-start ">
                <div className="text-[40px] leading-[48px] max-w-[600px]">
                  {dataItem}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          {" "}
          <Link to={"/pages/Register/Register"}>
            <button className="w-[150px] px-3 py-4 rounded-[50px] border-2 bg-black hover:bg-[#4E4E4E] transition duration-100 text-white flex items-center justify-center gap-1 ">
              Explore <FaArrowRight className="text-white" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionBottom;
