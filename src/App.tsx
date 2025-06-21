import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error404, HomePage, ProductListPage, ProductPage, UserPage } from "@pages/index";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);

export default App;
