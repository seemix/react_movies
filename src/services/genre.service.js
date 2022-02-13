import axiosService from "./axios.service";
import {urls} from "../config/urls";

export const genreService = {
    getAllGenres: () => axiosService.get(urls.genres).then(value => value.data),
    getByGenres: (genres, page) => axiosService.get(urls.byGenres + genres + '&page=' + page).then(value => value.data)
}