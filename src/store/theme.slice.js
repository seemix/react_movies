import {createSlice} from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        darkMode: false
    },
    reducers: {
        changeTheme(state) {
            if (state.darkMode === true) state.darkMode = false
            else state.darkMode = true;
        }
    }
})
export const {changeTheme} = themeSlice.actions;
const themeStore = themeSlice.reducer;
export default themeStore