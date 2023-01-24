import React from 'react';
import { cleanup, render } from "@testing-library/react";
import Footer from '../../src/components/footer/Footer';

describe('Test de Footer', () => {
    const compRender = () => render(<Footer />);

    afterEach(()=>{
        cleanup(); //Limpia el montaje del componente
    });
    test('Debería montar el componente', () => {
        // const compRenderProps = (props) => (<Footer />); Si recibiera props
        // compRender.debug();
        const renderFooter = compRender();
        const button = renderFooter.queryByRole('button');
        expect(button).toBeInTheDocument();
        // const compFooter = compRender.getByRole('button');
        // expect(compFooter).toBeTruthy();
        // expect(compFooter).toBeInTheDocument();
    });
    test('Debería renderizar 4 anclas', () => {
        const compFooter = compRender();
        expect(compFooter.getAllByRole('link').length).toEqual(4);
    });
    test('Debería renderizar el texto del primer ancla', () => {
        const compFooter = compRender();
        expect(compFooter.queryByText('hola5')).toBeInTheDocument();
    });
});