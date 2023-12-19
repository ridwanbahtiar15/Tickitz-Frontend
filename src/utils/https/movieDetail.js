import axios from "axios";

export const getMovieDetail = (url, jwt) => {
    return axios.get(url, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    })
}

export const getMovieSchedule = (movie_id, jwt) => {
    const getMovieDetailUrl = import.meta.env.VITE_BACKEND_HOST + "/movie/schedule/" + movie_id
    return axios.get(getMovieDetailUrl, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    })
}