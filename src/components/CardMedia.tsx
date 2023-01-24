import React from 'react';
import styled from 'styled-components';

export interface ICardMedia {
    imgUrl: string;
    alt: string;
    height?: string;
    width?: string;
};

export const Image = styled.img<Pick<ICardMedia, "height" | "width">>`
    height: ${props => props.height ? props.height : "200px"};
    width: ${props => props.width ? props.width : "auto"};
`;

const CardMedia: React.FC<ICardMedia> = ({alt, imgUrl, height, width}) => {
  return (
    <Image src={imgUrl} alt={alt} height={height} width={width} data-testid="img_card" />
  );
};

export default CardMedia;