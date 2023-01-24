import { createSlice } from '@reduxjs/toolkit';
const initState = {
    categories: []
};

const CategoriesSlice = createSlice({
    initialState: initState,
    name: 'categories',
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
    },
});

export const categoriesActions = CategoriesSlice.actions;
export const categoriesReducer = CategoriesSlice.reducer;