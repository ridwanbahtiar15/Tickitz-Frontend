import axios from "axios";

export const getAllMovie = (jwt, url) => {
    return axios.get(url, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    })
}