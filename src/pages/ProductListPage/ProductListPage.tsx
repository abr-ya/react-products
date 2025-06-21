import { productApi } from "./productApi";

const ProductListPage = () => {
  const { data, isLoading } = productApi.useGetProductsListQuery({ page: 1 });

  console.log(isLoading, data);

  return <div>ProductListPage</div>;
};

export default ProductListPage;
