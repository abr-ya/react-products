import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";

import {
  Error404,
  HikingListPage,
  HikingPage,
  HomePage,
  ProductListPage,
  RecipeListPage,
  RecipePage,
  UserPage,
} from "@pages/index";
import { Footer, Header } from "@components/index";
import { HEIGHT } from "./constants/ui";

const App = () => (
  <BrowserRouter>
    <Box minH="100vh" w="100%" bg={useColorModeValue("gray.100", "gray.900")} px={5}>
      <Header />
      <Box as="main" h={`calc(100vh - ${HEIGHT.footer + HEIGHT.header}px)`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/recipes" element={<RecipeListPage />} />
          <Route path="/recipes/:id" element={<RecipePage />} />
          <Route path="/hikings/:id" element={<HikingPage />} />
          <Route path="/hikings/" element={<HikingListPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  </BrowserRouter>
);

export default App;
