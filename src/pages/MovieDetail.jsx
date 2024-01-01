import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovieDetail } from "../utils/https/movieDetail";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "../styles/main.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageGetter";
import DropdownMobile from "../components/DropdownMobile";
import AuthModal from "../components/AuthModal";
import { useNavigate } from "react-router-dom";

import { addOrder,cleanOrder } from "../redux/slices/order";

function MovieDetail() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const token = useSelector(state => state.user.userInfo.token)
  const [idSchedule, setIdSchedule] = useState(0)


  const [isDropdownShown, setIsDropdownShow] = useState(false);
  const [dataMovie, setDataMovie] = useState([]);
  const [dataSchedule, setDataSchedule] = useState([]);
  const [cinemaPage] = useState(0);

  const [isDate, setIsDate] = useState(false);
  const [dateMovie, setDate] = useState("Set Date");
  const [isTime, setIsTime] = useState(false);
  const [time, setTime] = useState("Set time");
  const [dateList, setDateList] = useState([])

  const [isLocation, setIsLocation] = useState(false);
  const [location, setLocation] = useState({
    name: "Purwokerto",
    id: null,
  });

  useEffect(() => {
    dispatch(cleanOrder())
    const getMovieDetailUrl = import.meta.env.VITE_BACKEND_HOST + "/movie/movie/" + id
    getMovieDetail(getMovieDetailUrl, token)
      .then((res) => {
        setDataMovie(res.data.data.movie);
        setDataSchedule(res.data.data.schedule);
        // console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const setSchedule = (id) => {
    dispatch(addOrder(id))
    setIdSchedule(id)
  }
  
  const scheduleInfo = useSelector(state => state.order.scheduleInfo)
  const [wrongMsg, setWrongMsg] = useState(false)
  const bookNow = () => {
    setWrongMsg(false)
    if (scheduleInfo === 0) {
      return setWrongMsg(true)
    }
    navigate("/order")
  }

//   if (dataSchedule.date) {
//     let uniqueObj = {};
//     let result = arr.filter((item) => {
//       if (!uniqueObj[item]) {
//           uniqueObj[item] = true;
//           return true;
//       }
//       return false;
//   });
//   return result;
// }

  return (
    <>
      <Navbar isClick={() => setIsDropdownShow(true)} />
      <header className="hidden lg:block w-full h-[300px] font-mulish text-light bg-[url('https://res.cloudinary.com/dhxdnljzm/image/upload/v1702660673/hero2_o5dgxn.png')] relative bg-cover bg-center">
        <div className="w-full h-full  px-11 xl:px-[130px] absolute bg-black bg-opacity-40"></div>
      </header>
      <section className="px-5 md:px-11 xl:px-[130px] font-mulish lg:-top-40 flex flex-col gap-y-7 mt-10">
        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-5">
          {dataMovie && dataMovie[0] ? (
            <img src={dataMovie[0].movie_photo} alt="movie" />
          ) : (
            <img src={getImageUrl("movie4", "png")} alt="movie" />
          )}
          <div className="flex flex-col gap-y-4 justify-center">
            <p className="text-[2rem] text-dark font-bold">
              {dataMovie && dataMovie[0] && dataMovie[0].movie_name}
            </p>
            <div className="flex flex-row gap-x-2">
              <p className="text-[#A0A3BD] px-5 py-2 bg-[#A0A3BD1A] rounded-[20px]">
                Action
              </p>
              <p className="text-[#A0A3BD] px-5 py-2 bg-[#A0A3BD1A] rounded-[20px]">
                Adventure
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-y-2">
                <p className="text-sm text-[#8692A6]">Release Date</p>
                <p className="text-[#ac7979]">
                  {dataMovie && dataMovie[0] && dataMovie[0].release_date}
                </p>
              </div>
              <div className="flex flex-col gap-y-2 col-span-2">
                <p className="text-sm text-[#8692A6]">Directed By</p>
                <p className="text-[#121212]">
                  {dataMovie && dataMovie[0] && dataMovie[0].director}
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-sm text-[#8692A6]">Duration</p>
                <p className="text-[#121212]">
                  {dataMovie && dataMovie[0] && dataMovie[0].duration}
                </p>
              </div>
              <div className="flex flex-col gap-y-2 col-span-2">
                <p className="text-sm text-[#8692A6]">Casts</p>
                <p className="text-[#121212]">
                  {dataMovie && dataMovie[0] && dataMovie[0].cast}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[20px] font-semibold text-[#000]">Synopsis</p>
          <p className="text-[#A0A3BD] leading-8 lg:w-2/3">
            {dataMovie && dataMovie[0] && dataMovie[0].sinopsis}
          </p>
        </div>
        <div>
          <p className="text-xl md:text-[2rem] text-[#121212] mb-5">
            Book Tickets
          </p>
          <div className="flex flex-col gap-y-4 md:flex-row md:items-end md:gap-x-4 lg:gap-x-[30px]">
            <div className="flex flex-col gap-y-4 md:w-1/4 relative">
              <p className="md:text-[20px] font-semibold text-black">
                Choose Date
              </p>
              <div
                className="flex justify-between items-center p-4 px-6 bg-[#EFF0F6] rounded-md cursor-pointer w-full"
                onClick={() => setIsDate((state) => !state)}
              >
                <div className="flex gap-x-4">
                  <img
                    src={getImageUrl("calendar", "svg")}
                    alt="icon"
                    className=""
                  />
                  <p className="text-xs lg:text-base text-secondary font-semibold">
                    {dateMovie}
                  </p>
                </div>
                <img src={getImageUrl("Forward", "svg")} alt="icon" />
              </div>
              {isDate && (
                <div className="flex justify-between items-center p-4 px-6 bg-[#EFF0F6] rounded-md cursor-pointer w-full absolute top-28 drop-shadow-xl">
                  <div className="flex flex-col gap-y-5">
                    {dataSchedule &&
                      dataSchedule.map((date, index) => (
                        <div
                          className="flex gap-x-4"
                          key={index}
                          onClick={() => {
                            setDate(date.date);
                            setIsDate((state) => !state);
                          }}
                        >
                          <p className="text-xs lg:text-base text-secondary font-semibold">
                            {date.date}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-y-4 md:w-1/4 relative">
              <p className="md:text-[20px] font-semibold text-black">
                Choose Time
              </p>
              <div
                className="flex justify-between items-center p-4 px-6 bg-[#EFF0F6] rounded-md cursor-pointer w-full"
                onClick={() => setIsTime((state) => !state)}
              >
                <div className="flex gap-x-4">
                  <img src={getImageUrl("time", "svg")} alt="icon" />
                  <p className="text-xs lg:text-base text-secondary font-semibold">
                    {time}
                  </p>
                </div>
                <img src={getImageUrl("Forward", "svg")} alt="icon" />
              </div>
              {isTime && (
                <div className="flex justify-between items-center p-4 px-6 bg-[#EFF0F6] rounded-md cursor-pointer w-full absolute top-28 drop-shadow-xl">
                  <div className="flex flex-col gap-y-5">
                    {dataSchedule &&
                      dataSchedule.map((date, index) => {
                        if (date.date === dateMovie) {
                          return (
                            <div
                              className="flex gap-x-4"
                              key={index}
                              onClick={() => {
                                setTime(date.time);
                                setIsTime((state) => !state);
                              }}
                            >
                              <p className="text-xs lg:text-base text-secondary font-semibold">
                                {date.time}
                              </p>
                            </div>
                          );
                        } else {
                          return null;
                        }
                      })}
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-y-4 md:w-1/4 relative">
              <p className="md:text-[20px] font-semibold text-black">
                Choose Location
              </p>
              <div
                className="flex justify-between items-center p-4 px-6 bg-[#EFF0F6] rounded-md cursor-pointer w-full"
                onClick={() => setIsLocation((state) => !state)}
              >
                <div className="flex gap-x-4">
                  <img src={getImageUrl("location", "svg")} alt="icon" />
                  <p className="text-xs lg:text-base text-secondary font-semibold">
                    {location.name}
                  </p>
                </div>
                <img src={getImageUrl("Forward", "svg")} alt="icon" />
              </div>
              {isLocation && (
                <div className="flex justify-between items-center p-4 px-6 bg-[#EFF0F6] rounded-md cursor-pointer w-full absolute top-28 drop-shadow-xl">
                  <div className="flex flex-col gap-y-5">
                    <div
                      className="flex gap-x-4"
                      onClick={() => {
                        setLocation({ name: "Bekasi", id: 1 });
                        setIsLocation((state) => !state);
                      }}
                    >
                      <p className="text-xs lg:text-base text-secondary font-semibold">
                        Bekasi
                      </p>
                    </div>
                    <div
                      className="flex gap-x-4"
                      onClick={() => {
                        setLocation({ name: "Jakarta", id: 1 });
                        setIsLocation((state) => !state);
                      }}
                    >
                      <p className="text-xs lg:text-base text-secondary font-semibold">
                        Jakarta
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="md:w-[16%]">
              <div className="text-sm text-light bg-primary rounded-md p-4 text-center cursor-pointer">
                Filter
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-10 items-center">
          <div className="flex gap-x-7 items-center self-start">
            <p className="md:text-[20px] text-[#121212] font-semibold">
              Choose Cinema
            </p>
            <p className="text-[18px] text-[#8692A6] font-bold">39 Result</p>
          </div>
          <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 w-full">
            {/* <div className="p-7 border-2 border-[#DEDEDE] rounded-md md:w-1/4 flex justify-center items-center">
              <img src={getImageUrl("ebv.id", "svg")} alt="cinema" />
            </div>
            <div className="p-7 bg-primary border-2 border-primary rounded-md md:w-1/4 flex justify-center items-center">
              <img src={getImageUrl("hiflix3", "svg")} alt="cinema" />
            </div>
            <div className="p-7 border-2 border-[#DEDEDE] rounded-md md:w-1/4 flex justify-center items-center">
              <img src={getImageUrl("CineOne", "svg")} alt="cinema" />
            </div>
            <div className="p-7 border-2 border-[#DEDEDE] rounded-md md:w-1/4 flex justify-center items-center">
              <img src={getImageUrl("ebv.id", "svg")} alt="cinema" />
            </div> */}
            {dateMovie && time && (
              <>
                {dataSchedule.slice(cinemaPage, 4).map((date, index) => {
                  if (date.date === dateMovie && date.time === time) {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          setSchedule(date.ID);
                        }}
                        className={`p-7 ${
                          idSchedule === date.ID ? "bg-primary" : "bg-gray-400"
                        }  border-2 border-[#DEDEDE] rounded-md md:w-1/4 flex justify-center items-center`}
                      >
                        {date.cinema === "ebu.id" && (
                          <img
                            src={getImageUrl("ebv.id", "svg")}
                            alt="cinema"
                          />
                        )}
                        {date.cinema === "hiflix" && (
                          <img
                            src={getImageUrl("hiflix3", "svg")}
                            alt="cinema"
                          />
                        )}
                        {date.cinema === "XX1" && (
                          <img
                            src={getImageUrl("hiflix3", "svg")}
                            alt="cinema"
                          />
                        )}
                        {date.cinema === "Cineplex" && (
                          <img
                            src={getImageUrl("CineOne", "svg")}
                            alt="cinema"
                          />
                        )}
                        {date.cinema === "CineOne21" && (
                          <img
                            src={getImageUrl("CineOne", "svg")}
                            alt="cinema"
                          />
                        )}
                        {/* <img src={date.cinema === "ebu.id" && getImageUrl("ebv.id", "svg") || date.cinema === "hiflix" || "XX1" && getImageUrl("hiflix3", "svg") || date.cinema === "Cineplex" || "CineOne21" && getImageUrl("CineOne", "svg")} alt="cinema" /> */}
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </>
            )}
          </div>
          <div className="flex gap-x-2 justify-center font-nunito font-medium">
            <p className="text-light bg-primary border border-primary rounded-lg w-[40px] h-[40px] flex justify-center items-center drop-shadow-xl">
              1
            </p>
            <p className="text-[#A0A3BD] border border-[#DEDEDE] rounded-lg w-[40px] h-[40px] flex justify-center items-center">
              2
            </p>
            <p className="text-[#A0A3BD] border border-[#DEDEDE] rounded-lg w-[40px] h-[40px] flex justify-center items-center">
              3
            </p>
            <p className="text-[#A0A3BD] border border-[#DEDEDE] rounded-lg w-[40px] h-[40px] flex justify-center items-center">
              4
            </p>
          </div>
          <div>
            {wrongMsg && <p className="text-red-500 mb-8 flex justify-center">Must select cinema</p>}
            <div
              onClick={bookNow}
              className="text-sm text-light bg-primary py-5 px-16 justify-self: center rounded-md focus:ring-2"
            >
              Book Now
            </div>
          </div>
        </div>
      </section>
      <AuthModal/>
      <Footer />
      {isDropdownShown && (
        <DropdownMobile isClick={() => setIsDropdownShow(false)} />
      )}
    </>
  );
}

export default MovieDetail;
