import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/main.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageGetter";
import DropdownMobile from "../components/DropdownMobile";

function Paymenet() {
  const [isDropdownShown, setIsDropdownShow] = useState(false);
  return (
    <>
      <Navbar isClick={() => setIsDropdownShow(true)} />
      <section className="bg-[#A0A3BD33]">
        <section className="flex justify-center items-center w-full font-mulish">
          <div className="flex gap-x-2 md:gap-x-6">
            <div className="flex flex-col gap-y-3 justify-center items-center">
              <div className="bg-success p-1 md:p-3 rounded-full">
                <img src={getImageUrl("check-small", "svg")} alt="icon" />
              </div>
              <p className="text-secondary text-xs md:text-sm">
                Dates And Time
              </p>
            </div>
            <div className="w-[70px] h-0 border border-dashed border-[#A0A3BD] mt-10"></div>
            <div className="flex flex-col gap-y-3 justify-center items-center">
              <div className="bg-primary p-3 w-8 h-8 md:w-[47px] md:h-[47px] flex items-center justify-center rounded-full">
                <p className="text-light">2</p>
              </div>
              <p className="text-secondary text-xs md:text-sm">Seat</p>
            </div>
            <div className="w-[70px] h-0 border border-dashed border-[#A0A3BD] mt-10"></div>
            <div className="flex flex-col gap-y-3 justify-center items-center">
              <div className="bg-[#A0A3BD] p-3 w-8 h-8 md:w-[47px] md:h-[47px] flex items-center justify-center rounded-full">
                <p className="text-light">3</p>
              </div>
              <p className="text-[#A0A3BD] text-xs md:text-sm">Payment</p>
            </div>
          </div>
        </section>
      </section>
      <Footer />
      {isDropdownShown && (
        <DropdownMobile isClick={() => setIsDropdownShow(false)} />
      )}
    </>
  );
}

export default Paymenet;
