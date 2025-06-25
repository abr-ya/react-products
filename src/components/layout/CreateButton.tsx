import { Button, useDisclosure } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { CreateModal, ProductForm } from "..";
import { IProductCreatePayload } from "@/pages/ProductListPage/productContracts";
import { productApi } from "@/pages/ProductListPage/productApi";
import { useLocation } from "react-router-dom";

const CreateButton = () => {
  const location = useLocation();
  const pagePath = location.pathname;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [createProductMutation, { isLoading: productCreating }] = productApi.useCreateProductMutation();

  const productCreateHandler = (data: IProductCreatePayload) => {
    console.log("create product:", data);
    createProductMutation(data)
      .unwrap()
      .then((res) => console.log("created: ", res))
      .catch((err) => console.log(err));
  };

  const modalRender = (title: string, isLoading: boolean, form: JSX.Element) => (
    <CreateModal title={title} isOpen={isOpen} onClose={onClose} height="400px" isLoading={isLoading}>
      {form}
    </CreateModal>
  );

  return (
    <>
      <Button onClick={onOpen}>
        <PlusSquareIcon fontSize={20} />
      </Button>
      {pagePath === "/products"
        ? modalRender(
            "Create Product",
            productCreating,
            <ProductForm onModalApply={productCreateHandler} onModalClose={onClose} />,
          )
        : modalRender("Create Modal", false, <span>Нет создания на этой странице</span>)}
    </>
  );
};

export default CreateButton;
