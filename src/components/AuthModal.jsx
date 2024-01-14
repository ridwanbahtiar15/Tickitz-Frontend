import React, {useEffect, useState} from 'react'
import { checkToken } from '../utils/https/checkAuth';
import { useSelector, useDispatch } from 'react-redux';
import { userAction } from "../redux/slices/user";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function AuthModal(props) {
  const user = useSelector((state) => state.user.userInfo)
    const token = user.token
    const role = user.role
    const [accessDenied, setAccessDenied]= useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState("")

    useEffect(() => {
    checkToken(token)
    .then((res) => {
      setData(res.data.message)
    })
    .catch((err) => {
        console.log(err)
        if (err.response.status === 401) {
          setAccessDenied(true)
        }
    })
    }, [])

    const onLogOutHandler = () => {
      const { logoutThunk } = userAction;
      dispatch(
        logoutThunk({
          token,
          cb: () => {
            navigate("/login");
            setAccessDenied(false)
          },
        })
      );
    };

    if (props.role === "Admin") {
      if (role !== "Admin") {
        return <Navigate to="/" replace={true} />;
      }
    }

  return (
    <>
    {accessDenied && <div
          className={`flex fixed inset-0 items-center justify-center z-10 outline-none w-full h-full bg-zinc-600/80`}
          id="myModals">
          <div className="flex flex-col gap-7 modal-content bg-white p-8 rounded shadow-lg w-[300px] justify-center">
            <p className="text-red-700">You are out of session, Please login again</p>
            <div className="flex justify-end items-center gap-4 text-black">
              <button
                className="flex-1 hover:border-primary text-base border-2 border-solid border-input_border rounded-xl"
                id="closeModalBtn" onClick={onLogOutHandler}
              >
                OK
              </button>
            </div>
          </div>
        </div>}
    </>
  )
}

export default AuthModal
