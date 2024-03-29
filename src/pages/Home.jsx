import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "../styles/main.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getImageUrl from "../utils/imageGetter";
import DropdownMobile from "../components/DropdownMobile";
import { getAllMovie } from "../utils/https/home";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { movieCard } from "../components/MovieCard";
import AuthModal from "../components/AuthModal";

function Home() {
  const [isDropdownShown, setIsDropdownShow] = useState(false);
  const [genre, setGenre] = useState("");
  const navigate = useNavigate();
  const [isGenre, setIsGenre] = useState(false);
  const [movie, setDataMovie] = useState([]);
  const [metaMovie, setMetaMovie] = useState([]);
  const token = useSelector((state) => state.user.userInfo.token);
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1
  });
  const getMovieUrl = import.meta.env.VITE_BACKEND_HOST + "/movie?" + searchParams.toString();

  useEffect(() => {
    window.scrollTo(0, 0)
    getAllMovie(token, getMovieUrl)
      .then((res) => {
        setDataMovie(res.data.data);
        setMetaMovie(res.data.meta)
        console.log(res.data.data)
      })
      .catch(() => {
        setDataMovie([]);
      });
  }, [searchParams]);

  const search = (e) => {
    e.preventDefault();
    const url =
      import.meta.env.VITE_BACKEND_HOST +
      "/movie?movie_name=" +
      e.target.search_movie.value;
    setSearchParams({
      movie_name: e.target.search_movie.value,
    });
    setGenre("");
    if (!e.target.search_movie.value) {
      setSearchParams({});
    }
    getAllMovie(token, url)
      .then((res) => {
        setDataMovie(res.data.data);
      })
      .catch(() => {
        setDataMovie([]);
      });
  };

  const submitGenre = (value) => {
    setGenre(value);
    setSearchParams((prev) => {
      return {
        ...prev,
        movie_genre: value,
      };
    });
    const genreUrl =
      import.meta.env.VITE_BACKEND_HOST + "/movie?movie_genre=" + value;
    getAllMovie(token, genreUrl)
      .then((res) => {
        setDataMovie(res.data.data);
      })
      .catch(() => {
        setDataMovie([]);
      });
  };

  const pagination = (page, url) => {
    if (page !== "") {
      if (page !== metaMovie.page) {
        const params = metaMovie && metaMovie.next !== "null"
          ? `${(metaMovie.next).slice(0, -1)}${page}`
          : `${(metaMovie.prev).slice(0, -1)}${page}`;
        navigate("/?" + params);
        setSearchParams(params)
      }
    }
    if (url !== "") {
      navigate("/?" + url);
      setSearchParams(url)
    }
  };

  const renderButtons = () => {
    return Array.from({ length: metaMovie.total_page }, (_, index) => (
      <button onClick={() => {pagination(index + 1, "")}}
        key={index}
        className={`h-10 w-10 ${
          index + 1 === metaMovie.page
            ? "bg-primary text-white"
            : "bg-order text-black"
        } rounded-full flex justify-center items-center`}
      >
        {index + 1}
      </button>
    ));
  };

  const nextPage = () => {
    if (metaMovie.next !== "null") {
      navigate("/?" + metaMovie.next);
      setSearchParams(metaMovie.next)
    }
  }

  const prevPage = () => {
    if (metaMovie.prev !== "null") {
      navigate("/?" + metaMovie.prev);
      setSearchParams(metaMovie.prev)
    }
  }

  return (
    <>
      <Navbar isClick={() => setIsDropdownShow(true)} />
      <header className="hidden lg:block lg:w-full lg:h-[426px] lg:bg-[url('https://res.cloudinary.com/dhxdnljzm/image/upload/v1702580175/hero-DAqbS6CQ_vvn9ah.png')] px-11 xl:px-[130px] font-mulish text-light">
        <div className="h-full flex flex-col justify-center w-[50%]">
          <p className="text-lg">LIST MOVIE OF THE WEEK</p>
          <p className="text-5xl leading-[70px]">
            Experience the Magic of Cinema: Book Your Tickets Today
          </p>
        </div>
        <div className="w-full flex justify-center mt-[-27px]">
          <img src={getImageUrl("paginate-hero", "svg")} alt="paginate-hero" />
        </div>
      </header>
      <section
        className="pt-6 md:pt-10 lg:pt-14 pb-[55px] px-5 md:px-11 xl:px-[130px] font-mulish"
        id="movies"
      >
        <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
          <div className="flex flex-col gap-y-4">
            <p className="text-secondary font-semibold">Cari Event</p>
            <form onSubmit={search} className="relative">
              <input
                type="text"
                name="search_movie"
                className="border border-[#DEDEDE] py-4 md:py-5 pl-16 pr-[18px] w-full md:w-[340px] rounded-sm outline-none placeholder:text-[#A0A3BD] placeholder:max-sm:text-sm"
                placeholder="New Born Expert"
              />
              <button type="submit">
                <img
                  src={getImageUrl("Search", "svg")}
                  alt="icon"
                  className="absolute top-5 md:top-6 left-5"
                />
              </button>
            </form>
          </div>
          <div className="hidden md:flex flex-col gap-y-4 lg:gap-y-7">
            <p className="text-secondary font-semibold">Filter</p>
            <div className="flex flex-col md:flex-row md:gap-x-8 md:items-center text-sm font-nunito font-semibold">
              <button
                className={`py-2 px-4 ${
                  genre === "Thriller"
                    ? "bg-primary text-light"
                    : "text-secondary "
                } rounded-[10px] cursor-pointer`}
                onClick={() => submitGenre("Thriller")}
              >
                Thriller
              </button>
              <button
                className={`py-2 px-4 ${
                  genre === "Horror"
                    ? "bg-primary text-light"
                    : "text-secondary "
                } rounded-[10px] cursor-pointer`}
                onClick={() => submitGenre("Horror")}
              >
                Horror
              </button>
              <button
                className={`py-2 px-4 ${
                  genre === "Romantic"
                    ? "bg-primary text-light"
                    : "text-secondary "
                } rounded-[10px] cursor-pointer`}
                onClick={() => submitGenre("Romantic")}
              >
                Romantic
              </button>
              <button
                className={`py-2 px-4 ${
                  genre === "Adventure"
                    ? "bg-primary text-light"
                    : "text-secondary "
                } rounded-[10px] cursor-pointer`}
                onClick={() => submitGenre("Adventure")}
              >
                Adventure
              </button>
              <button
                className={`py-2 px-4 ${
                  genre === "Sci fi"
                    ? "bg-primary text-light"
                    : "text-secondary "
                } rounded-[10px] cursor-pointer`}
                onClick={() => submitGenre("Sci fi")}
              >
                Sci-Fi
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 md:w-1/4 relative z-10">
            <p className="md:text-[20px] font-semibold text-black">Filter</p>
            <div
              className="flex justify-between items-center p-4 px-6 bg-[#EFF0F6] rounded-md cursor-pointer w-full"
              onClick={() => setIsGenre((state) => !state)}
            >
              <p className="text-xs lg:text-base text-secondary font-semibold">
                {genre}
              </p>
              <img src={getImageUrl("Forward", "svg")} alt="icon" />
            </div>
            {isGenre && (
              <div className="flex justify-between items-center p-4 px-6 bg-[#EFF0F6] rounded-md cursor-pointer w-full absolute top-24 drop-shadow-xl">
                <div className="flex flex-col gap-y-5">
                  <button
                    className="flex gap-x-4"
                    onClick={() => {
                      submitGenre("Thriller");
                      setGenre("Thriller");
                      setIsGenre((state) => !state);
                    }}
                  >
                    <p className="text-xs lg:text-base text-secondary font-semibold">
                      Thriller
                    </p>
                  </button>
                  <button
                    className="flex gap-x-4"
                    onClick={() => {
                      submitGenre("Horror");
                      setGenre("Horror");
                      setIsGenre((state) => !state);
                    }}
                  >
                    <p className="text-xs lg:text-base text-secondary font-semibold">
                      Horror
                    </p>
                  </button>
                  <button
                    className="flex gap-x-4"
                    onClick={() => {
                      submitGenre("Romantic");
                      setGenre("Romantic");
                      setIsGenre((state) => !state);
                    }}
                  >
                    <p className="text-xs lg:text-base text-secondary font-semibold">
                      Romantic
                    </p>
                  </button>
                  <button
                    className="flex gap-x-4"
                    onClick={() => {
                      submitGenre("Adventure");
                      setGenre("Adventure");
                      setIsGenre((state) => !state);
                    }}
                  >
                    <p className="text-xs lg:text-base text-secondary font-semibold">
                      Adventure
                    </p>
                  </button>
                  <button
                    className="flex gap-x-4"
                    onClick={() => {
                      submitGenre("Sci-Fi");
                      setGenre("Sci-Fi");
                      setIsGenre((state) => !state);
                    }}
                  >
                    <p className="text-xs lg:text-base text-secondary font-semibold">
                      Sci-Fi
                    </p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="pb-[63px] px-5 md:px-11 xl:px-[130px] font-mulish">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-5">
          {movie.length > 0 ? (
            movie.map((product, index) => (
              <div key={index}>
                {movieCard({
                  id: product.Id,
                  movie_cover: product.movie_photo,
                  movie_name: product.movie_name,
                  movie_genre: product.genre
                })}
              </div>
            ))
          ) : (
            <div className="text-dark text-xl font-bold col-span-2 md:col-span-3 lg:col-span-4 text-center">
              Movie Not Found!
            </div>
          )}
        </div>
      </section>
      <section className="pb-[63px] flex gap-x-5 justify-center font-nunito font-medium">
        <p onClick={prevPage} className="bg-primary cursor-pointer rounded-full w-[40px] h-[40px] flex justify-center items-center">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </p>
        {renderButtons()}
        <p onClick={nextPage} className="bg-primary cursor-pointer rounded-full w-[40px] h-[40px] flex justify-center items-center">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </p>
      </section>
      <section className="pb-[63px] px-5 md:px-11 xl:px-[130px] font-mulish">
        <div className="w-full h-[318px] bg-primary rounded-[20px] flex flex-col gap-y-4 md:gap-y-12 justify-center items-center">
          <p className="text-light text-xl md:text-3xl lg:text-5xl w-[80%] md:w-full text-center">
            Subscribe to our newsletter
          </p>
          <div className="max-sm:w-full flex flex-col gap-y-4 md:flex-row md:gap-x-4 max-sm:items-start max-sm:px-5">
            <input
              type="text"
              className="p-4 max-sm:w-full bg-primary outline-none border border-light rounded-[9px] text-light placeholder:text-light text-sm lg:text-base"
              placeholder="First Name"
            />
            <input
              type="text"
              className="p-4 max-sm:w-full bg-primary outline-none border border-light rounded-[9px] text-light placeholder:text-light text-sm lg:text-base"
              placeholder="Email Address"
            />
            <button
              type="text"
              className="p-4 max-sm:w-full bg-light outline-none border border-light rounded-[9px] text-primary font-bold focus:ring-2 focus:ring-slate-300 text-md lg:text-[18px]"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
      <Footer />
      <AuthModal />
      {isDropdownShown && (
        <DropdownMobile isClick={() => setIsDropdownShow(false)} />
      )}
    </>
  );
}

export default Home;
