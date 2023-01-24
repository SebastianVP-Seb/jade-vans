import React from 'react';
import { render } from "@testing-library/react";
import CardMedia, { Image } from "../../src/components/CardMedia";
import { ICardMedia } from '../../src/components/CardMedia';

describe('Test de CardMedia', () => {

    const props: ICardMedia = {
        alt: 'test',
        imgUrl: 'https://ss423.liverpool.com.mx/xl/1119972228.jpg'
    };

    const compRender = (props: ICardMedia) => render(
        <CardMedia
            alt={props.alt}
            imgUrl={props.imgUrl}
        />
    );

    test('Debería montar el comp', () => {
        const { getByRole, getByTestId, queryByTestId } = compRender(props);

        getByRole('img')
        getByTestId('img_card')
        expect(queryByTestId('img_card')).toBeInTheDocument();
    });

    test('Debería tener las props que se le manden', () => {
        const {queryByTestId} = compRender(props);
        expect(queryByTestId('img_card')).toHaveAttribute('src', props.imgUrl);
        expect(queryByTestId('img_card')).toHaveAttribute('alt', props.alt);
    });

    test('Test de Image verificando que muestre las props que se le mandan', () => {
        const propsImageStyled = {
            height: '3rem',
            width: '4rem'
        };

        const { queryByRole } = render(<Image {...propsImageStyled} />);
        expect(queryByRole('img')).toHaveStyle(`height: ${propsImageStyled.height}`);
        expect(queryByRole('img')).toHaveStyle(`width: ${propsImageStyled.width}`);

        //Utilizando jest-styled-components
        expect(queryByRole('img')).toHaveStyleRule('height', propsImageStyled.height);
        expect(queryByRole('img')).toHaveStyleRule('width', propsImageStyled.width);
    });

    test('Test de Image verificando que tenga valores default si las props no se le mandan', () => {
        const { queryByRole } = render(<Image />);
        expect(queryByRole('img')).toHaveStyleRule('height', '200px');
        expect(queryByRole('img')).toHaveStyleRule('width', 'auto');
    });
});