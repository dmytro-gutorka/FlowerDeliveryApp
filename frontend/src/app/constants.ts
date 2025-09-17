// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;

export const PRODUCT_TYPE = {
  BOUQUET: 'bouquet',
  SINGLE_FLOWER: 'single_flower',
} as const;

export const PRODUCT_SORT_BY = {
  PRICE_ASC: 'priceCents.asc',
  PRICE_DESC: 'priceCents.desc',
  DATE_ASC: 'createdAt.asc',
  DATE_DESC: 'createdAt.desc',
} as const;
