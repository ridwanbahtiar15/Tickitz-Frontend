import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../styles/main.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageGetter";
import DropdownMobile from "../components/DropdownMobile";
import ModalInfo from "../components/ModalInfo";
import AuthModal from "../components/AuthModal";
import { getScheduleDetail, createOrder } from "../utils/https/order";
import { getProfile } from "../utils/https/profile";

function Payment() {
  const [isDropdownShown, setIsDropdownShow] = useState(false);
  const [payment, setPayment] = useState("bca")
  const scheduleId = useSelector(state => state.order.scheduleInfo)
  const seat = useSelector(state => state.order.chooseSeat)
  const token = useSelector(state => state.user.userInfo.token)
  const [dataSchedule, setDataSchedule] = useState({})
  const [isModalInfoShown, setisModalInfoShown] = useState(false);
  // const [redirectUrl, setRedirectUrl] = useState("")
  const [vaNumbers, setVANumbers] = useState("")
  const [dataUser, setDataUser] = useState({})

  useEffect(() => {
    getScheduleDetail(scheduleId, token)
    .then((res) => {
      setDataSchedule(res.data.data[0])
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
    getProfile(token)
    .then((res) => {
      // console.log(res)
      setDataUser(res.data.data[0])
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  const submit = () => {
    setisModalInfoShown(true)
    const body = {
      schedules: scheduleId,
      seats: seat.join(", "),
      total_ticket: seat.length,
      total_purchase: seat.length * dataSchedule.price,
      active_until: "2023-12-30",
      payment: payment
    }
    // console.log(body)
    createOrder(body, token)
    .then((res) => {
      // console.log(res)
      setVANumbers(res.data.data[0].va_number)
    })
    .catch((err) => {
      console.log(err)
    })
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
              <div className="bg-success p-1 md:p-3 rounded-full">
                <img src={getImageUrl("check-small", "svg")} alt="icon" />
              </div>
              <p className="text-secondary text-xs md:text-sm">Seat</p>
            </div>
            <div className="w-0 h-10 sm:w-[70px] sm:h-0 border border-dashed border-[#A0A3BD] sm:mt-10"></div>
            <div className="flex flex-col gap-y-3 justify-center items-center">
              <div className="bg-primary p-3 w-8 h-8 md:w-[47px] md:h-[47px] flex items-center justify-center rounded-full">
                <p className="text-light">3</p>
              </div>
              <p className="text-secondary text-xs md:text-sm">Payment</p>
            </div>
          </div>
        </section>
        <section className="px-5 md:px-11 xl:px-[319px] font-mulish mt-10">
          <div className="bg-light py-11 px-6 rounded-md">
            <div>
              <p className="text-xl md:text-2xl text-dark font-bold mb-6">
                Payment Info
              </p>
              <div className="flex flex-col gap-y-2">
                <div className="flex flex-col gap-y-3">
                  <p className="text-sm text-[#8692A6]">DATE & TIME</p>
                  <p className="text-sm md:text-base text-black">
                    Tuesday, 07 July 2020 at 02:00pm
                  </p>
                  <div className="border border-[#E6E6E6]"></div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <p className="text-sm text-[#8692A6]">MOVIE & TITLE</p>
                  <p className="text-sm md:text-base text-black">
                    {dataSchedule && dataSchedule.movie_name}
                  </p>
                  <div className="border border-[#E6E6E6]"></div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <p className="text-sm text-[#8692A6]">CINEMA NAME</p>
                  <p className="text-sm md:text-base text-black">
                  {dataSchedule && dataSchedule.cinema}
                  </p>
                  <div className="border border-[#E6E6E6]"></div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <p className="text-sm text-[#8692A6]">NUMBER OF TICKETS</p>
                  <p className="text-sm md:text-base text-black">{seat.length} pieces</p>
                  <div className="border border-[#E6E6E6]"></div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <p className="text-sm text-[#8692A6]">TOTAL PAYMENT</p>
                  <p className="font-bold text-primary">IDR {dataSchedule && seat.length * dataSchedule.price}</p>
                  <div className="border border-[#E6E6E6]"></div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xl md:text-2xl text-dark font-bold mb-6 mt-10">
                Personal Information
              </p>
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-3">
                  <p className="text-sm md:text-base text-[#696F79]">
                    Full Name
                  </p>
                  <div className="text-sm md:text-base p-4 px-8 border rounded-sm">
                    {dataUser && dataUser.full_name}
                  </div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <p className="text-sm md:text-base text-[#696F79]">Email</p>
                  <div className="text-sm md:text-base p-4 px-8 border rounded-sm">
                  {dataUser && dataUser.email}
                  </div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <p className="text-sm md:text-base text-[#696F79]">
                    Phone Number
                  </p>
                  <div className="text-sm md:text-base p-4 px-8 border rounded-sm">
                  +{dataUser && dataUser.phone}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xl md:text-2xl text-dark font-bold mb-6 mt-10">
                Payment Method
              </p>
              <div className="grid md:grid-cols-4 gap-4 justify-items-stretch">
                <div className="py-2 px-8 border rounded-md flex justify-center items-center">
                  <img src={getImageUrl("googleplay", "svg")} alt="icon" />
                </div>
                <div className="py-2 px-8 border rounded-md flex justify-center items-center">
                  <img src={getImageUrl("visa", "svg")} alt="icon" />
                </div>
                <div className="py-2 px-8 border rounded-md flex justify-center items-center">
                  <img src={getImageUrl("gopay", "svg")} alt="icon" />
                </div>
                <div className="py-2 px-8 border rounded-md flex justify-center items-center">
                  <img src={getImageUrl("paypal", "svg")} alt="icon" />
                </div>
                <div className="py-2 px-8 border rounded-md flex justify-center items-center">
                  <img src={getImageUrl("dana", "svg")} alt="icon" />
                </div>
                <div className="py-2 px-8 border rounded-md flex justify-center items-center">
                  <img src={getImageUrl("bca", "svg")} alt="icon" />
                </div>
                <div className="py-2 px-8 border rounded-md flex justify-center items-center">
                  <img src={getImageUrl("bri", "svg")} alt="icon" />
                </div>
                <div className="py-2 px-8 border rounded-md flex justify-center items-center">
                  <img src={getImageUrl("ovo", "svg")} alt="icon" />
                </div>
              </div>
            </div>
            <button
              className="w-full py-4 px-4 font-bold text-light bg-primary rounded-md mt-10 text-center drop-shadow-xl focus:ring-2"
              onClick={submit}
            >
              Pay Your Order
            </button>
          </div>
        </section>
      </section>
      <AuthModal/>
      <Footer />
      {isDropdownShown && (
        <DropdownMobile isClick={() => setIsDropdownShow(false)} />
      )}
      {isModalInfoShown && <ModalInfo vaNumbers={vaNumbers} />}
    </>
  );
}

export default Payment;
