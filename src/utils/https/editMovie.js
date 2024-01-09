import axios from "axios";

export const editMovie = (body, jwt, movie_id) => {
    const addMovieUrl = import.meta.env.VITE_BACKEND_HOST + "/movie/" + movie_id
    return axios.patch(addMovieUrl, body, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    })
}