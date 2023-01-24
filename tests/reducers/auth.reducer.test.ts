import { authReducer } from '../../src/store/reducerTests/authReducer';

describe('test de auth reducer', () => {
    
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

    test('auth reducer', () => {
        const user = {
            ...initState.user,
            phone: '55 77 22 44'
        };
        //estado, acción
        const newState = authReducer(initState, { type: 'auth/login', payload: { user } }) //esto regresa un nuevo estado
        expect(newState.isLogged).toBeTruthy();
        expect(newState.user.phone).toEqual(user.phone);
    });

    test('auth reducer', () => {
        //estado, acción
        const newState = authReducer(initState, { type: 'auth/logout' }) //esto regresa un nuevo estado
        expect(newState.isLogged).toBeFalsy();
    });
});