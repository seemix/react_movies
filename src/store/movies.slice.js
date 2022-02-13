import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {movieService} from "../services/movie.service";

export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllmovies',
    async (page, {dispatch, rejectedWithValue}) => {
        try {
            return await movieService.getByPage(page)
        } catch (e) {
            // return rejectWithValue(e.response.data.detail);
        }
    }
)

export const getMovieById = createAsyncThunk(
    'movieSlice/getById',
    async (id, {dispatch, rejectedWithValue}) => {
        try {
            return await movieService.getById(id)
        } catch (e) {
            console.log('error')
        }
    }
)

export const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        page: 1,
        results: [],
        movie: {},
        total_pages: null,
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {

        [getAllMovies.pending]: (state) => {
            state.status = 'Loading';
            state.error = null
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'Fulfilled';
            state.results = action.payload.results;
            state.total_pages = action.payload.total_pages;
            state.page = action.payload.page;

        },
        [getAllMovies.rejected]: (state, action) => {
            state.error = action.payload;

        },

        [getMovieById.pending]: (state) => {
            state.status = 'Loading';
            state.error = null
        },
        [getMovieById.fulfilled]: (state, action) => {
            state.status = 'Fulfilled';
            state.movie = action.payload;

        },
        [getAllMovies.rejected]: (state, action) => {
            state.error = action.payload;
        },

    }
})

const movieStore = movieSlice.reducer;
export default movieStore