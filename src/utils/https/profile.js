import axios from "axios";

export const getProfile = (jwt) => {
    const getProfileUrl = import.meta.env.VITE_BACKEND_HOST + "/user/profile"
    return axios.get(getProfileUrl, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    })
}