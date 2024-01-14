import { Link } from "react-router-dom";
import getImageUrl from "../utils/imageGetter";

export function movieCard(props) {
  const dataGenre = props.movie_genre.split("")
  // const renderedGenre = () => {
  //   dataGenre && dataGenre.forEach()
  // }
  return (
    <div className="flex flex-col gap-y-4">
      <div className="w-full h-full rounded-md relative">
        {props.movie_cover ? (
          <img src={props.movie_cover} alt="movie" className="w-full h-full" />
        ) : (
          <img
            src={getImageUrl("movie1", "png")}
            alt="movie"
            className="w-full h-full"
          />
        )}
        <div className="absolute w-full h-full flex flex-col gap-y-3 justify-center items-center inset-0 bg-black opacity-0 hover:opacity-100 hover:opac bg-opacity-0 hover:bg-opacity-40">
          <Link
            to={"/movie/" + props.id}
            className="text-light text-sm p-3 w-40 border border-light rounded-md text-center focus:ring-2 "
          >
            Details
          </Link>
          <Link
            to={"/movie/" + props.id}
            className="text-light text-sm p-3 w-40 rounded-md text-center bg-primary focus:ring-2 "
          >
            Buy Ticket
          </Link>
        </div>
      </div>
      <p className="text-xl md:text-2xl text-dark font-semibold">
        {props.movie_name}
      </p>
      <div className="flex flex-row gap-x-2">
        <p className="max-sm:text-sm text-[#A0A3BD] px-5 py-2 bg-[#A0A3BD1A] rounded-[20px]">
          {props.movie_genre}
        </p>
        {/* {dataGenre.map((data, index) => (
            <p key={index} className="max-sm:text-sm text-[#A0A3BD] px-5 py-2 bg-[#A0A3BD1A] rounded-[20px]">
              {data.movie_genre}
            </p>
        ))} */}
      </div>
    </div>
  );
}
