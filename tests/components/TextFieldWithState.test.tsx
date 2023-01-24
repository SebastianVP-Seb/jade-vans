import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextFieldWithState, { ITextField } from '../../src/components/TextFieldWithState';

describe('Test de text field con state', () => {

    //se definen las props
    const props: ITextField = {
        label: 'Hello world'
    };

    const compRender = (props: ITextField) => render(<TextFieldWithState {...props} />);

    test('montaje del comp', () => {
        const { getByText, queryByRole } = compRender(props);
        // expect(getByTestId('textField_id')).toBeInTheDocument();
        expect(getByText('Hello world')).toBeInTheDocument();
        expect(queryByRole('textbox')).toBeInTheDocument();
    });

    test('test de onChange', () => {
        const valueOnChange = 'Holaa';
        const { getByRole, debug } = compRender({label: ''});
        // debug(); //antes de hacer el onChange
        fireEvent.change(getByRole('textbox'), {
            target: {
                value: valueOnChange
            }
        });
        // debug(); //después de hacer el onChange
        expect(getByRole('textbox')).toHaveAttribute('value', valueOnChange);
    });
});