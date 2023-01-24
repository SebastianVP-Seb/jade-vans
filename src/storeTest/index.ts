import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from '../store/reducerTests/authReducer';
import { categoriesReducer } from '../store/reducerTests/categories.reducer';
import type { PreloadedState } from "@reduxjs/toolkit";
// import { RootState } from '../store/index';

const rootReducers = combineReducers({
    auth: authReducer,
    categories: categoriesReducer
});

export const setupStore = ( preloadedState?: RootState ) => {
    return configureStore({
        reducer: rootReducers,
        devTools: true,
        preloadedState
    });
};

export type RootState = PreloadedState<ReturnType<typeof rootReducers>>;
const store = setupStore();

export default store;