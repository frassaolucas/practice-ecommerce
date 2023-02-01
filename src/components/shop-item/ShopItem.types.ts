export type ShopItemProps = {
  data: ProductData;
  onChangeQuantity: (quantity: number) => any;
};

export type UseShopItemProps = {
  data: ProductData;
};

type ProductData = {
  image: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
  quantity: number;
};
