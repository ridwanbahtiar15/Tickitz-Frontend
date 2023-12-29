import axios from "axios";

export const getScheduleDetail = (id, jwt) => {
    const getMovieDetailUrl = import.meta.env.VITE_BACKEND_HOST + "/order/" + id
    return axios.get(getMovieDetailUrl, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    })
}

export const createOrder = (body, jwt) => {
    const createOrderUrl = import.meta.env.VITE_BACKEND_HOST + "/order"
    return axios.post(createOrderUrl, body, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    })
}