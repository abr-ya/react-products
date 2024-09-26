import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { setupStore } from "./app/store.ts";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
);
