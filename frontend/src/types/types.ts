export interface BaseItem {
  id: number;
  name: string;
  description: string;
  price: number;
  shop?: string;
  imagePath?: string;
  isFavorite: boolean;
}

export interface FlowerItem extends BaseItem {
  isBouquet: boolean;
}

export type CartItem<T> = T & {
  totalPrice: number;
  quantity: number;
};

export type FlowerCartItem = CartItem<FlowerItem>;
