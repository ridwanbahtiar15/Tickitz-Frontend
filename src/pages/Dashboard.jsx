import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import DropdownMobile from "../components/DropdownMobile";
import getImageUrl from "../utils/imageGetter";
import SalesChart from "../components/SalesChart";
import TicketChart from "../components/TicketChart";
import { getDataStatusMovie } from "../utils/https/dashboard";
import { useSelector } from "react-redux";
import AuthModal from "../components/AuthModal";

function Dashboard() {
  const [isDropdownShown, setIsDropdownShow] = useState(false);
  const [IsMovie, setIsMovie] = useState(false);
  const [movie, setMovie] = useState("");
  const [dataMovie, setDataMovie] = useState(["Spiderman", "Black Widow"]);
  const [searchParams, setSearchParams] = useSearchParams({
    movie_name: "spide"
  })
  const token = useSelector(state => state.user.userInfo.token)
  const [dataStatistic, setDataStatistic] = useState()
  const [IsCategory, setIsCategory] = useState(false);
  const [category, setCategory] = useState("");
  const [dataCategory, setdataCategory] = useState(["Adventure", "Action"]);

  const getDataMovie = (params) => {
    const url = import.meta.env.VITE_BACKEND_HOST + "/order/stat?" + params;

    getDataStatusMovie(url, token)
    .then((res) => {
      console.log(res)
      setDataStatistic(res.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  };

  useEffect(() => {
    getDataMovie(searchParams.toString())
  }, [])

  return (
    <>
      <Navbar isClick={() => setIsDropdownShow(true)} />
      <main className="flex flex-col gap-y-10 py-10 px-11 xl:px-[130px] bg-[#F5F6F8] h-full font-mulish">
        <section className="w-full bg-light rounded-xl p-10">
          <div className="flex flex-col gap-y-4">
            <p className="text-2xl text-dark font-bold">Sales Chart</p>
            <div className="flex gap-x-3 md:items-baseline flex-col gap-y-4 md:flex-row ">
              <div className="flex flex-col gap-y-2 relative">
                <div
                  className="py-3 px-4 bg-[#EFF0F6] flex justify-beetwen gap-x-10 rounded-lg items-center cursor-pointer"
                  onClick={() => setIsMovie((state) => !state)}
                >
                  <p className="text-secondary font-semibold">Movie</p>
                  <img src={getImageUrl("Forward", "svg")} alt="icon" />
                </div>
                {IsMovie && (
                  <div className="p-4 px-6 bg-[#EFF0F6] rounded-md cursor-pointer w-full absolute top-16 drop-shadow-xl">
                    <div className="flex flex-col gap-y-3">
                      {dataMovie.map((result, i) => (
                        <p
                          className="text-secondary font-semibold"
                          key={i}
                          onClick={() => {
                            setMovie(result);
                            setIsMovie(false);
                          }}
                        >
                          {result}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="py-3 px-4 bg-[#EFF0F6] flex justify-beetwen gap-x-10 rounded-lg items-center">
                <p className="text-secondary font-semibold">Weekly</p>
                <img src={getImageUrl("Forward", "svg")} alt="icon" />
              </div>
              <button className="py-3 px-10 bg-primary rounded-lg text-light font-bold focus:ring-2">
                Filter
              </button>
            </div>
            <p className="text-[15px] font-semibold">{movie}</p>
            <div>
              <SalesChart dataStatistic={dataStatistic}/>
            </div>
          </div>
        </section>
      </main>
      <AuthModal role={"Admin"}/>
      {isDropdownShown && (
        <DropdownMobile isClick={() => setIsDropdownShow(false)} />
      )}
    </>
  );
}

export default Dashboard;
