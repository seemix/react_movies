import axiosService from "./axios.service";
import {urls} from "../config/urls";
import {apiKey} from "../config/api.key";

export const movieService = {
    getAll: () => axiosService.get(urls.movies).then(value => value.data),
    getByPage: (page) => axiosService.get(`${urls.movies}&page=${page}`).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.byId}/${id}?api_key=${apiKey}`).then(value => value.data),
    getPopular: () => axiosService.get(urls.popular).then(value => value.data)
}
