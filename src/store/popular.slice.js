import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {movieService} from "../services/movie.service";

export const getPopular = createAsyncThunk(
    'genreSlice/getAllGenres',
    async (_, {dispatch, rejectedWithValue}) => {
        try {
            return await movieService.getPopular()
        } catch (e) {
            console.log(e);
        }
    }
)


export const popularSlice = createSlice({
    name: 'popular',
    initialState: {
        popular: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getPopular.pending]: (state) => {
            state.status = 'Loading';
            state.error = null
        },
        [getPopular.fulfilled]: (state, action) => {
            state.status = 'Fulfilled';
            state.popular = action.payload.results;
        },
        [getPopular.rejected]: (state, action) => {
            state.error = action.payload;
        }

    }
})
const popularStore = popularSlice.reducer;
export default popularStore