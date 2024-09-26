import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      { find: "@api", replacement: resolve(__dirname, "src/api") },
      { find: "@app", replacement: resolve(__dirname, "src/app") },
      { find: "@components", replacement: resolve(__dirname, "src/components") },
      { find: "@hooks", replacement: resolve(__dirname, "src/hooks") },
      { find: "@pages", replacement: resolve(__dirname, "src/pages") },
    ],
  },
});
