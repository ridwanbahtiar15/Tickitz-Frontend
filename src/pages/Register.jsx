import React, { useState } from 'react'
import getImageUrl from "../utils/imageGetter";
import { userAction } from '../redux/slices/user';
import { useSelector, useDispatch } from 'react-redux';
import { activateUser } from '../utils/https/register';
import { useNavigate } from 'react-router-dom';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [isPwdShown, setIsPwdShown] = useState(false);
  const showPwdHandler = () => {
    setIsPwdShown((state) => !state);
  }
  const [wrongOtp, setWrongOtp] = useState(false)
  const [email, setEmail] = useState("")
  const [stepRegister, setStepRegister] = useState(1);
  const submitRegister= (e) => {
    e.preventDefault()
    const {registerThunk} = userAction
    const body = {
      email: e.target.email.value,
      password: e.target.pwd.value,
    };
    setEmail(e.target.email.value)
    dispatch(registerThunk(body))
    setStepRegister(2)
  }
  const submitActivate= (e) => {
    e.preventDefault()
    setWrongOtp(false)
    const body = {
      email: email,
      otp: parseInt(e.target.otp.value),
    };
    console.log(body)
    activateUser(body)
    .then((res) => {
      setStepRegister(3)
    })
    .catch((err) => {
      console.log(err)
      setWrongOtp(true)
    })
  }
  return (
    <>
    <main className="w-full h-screen bg-[url('https://res.cloudinary.com/dhxdnljzm/image/upload/v1702915021/background_wqv5hp.png')] bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full bg-[#00000099] flex items-center justify-center px-4 py-5">
        <div id='White_box' className='font-mulish pb-10'>
            <img src={getImageUrl("tickitz-white", "png")} alt="" />
            <div className='bg-white flex flex-col gap-4 px-14 py-14 rounded-md text-sm h-[569px]'>
                <div className='text-sm font-semibold flex justify-between'>
                  <div id='Step_1' className='flex flex-col items-center'>
                    <div className='h-[47px] w-[47px] rounded-full bg-primary flex justify-center items-center text-white'>
                      <p>1</p>
                    </div>
                    <p>Fill Form</p>
                  </div>
                  <div id='1_to_2' className='pt-7'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="1" viewBox="0 0 70 1" fill="none">
                      <path d="M0 0.5H70" stroke={stepRegister >= 2 ? "#1D4ED8" : "#A0A3BD"} strokeDasharray="8 8"/>
                    </svg>
                  </div>
                  <div id='Step_2' className='flex flex-col items-center'>
                    <div className={`h-[47px] w-[47px] rounded-full ${stepRegister >= 2 ? "bg-primary" : "bg-backgorund_gray"} flex justify-center items-center text-white`}>
                      <p>2</p>
                    </div>
                    <p>Activate</p>
                  </div>
                  <div id='2_to_3' className='pt-7'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="1" viewBox="0 0 70 1" fill="none">
                      <path d="M0 0.5H70" stroke={stepRegister >= 3 ? "#1D4ED8" : "#A0A3BD"} strokeDasharray="8 8"/>
                    </svg>
                  </div>
                  <div id='Step_3' className='flex flex-col items-center'>
                    <div className={`h-[47px] w-[47px] rounded-full ${stepRegister >= 3 ? "bg-primary" : "bg-backgorund_gray"} flex justify-center items-center text-white`}>
                      <p>3</p>
                    </div>
                    <p>Done</p>
                  </div>
                </div>
                {stepRegister === 1 && 
                <form onSubmit={submitRegister} className=' flex flex-col gap-4'>
                  <div id='Email'>
                      <p>Email</p>
                      <div className="w-full bg-input_bg border border-solid border-input_border p-3 flex items-center gap-2 rounded-lg">
                          <input type="text" placeholder="Enter your email" name='email'  className='bg-input_bg flex-1 outline-none text-sm lg:text-base'/>          
                          <div className='cursor-pointer'>
                          </div>
                      </div>
                  </div>
                  <div id='Password'>
                      <p>Password</p>
                      <div className="w-full bg-input_bg border border-solid border-input_border p-3 flex items-center gap-2 rounded-lg">
                          <input type={isPwdShown ? "text" : "password"} placeholder="Enter your password" name='pwd'  className='bg-input_bg flex-1 outline-none text-sm lg:text-base'/>          
                          <div className='cursor-pointer' onClick={showPwdHandler}>
                              <ion-icon name="eye-off-outline"></ion-icon>
                          </div>
                      </div>
                  </div>
                  <div className='flex gap-2'>
                    <input type="checkbox" name="terms" id="terms" />
                    <p>I agree to terms & conditions</p>
                  </div>
                  <button type='submit' id='Login' className='bg-primary text-white rounded-md py-2'>
                      Join for free now
                  </button>
                  <div className='w-full flex justify-center'>
                    <div className='font-semibold flex gap-2'>
                      <p>Already have an account?</p>
                      <p className='cursor-pointer text-primary'>Log In</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                      <hr  className='w-full'/>
                      <p>Or</p>  
                      <hr  className='w-full'/>
                  </div>
                  <div id='Social_media' className='flex gap-4 font-semibold'>
                      <div className='flex-1 border border-solid border-input_border py-2 flex gap-2 justify-center rounded-md items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
                          <path d="M3.15332 7.3455L6.43882 9.755C7.32782 7.554 9.48082 6 12.0003 6C13.5298 6 14.9213 6.577 15.9808 7.5195L18.8093 4.691C17.0233 3.0265 14.6343 2 12.0003 2C8.15932 2 4.82832 4.1685 3.15332 7.3455Z" fill="#FF3D00"/>
                          <path d="M12.0002 22.0003C14.5832 22.0003 16.9302 21.0118 18.7047 19.4043L15.6097 16.7853C14.5719 17.5745 13.3039 18.0014 12.0002 18.0003C9.39916 18.0003 7.19066 16.3418 6.35866 14.0273L3.09766 16.5398C4.75266 19.7783 8.11366 22.0003 12.0002 22.0003Z" fill="#4CAF50"/>
                          <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
                          </svg>
                          <p className='hidden sm:block'>Google</p>
                      </div>
                      <div className='flex-1 border border-solid border-input_border py-2 flex gap-2 justify-center rounded-md items-center'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12.001 2.00195C6.47895 2.00195 2.00195 6.47895 2.00195 12.001C2.00195 16.991 5.65795 21.127 10.439 21.88V14.892H7.89895V12.001H10.439V9.79795C10.439 7.28995 11.932 5.90695 14.215 5.90695C15.309 5.90695 16.455 6.10195 16.455 6.10195V8.56095H15.191C13.951 8.56095 13.563 9.33295 13.563 10.124V11.999H16.334L15.891 14.89H13.563V21.878C18.344 21.129 22 16.992 22 12.001C22 6.47895 17.523 2.00195 12.001 2.00195Z" fill="#395185"/>
                          </svg>
                          <p className='hidden sm:block'>Facebook</p>
                      </div>
                  </div>
                </form>}
                {stepRegister === 2 && 
                <form onSubmit={submitActivate} className=' flex flex-col gap-4'>
                  <div id='OTP' className='flex flex-col gap-4'>
                      <p>Insert OTP to activate your account</p>
                      <div className="w-full bg-input_bg border border-solid border-input_border p-3 flex items-center gap-2 rounded-lg">
                          <input type="number" placeholder="Enter your otp" name='otp'  className='bg-input_bg flex-1 outline-none text-sm lg:text-base'/>          
                          <div className='cursor-pointer'>
                          </div>
                      </div>
                  </div>
                  {wrongOtp && <p className='text-red-600'>Your OTP is wrong</p>}
                  <button type='submit' id='Login' className='bg-primary text-white rounded-md py-2'>
                      Submit
                  </button>
                </form>}
                {stepRegister === 3 && 
                <div className=' flex flex-col gap-4'>
                    <p className='text-lg font-bold'>You are successfully registered</p>
                    <button id='Login' className='bg-primary text-white rounded-md py-2' onClick={() => {navigate("/login")}}>
                      Go to login page
                  </button>
                </div>
                }
            </div>
        </div>
        </div>
    </main>
    </>
  )
}

export default Register
