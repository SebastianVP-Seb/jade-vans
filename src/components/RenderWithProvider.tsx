import React from 'react';
import { Provider } from 'react-redux';
import { stateMock } from './preloadStoreDefault';
import { RootState, setupStore } from '../storeTest/index';
import { render, RenderOptions as RenderOptionsReact } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

interface IRenderOptions extends RenderOptionsReact{
  preloadState?: RootState;
  store?: ReturnType<typeof setupStore>;
  // renderOptions?: RenderOptionsReact;
};

export const renderWithProvider = ( //utilizarlo en los tests
  component: React.ReactElement,
  {
    preloadState,
    store = setupStore(preloadState ? preloadState : stateMock),
    ...renderOptions
  }: IRenderOptions = {}
) => {
  const Wrapper: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );
  };

  //Para utilizar el Wrapper
  const renderComp = render(component, {
    wrapper: Wrapper,
    ...renderOptions
  })
  // renderComp ya regresa los métodos para buscar 
  // renderComp.findAllByAltText
  return {
    store, 
    ...render(component, {
      wrapper: Wrapper,
      ...renderComp
    }),
  };
};

//Para ejecutarlo: se le pasa el comp con opciones
// renderWithProvider(<Comp />, {
//   preloadState: stateMock,
//   store: setupStore({

//   })
// })