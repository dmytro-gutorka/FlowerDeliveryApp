export interface Flower {
  id: number;
  description: string;
  name: string;
  price: number;
  shop: string;
  imagePath: string;
  isBouquet: boolean;
  isFavorite: boolean;
}

export type FlowerCartItem = Omit<Flower, 'isFavorite' | 'isBouquet' | 'shop'> & {
  totalPrice: number;
  quantity: number;
};
