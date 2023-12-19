import { Link } from "react-router-dom";

import getImageUrl from "../utils/imageGetter";

function ItemMovie() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="w-full h-full rounded-md relative">
        <img
          src={getImageUrl("movie1", "png")}
          alt="movie"
          className="w-full h-full"
        />
        <div className="absolute w-full h-full flex flex-col gap-y-3 justify-center items-center inset-0 bg-black opacity-0 hover:opacity-100 hover:opac bg-opacity-0 hover:bg-opacity-40">
          <Link
            to="/movie/1"
            className="text-light text-sm p-3 w-40 border border-light rounded-md text-center focus:ring-2 "
          >
            Details
          </Link>
          <Link
            to="/movie/1"
            className="text-light text-sm p-3 w-40 rounded-md text-center bg-primary focus:ring-2 "
          >
            Buy Ticket
          </Link>
        </div>
      </div>
      <p className="text-2xl text-dark font-semibold">Black Widow</p>
      <div className="flex flex-row gap-x-2">
        <p className="text-[#A0A3BD] px-5 py-2 bg-[#A0A3BD1A] rounded-[20px]">
          Action
        </p>
        <p className="text-[#A0A3BD] px-5 py-2 bg-[#A0A3BD1A] rounded-[20px]">
          Adventure
        </p>
      </div>
    </div>
  );
}

export default ItemMovie;
