import axios from "axios";

export const checkToken = (jwt) => {
    const checkTokenUrl = import.meta.env.VITE_BACKEND_HOST + "/user/authorization"
    return axios.get(checkTokenUrl, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    })
}