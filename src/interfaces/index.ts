export interface ICardContainer {
  imgUrl: string;
  text: string;
};

export interface IItemProduct {
  id?: string;
  added?: boolean;
  name?: string;
  imgUrl?: string;
  description?: string;
  price?: number;
  size?: number;
  imagesArray?: Array<string>;
};

export interface ICardItems {
  item: keyof IItemProduct;
};
