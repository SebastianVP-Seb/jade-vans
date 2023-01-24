import { RootState } from '../storeTest/index';

export const stateMock = {
    auth: {
        user: {
        email: '',
        id: '',
        token: '',
        phone: '',
        emailVerified: false,
        identity: {
            age: '',
            name: ''
        }
        },
        isLogged: true
    },
    categories: { categories: [] }
};