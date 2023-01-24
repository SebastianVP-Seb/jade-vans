import React from 'react';
import { render } from "@testing-library/react";
import SelectPage from "../../src/components/selectPage/SelectPage";

describe.skip('Testing de SelectPage', () => {
    test('Debería montar el componente', () => {
        const compRender = render(<SelectPage />);
        compRender.debug()
    });
});