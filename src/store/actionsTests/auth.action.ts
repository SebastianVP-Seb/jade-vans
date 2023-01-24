import { Dispatch } from '@reduxjs/toolkit';
import { authActions } from '../reducerTests/authReducer';

const userDommy = {
    email: '',
    id: '',
    token: '',
    phone: '',
    emailVerified: false,
    identity: {
        age: '',
        name: ''
    },
};

export const loginWithEmail =
    (credentials: any) => async (dispatch: Dispatch) => {
        try {
            dispatch(authActions.login({user: userDommy}))
            
        } catch (error) {
            console.error(error);
        };
};