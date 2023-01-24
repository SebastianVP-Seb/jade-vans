import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
// import App from './AppExample';
import './styles/index.scss';
import router from './router/index';
import { Provider } from 'react-redux';
import { store } from './store';
// import { pathBase } from './constants/constans';

ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
// ).render(App() //se pone así si no se ocupa este archivon con tsx
    // <App />
    // React.createElement('h1', null, 'iAmSebastian Jade' )
    // <>
        // <h1>iAmSebastian Jade</h1>
    // </>
    //En este caso App.tsx ya no se ocupa
).render(<Provider store={store} >
        <RouterProvider router={router} />
    </Provider>);
