export interface BaseItem {
  id: number;
  name: string;
  shop?: string;
  price: number;
  imagePath?: string;
  isFavorite: boolean;
  description: string;
}

export interface FlowerItem extends BaseItem {
  isBouquet: boolean;
}

export type CartItem<T> = T & {
  lineTotal: number;
  quantity: number;
};

export type FlowerCartItem = CartItem<FlowerItem>;

export interface IShop {
  address: string;
  createdAt: string;
  id: string;
  imagePath: string;
  lan: string;
  lat: string;
  name: string;
  favorites?: never;
}
