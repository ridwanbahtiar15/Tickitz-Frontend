import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/main.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageGetter";
import DropdownMobile from "../components/DropdownMobile";
import ItemSeat from "../components/ItemSeat";

import { getScheduleDetail } from "../utils/https/order";
import { useSelector } from "react-redux";
import AuthModal from "../components/AuthModal";

function Order() {
  const [isDropdownShown, setIsDropdownShow] = useState(false);
  const orderRedux = useSelector(state => state.order)
  const scheduleId = orderRedux.scheduleInfo
  const seat = orderRedux.chooseSeat

  const token = useSelector(state => state.user.userInfo.token)
  const [dataSeat, setDataSeat] = useState("")

  useEffect(() => {
    const data = seat.join(',');
    setDataSeat(data)
  }, [seat])
  const [dataSchedule, setDataSchedule] = useState({})
  useEffect(() => {
    getScheduleDetail(scheduleId, token)
    .then((res) => {
      setDataSchedule(res.data.data[0])
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  let seatsArray = "Z1, Z2"
  const soldSeat = dataSchedule.seats
  if (dataSchedule.seats && dataSchedule.seats !== "No data") {
    seatsArray = soldSeat.replace(/\s/g, '').split(',');
  }
  
  return (
    <>
      <Navbar isClick={() => setIsDropdownShow(true)} />
      <section className="bg-[#A0A3BD33] py-10">
        <section className="flex justify-center items-center w-full font-mulish">
          <div className="flex flex-col items-center gap-y-2 sm:flex-row md:gap-x-6">
            <div className="flex flex-col gap-y-3 justify-center items-center">
              <div className="bg-success p-1 md:p-3 rounded-full">
                <img src={getImageUrl("check-small", "svg")} alt="icon" />
              </div>
              <p className="text-secondary text-xs md:text-sm">
                Dates And Time
              </p>
            </div>
            <div className="w-0 h-10 sm:w-[70px] sm:h-0 border border-dashed border-[#A0A3BD] sm:mt-10"></div>
            <div className="flex flex-col gap-y-3 justify-center items-center">
              <div className="bg-primary p-3 w-8 h-8 md:w-[47px] md:h-[47px] flex items-center justify-center rounded-full">
                <p className="text-light">2</p>
              </div>
              <p className="text-secondary text-xs md:text-sm">Seat</p>
            </div>
            <div className="w-0 h-10 sm:w-[70px] sm:h-0 border border-dashed border-[#A0A3BD] sm:mt-10"></div>
            <div className="flex flex-col gap-y-3 justify-center items-center">
              <div className="bg-[#A0A3BD] p-3 w-8 h-8 md:w-[47px] md:h-[47px] flex items-center justify-center rounded-full">
                <p className="text-light">3</p>
              </div>
              <p className="text-[#A0A3BD] text-xs md:text-sm">Payment</p>
            </div>
          </div>
        </section>
        <section className="px-5 md:px-11 xl:px-[130px] font-mulish mt-10 flex flex-col gap-y-4 lg:flex-row lg:gap-x-4">
          <div className="w-full lg:w-4/6 bg-light py-8 px-5 rounded-md">
            <div className="py-3 px-6 border border-[#DEDEDE] flex flex-col gap-y-4 md:flex-row md:gap-x-6 justify-between rounded-sm">
              <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4">
                <img src={dataSchedule && dataSchedule.movie_photo} alt="movie" />
                <div className="flex flex-col gap-y-3">
                  <p className="text-2xl text-[#121212] font-semibold">
                  {dataSchedule && dataSchedule.movie_name}
                  </p>
                  <div className="flex flex-row gap-x-2">
                    <p className="text-[#A0A3BD] px-5 py-2 bg-[#A0A3BD1A] rounded-[20px]">
                      Action
                    </p>
                    <p className="text-[#A0A3BD] px-5 py-2 bg-[#A0A3BD1A] rounded-[20px]">
                      Adventure
                    </p>
                  </div>
                  <p className="text-[#121212]">Regular - {dataSchedule && dataSchedule.time}</p>
                </div>
              </div>
              <Link
                to="/"
                className="py-2 px-5 bg-primary md:self-end text-light rounded-md"
              >
                Change
              </Link>
            </div>
            <div className="mt-7">
              <p className="text-2xl font-bold">Choose Your Seet</p>
              <div className="px-4 overflow-auto w-full">
                <div className="mb-20"></div>
                <ItemSeat seats={seatsArray}/>
                <p className="mt-6 text-[#000] text-[18px] font-semibold">
                  Seating Key
                </p>
                <div className="flex gap-x-8 w-full">
                  <div className="py-4 flex gap-x-4 items-center">
                    <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded"></div>
                    <p className="text-sm font-semibold text-secondary">
                      Avalaible
                    </p>
                  </div>
                  <div className="py-4 flex gap-x-4 items-center">
                    <div className="w-[26px] h-[26px] bg-primary rounded"></div>
                    <p className="text-sm font-semibold text-secondary">
                      Selected
                    </p>
                  </div>
                  <div className="py-4 flex gap-x-4 items-center">
                    <div className="w-[26px] h-[26px] bg-[#F589D7] rounded"></div>
                    <p className="text-sm font-semibold text-secondary">
                      Love Nest
                    </p>
                  </div>
                  <div className="py-4 flex gap-x-4 items-center">
                    <div className="w-[26px] h-[26px] bg-[#6E7191] rounded"></div>
                    <p className="text-sm font-semibold text-secondary">Sold</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/6 flex flex-col items-stretch">
            <div className="bg-light rounded-md drop-shadow-xl mb-8">
              <div className="flex flex-col items-center justify-center gap-y-2 py-8 px-5">
              <img src={dataSchedule && dataSchedule.cinema_logo} alt="cinema" />
                {/* {dataSchedule.cinema === "ebu.id" && 
                  <img src={getImageUrl("ebv.id", "svg")} alt="cinema" />
                  }
                  {dataSchedule.cinema === "hiflix" && 
                  <img src={getImageUrl("hiflix3", "svg")} alt="cinema" />
                  }
                  {dataSchedule.cinema === "XX1" && 
                  <img src={getImageUrl("hiflix3", "svg")} alt="cinema" />
                  }
                  {dataSchedule.cinema === "Cineplex" && 
                  <img src={getImageUrl("CineOne", "svg")} alt="cinema" />
                  }
                  {dataSchedule.cinema === "CineOne21" && 
                  <img src={getImageUrl("CineOne", "svg")} alt="cinema" />
                  } */}
                <p className="text-2xl tex-dark font-semibold">
                {dataSchedule && dataSchedule.cinema}
                </p>
              </div>
              <div className="text-sm flex flex-col gap-y-4 py-4 px-5">
                <div className="flex justify-between">
                  <p className="text-[#6B6B6B]">Movie Selected</p>
                  <p className="font-semibold">{dataSchedule && dataSchedule.movie_name}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#6B6B6B]">Tuesday, 07 July 2020</p>
                  <p className="font-semibold">{dataSchedule && dataSchedule.time}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#6B6B6B]">One ticket price</p>
                  <p className="font-semibold">IDR {dataSchedule && dataSchedule.price || 0}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#6B6B6B]">Seat choosed</p>
                  <p className="font-semibold">{dataSeat}</p>
                </div>
              </div>
              <div className="w-full border border-[#E6E6E6] mt-8"></div>
              <div className="py-6 px-5">
                <div className="flex justify-between">
                  <p className="text-[#000] text-[18px] font-semibold">
                    Total Payment
                  </p>
                  <p className="text-primary text-2xl font-bold">IDR {dataSchedule && dataSchedule.price * seat.length || 0}</p>
                </div>
              </div>
            </div>
            <div className="w-full flex">
              <Link
                to="/payment"
                className="w-full py-4 px-6 text-center font-semibold text-[#F7F7FC] bg-primary rounded-md drop-shadow-xl"
              >
                Checkout Now
              </Link>
            </div>
          </div>
        </section>
      </section>
      <AuthModal/>
      <Footer />
      {isDropdownShown && (
        <DropdownMobile isClick={() => setIsDropdownShow(false)} />
      )}
    </>
  );
}

export default Order;
