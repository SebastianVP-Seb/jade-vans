import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';

ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
).render(App() //se pone así si no se ocupa este archivon con tsx
    // <App />
    // React.createElement('h1', null, 'iAmSebastian Jade' )
    // <>
        // <h1>iAmSebastian Jade</h1>
    // </>
);
