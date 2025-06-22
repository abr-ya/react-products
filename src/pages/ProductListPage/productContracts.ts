export interface IProduct {
  id: string;
  name: string;
  price: number | null;
  kkal: number;
  createdAt: Date;
}

export interface IGetProductsPayload {
  page: number;
}

export interface IProductCreatePayload {
  name: string;
  price: number;
  kkal: number;
}
