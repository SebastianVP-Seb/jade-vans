import { loginWithEmail } from "../../src/store/actionsTests/auth.action";
import { setupStore } from "../../src/storeTest";

describe('test para action auth', () => {

    const store = setupStore();

    test('debería hacer la acción de login con email', () => {

        console.log(store.getState().auth);
        expect(store.getState().auth.isLogged).toBeFalsy();
        store.dispatch(
            loginWithEmail({
                email: '',
                password: ''
            })
        );
        console.log(store.getState().auth); //islogged está en true, el estado cambió
        expect(store.getState().auth.isLogged).toBeTruthy();
        console.log(store.getState());

    });
});