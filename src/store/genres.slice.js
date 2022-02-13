import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {genreService} from "../services/genre.service";

export const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async (_, {dispatch, rejectedWithValue}) => {
        try {
            return await genreService.getAllGenres()
        } catch (e) {

        }
    }
)

export const getByGenres = createAsyncThunk(
    'genreSlice/getByGenres',
    async ({currentGenre, currentPage}, {dispatch, rejectedWithValue}) => {
        //console.log(currentGenre);
        try {
            return await genreService.getByGenres(currentGenre, currentPage)
        } catch (e) {
            console.log(e);
        }
    }
)
export const genreSlice = createSlice({
    name: 'genres',
    initialState: {
        allGenres: [],
        selectedGenres: [],
        currentGenre: null,
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getAllGenres.pending]: (state) => {
            state.status = 'Loading';
            state.error = null
        },
        [getAllGenres.fulfilled]: (state, action) => {
            state.status = 'Fulfilled';
            state.allGenres = action.payload.genres;
            state.total_pages = action.payload.total_pages;
            state.page = action.payload.page;
        },
        [getAllGenres.rejected]: (state, action) => {
            state.error = action.payload;

        },

        [getByGenres.pending]: (state) => {
            state.status = 'Loading';
            state.error = null
        },
        [getByGenres.fulfilled]: (state, action) => {
            state.status = 'Fulfilled';
            state.selectedGenres = action.payload.results;
            state.total_pages = action.payload.total_pages;
            state.page = action.payload.page;

        },
        [getByGenres.rejected]: (state, action) => {
            state.error = action.payload;
        },


    }
})

const genreStore = genreSlice.reducer;
export default genreStore