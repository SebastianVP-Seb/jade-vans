import { createSlice } from '@reduxjs/toolkit';
const initState = {
    user: {
        email: '',
        id: '',
        token: '',
        phone: '',
        emailVerified: false,
        identity: {
            age: '',
            name: ''
        },
    },
    isLogged: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.isLogged = true;
        },
        logout: (state) => {
            state.user = {...initState.user};
            state.isLogged = false;
        },
    },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
