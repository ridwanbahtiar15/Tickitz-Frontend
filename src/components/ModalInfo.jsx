import { useState, useRef } from "react";
import { Link } from "react-router-dom";

function ModalInfo(props) {
  const [copySuccess, setCopySuccess] = useState("Copy");
  const noVirtualRef = useRef(null);
  const copyToClipboard = (e) => {
    noVirtualRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
  };

  // const payClick = () => {
  //   const targetURL = props.url
  //   window.open(targetURL, '_blank');
  // }
  
  return (
    <div className="bg-gray-200 justify-center items-center h-screen opacity-100 absolute z-10 font-mulish">
      <div className="fixed left-0 top-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center px-[10px] md:px-0">
        <div className="bg-white rounded-2xl shadow-md py-10 px-6 w-full md:w-[70%] lg:w-[55%] xl:w-[45%] flex flex-col gap-y-10">
          <h1 className="text-2xl font-bold text-dark text-center">
            Payment Info
          </h1>
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between w-full md:items-center">
              <p className="text-sm text-[#8692A6]">No. Rekening Virtual:</p>
              <div className="flex flex-col gap-y-4 items-end md:flex-row md:gap-x-5 md:items-center justify-end">
                <input
                  className="text-base md:text-[18px] text-dark font-bold disabled w-[86%] md:w-[60%]"
                  ref={noVirtualRef}
                  value="12321328913829724"
                  disabled
                />
                <button
                  className="py-3 px-4 text-sm text-primary border-primary border rounded-md cursor-pointer"
                  onClick={copyToClipboard}
                >
                  {copySuccess}
                </button>
              </div>
            </div>
            <div className="flex justify-between w-full items-center">
              <p className="text-sm text-[#8692A6]">Total Payment:</p>
              <p className="text-[18px] font-bold text-primary">$30</p>
            </div>
            <div>
              <p className="text-[#A0A3BD] leading-8">
                Pay this payment bill before it is due,{" "}
                <span className="text-danger">on June 23, 2023</span>. If the
                bill has not been paid by the specified time, it will be
                forfeited
              </p>
            </div>
            <div className="flex flex-col gap-y-4 items-center">
              <button
                className="w-full py-4 px-4 font-bold text-light bg-primary rounded-md mt-6 text-center drop-shadow-xl focus:ring-2"
              >
                Check Payment
              </button>
              <Link to="/" className="font-bold text-primary">
                Pay Later
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalInfo;
