import {apiKey} from "./api.key";

const baseURL = 'https://api.themoviedb.org/3';
export default baseURL;

export const urls = {
    movies: `discover/movie?api_key=${apiKey}`,
    byId: '/movie',
    genres: `genre/movie/list?api_key=${apiKey}`,
    byGenres: `discover/movie?api_key=${apiKey}&with_genres=`,
    popular: `/discover/movie?api_key=${apiKey}&primary_release_year=2022&&sort_by=popularity.desc&page=1`

}
