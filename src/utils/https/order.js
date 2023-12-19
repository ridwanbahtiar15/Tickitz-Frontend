import axios from "axios";

export const getScheduleDetail = (id, jwt) => {
    const getMovieDetailUrl = import.meta.env.VITE_BACKEND_HOST + "/order/" + id
    return axios.get(getMovieDetailUrl, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    })
}