import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error404, Home, List, Product } from "@pages/index";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<List />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);

export default App;
