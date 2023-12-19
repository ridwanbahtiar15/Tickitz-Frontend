import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_HOST + "/auth"

export const registerUser = (body) => {
    const registerUrl = baseUrl + "/register"
    return axios.post(registerUrl, body)
}

export const activateUser = (body) => {
    const registerUrl = baseUrl + "/activate"
    return axios.post(registerUrl, body)
}
