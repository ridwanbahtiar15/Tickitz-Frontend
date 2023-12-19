import React, { useState } from "react";
import getImageUrl from "../utils/imageGetter";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userAction } from "../redux/slices/user";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const statement = useSelector((state) => state.user);
  const [isPwdShown, setIsPwdShown] = useState(false);
  const showPwdHandler = () => {
    setIsPwdShown((state) => !state);
  };
  const [wrongModals, setWrongModals] = useState(false);
  const [msg, setMsg] = useState("");
  const setShowWrongModal = () => {
    setWrongModals((state) => !state);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const { loginThunk } = userAction;
    const body = {
      email: e.target.email.value,
      password: e.target.pwd.value,
    };
    dispatch(
      loginThunk({
        body,
        cb: () => {
          navigate("/");
        },
        errorCb: (error) => {
          console.log(error.response.data.message);
          if (error.response.data.message === "Input not valid") {
            setMsg("Please input data");
            setShowWrongModal();
            return;
          }
          if (error.response.data.message === "Email or password is wrong") {
            setMsg("E-mail or Password is wrong");
            setShowWrongModal();
            return;
          }
          setMsg("Internal Server Error");
          setShowWrongModal();
        },
      })
    );
  };
  return (
    <>
      <main className="w-full h-screen bg-[url('https://res.cloudinary.com/dhxdnljzm/image/upload/v1702915021/background_wqv5hp.png')] bg-cover bg-center bg-no-repeat">
        <div className="w-full h-full bg-[#00000099] flex items-center justify-center px-4 py-5">
          <div id="White_box" className="font-mulish pb-10">
            <div className="flex justify-center">
              <img
                src={getImageUrl("tickitz-white", "png")}
                alt="image"
                className="flex justify-center items-center"
              />
            </div>
            <form
              onSubmit={submitHandler}
              className="bg-white flex flex-col gap-4 px-14 py-14 rounded-md text-sm"
            >
              <p className="text-[2rem] font-bold">Welcome Back👋</p>
              <p className="text-[#A0A3BD] text-[18px]">
                Sign in with your data that you entered during your registration
              </p>
              <div id="Email">
                <p className="text-secondary font-semibold mb-2">Email</p>
                <div className="w-full bg-input_bg border border-solid border-input_border p-3 flex items-center gap-2 rounded-lg">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    className="bg-input_bg flex-1 outline-none text-sm lg:text-base"
                  />
                  <div className="cursor-pointer"></div>
                </div>
              </div>
              <div id="Password">
                <p className="text-secondary font-semibold mb-2">Password</p>
                <div className="w-full bg-input_bg border border-solid border-input_border p-3 flex items-center gap-2 rounded-lg">
                  <input
                    type={isPwdShown ? "text" : "password"}
                    placeholder="Enter your password"
                    name="pwd"
                    className="bg-input_bg flex-1 outline-none text-sm lg:text-base"
                  />
                  <div className="cursor-pointer" onClick={showPwdHandler}>
                    <ion-icon name="eye-off-outline"></ion-icon>
                  </div>
                </div>
              </div>
              <a href="#" className="text-primary flex justify-end">
                Forgot your password?
              </a>
              <button
                type="submit"
                id="Login"
                className="bg-primary text-white rounded-md py-4 font-bold"
              >
                Login
              </button>
              <div className="flex items-center gap-4">
                <hr className="w-full" />
                <p className="text-[#AAAAAA]">Or</p>
                <hr className="w-full" />
              </div>
              <div id="Social_media" className="flex gap-4">
                <div className="flex-1 border border-solid border-input_border py-2 flex justify-center rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M3.15332 7.3455L6.43882 9.755C7.32782 7.554 9.48082 6 12.0003 6C13.5298 6 14.9213 6.577 15.9808 7.5195L18.8093 4.691C17.0233 3.0265 14.6343 2 12.0003 2C8.15932 2 4.82832 4.1685 3.15332 7.3455Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M12.0002 22.0003C14.5832 22.0003 16.9302 21.0118 18.7047 19.4043L15.6097 16.7853C14.5719 17.5745 13.3039 18.0014 12.0002 18.0003C9.39916 18.0003 7.19066 16.3418 6.35866 14.0273L3.09766 16.5398C4.75266 19.7783 8.11366 22.0003 12.0002 22.0003Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                      fill="#1976D2"
                    />
                  </svg>
                </div>
                <div className="flex-1 border border-solid border-input_border py-2 flex justify-center rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.001 2.00195C6.47895 2.00195 2.00195 6.47895 2.00195 12.001C2.00195 16.991 5.65795 21.127 10.439 21.88V14.892H7.89895V12.001H10.439V9.79795C10.439 7.28995 11.932 5.90695 14.215 5.90695C15.309 5.90695 16.455 6.10195 16.455 6.10195V8.56095H15.191C13.951 8.56095 13.563 9.33295 13.563 10.124V11.999H16.334L15.891 14.89H13.563V21.878C18.344 21.129 22 16.992 22 12.001C22 6.47895 17.523 2.00195 12.001 2.00195Z"
                      fill="#395185"
                    />
                  </svg>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
      {wrongModals && (
        <div
          className={`flex fixed inset-0 items-center justify-center z-50 outline-none modal w-full h-full bg-zinc-600/90`}
          id="myModals"
        >
          <div className="flex flex-col gap-7 modal-content bg-white p-8 rounded shadow-lg w-[300px] justify-center">
            <p className="text-red-700">{msg}</p>
            <div className="flex justify-end items-center gap-4 text-black">
              <button
                className="flex-1 hover:border-primary text-base border-2 border-solid border-input_border rounded-xl"
                id="closeModalBtn"
                onClick={setShowWrongModal}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
