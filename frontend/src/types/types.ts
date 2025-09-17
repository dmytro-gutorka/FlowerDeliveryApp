import { PRODUCT_SORT_BY, type PRODUCT_TYPE } from '../app/constants.ts';

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

export type ICartItem<T> = T & {
  lineTotal: number;
  quantity: number;
};

export type FlowerCartItem = ICartItem<FlowerItem>;

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

export interface PaginatedResponse<T> {
  results: T;
  page: number;
  totalPages: number;
  totalResults: number;
}

export type ProductType = (typeof PRODUCT_TYPE)[keyof typeof PRODUCT_TYPE];

export interface ProductItem {
  offerId: string;
  isActive: boolean;
  priceCents: number;
  stock: number;
  description: string;
  isFavorite: boolean;
  imagePath: string;
  title: string;
  shopName: string;
  type: Uppercase<ProductType>;
  shopId: string;
  productId: string;
}

export type SortTypes = (typeof PRODUCT_SORT_BY)[keyof typeof PRODUCT_SORT_BY];
