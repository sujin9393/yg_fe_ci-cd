import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  base: "/",
  server: {
    port: 3000, // 여기서 포트를 3000으로 명시
    proxy: {
      "/api": {
        target: "https://moongsan.com", // Spring Boot 서버 주소
        changeOrigin: true,
      },
    },
  },
});
