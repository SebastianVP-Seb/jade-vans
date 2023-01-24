import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../src/components/header/Header';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe.skip('Testing Header', () => {

    const initialState = [
        {
            "id": "b05f831c-f0b2-4829-b43f-b834ab29b759",
            "added": false,
            "name": "VANS1",
            "description": "descripción 1",
            "price": 500,
            "size": 5,
            "imgUrl": "https://vansmx.vtexassets.com/arquivos/ids/768899-800-auto?v=638011201628230000&width=800&height=auto&aspect=true"
        }
    ];
    const mockStore = configureStore();
    let store;

    test.skip('Show component in dom', () => {
        store = mockStore(initialState);
        const componentRender = render(
            <Provider store={store} >
                <Header />
            </Provider>
        );
        componentRender.debug();
    });
});