export interface IProduct {
  _id: string;
  name: string;
  price: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IGetProductsPayload {
  page: number;
}

export interface IProductCreatePayload {
  name: string;
  price: number;
  image: string;
}
