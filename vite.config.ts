import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src/client"),
      "@shared": path.resolve(import.meta.dirname, "src/shared")
    }
  },
  server: {
    proxy: {
      "/manus-storage": {
        target: "https://artstore-c6jws2ww.manus.space",
        changeOrigin: true
      }
    }
  }
});
