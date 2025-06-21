import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error404, Home, List, Product, UserPage } from "@pages/index";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/products" element={<List />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);

export default App;
