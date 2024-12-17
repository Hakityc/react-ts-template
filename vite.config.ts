import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      //设置别名以便src下的文件可以使用@找到
      "@": resolve(__dirname, "src"),
    },
  },
});
