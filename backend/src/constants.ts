export const PRODUCTS_PAGE_PAGINATION = 10

export const PRODUCT_SORT_BY = {
    PRICE_ASC: 'priceCents.asc',
    PRICE_DESC: 'priceCents.desc',
    DATE_ASC: 'createdAt.asc',
    DATE_DESC: 'createdAt.desc',
} as const;

export const PRODUCT_TYPE = {
    BOUQUET: "bouquet",
    SINGLE_FLOWER: "single_flower"
} as const