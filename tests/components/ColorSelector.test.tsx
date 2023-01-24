import React from 'react';
import { fireEvent, render } from "@testing-library/react";
import ColorSelector from "../../src/components/ColorSelector";

describe('Test de colorSelector', () => {

    test('montando comp', () => {
        // const compRender = render(<ColorSelector />);
        const funcionMock = jest
            .fn()
            .mockImplementation((value: string) => {
                console.log(value.toUpperCase);
            });
        funcionMock('hello world');
        funcionMock('bye world');

        // const funcionMock = jest.fn();
        
        const { getByRole } = render(<ColorSelector />);
        fireEvent.click(getByRole('button'));

        console.log(funcionMock.mock.calls); //veces que la función fue llamada, de acuerdo a la longitud del 
        //arreglo, se determina cuántas veces la f fue llamada
        expect(funcionMock.mock.calls.length).toEqual(2);
        expect(funcionMock).toBeCalledTimes(2);
        expect(funcionMock).toBeCalled();
        // expect(funcionMock).toBeCalledWith('argumento');
    });
});