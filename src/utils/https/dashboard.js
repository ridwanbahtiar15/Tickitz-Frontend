import axios from "axios";

export const getDataStatusMovie = (statMovieUrl, jwt) => {
    return axios.get(statMovieUrl, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    })
}