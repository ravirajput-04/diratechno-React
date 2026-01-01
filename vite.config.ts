import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "dist/stats.html",
      open: true,
    }),
  ],
  server: {
    proxy: {
      "/api/contact": {
        target: "https://j5xjsa3taj.execute-api.ap-south-1.amazonaws.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/contact/, "/contact"),
        secure: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          form: ["react-hook-form", "@hookform/resolvers", "yup"],
          swiper: ["swiper"],
          vendor: ["react-burger-menu", "react-cookie"],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
