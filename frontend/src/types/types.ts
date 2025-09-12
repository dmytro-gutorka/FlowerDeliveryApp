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

export interface CartItem<T> {
  product: T;
  totalPrice: number;
  quantity: number;
}
