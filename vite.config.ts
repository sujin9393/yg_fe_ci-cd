import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  base: "./",
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080/", // Spring Boot 서버 주소
        changeOrigin: true,
      },
    },
  },
});
