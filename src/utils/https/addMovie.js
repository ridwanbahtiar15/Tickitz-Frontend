import axios from "axios";

export const addMovie = (body, jwt) => {
    const addMovieUrl = import.meta.env.VITE_BACKEND_HOST + "/movie"
    return axios.post(addMovieUrl, body, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    })
}