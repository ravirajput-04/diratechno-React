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
      "/api/career": {
        target: "https://j5xjsa3taj.execute-api.ap-south-1.amazonaws.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/career/, "/career"),
        secure: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React core
          if (id.includes("react") || id.includes("react-dom")) {
            return "react";
          }
          // Router
          if (id.includes("react-router")) {
            return "router";
          }
          // Form libraries
          if (
            id.includes("react-hook-form") ||
            id.includes("@hookform/resolvers") ||
            id.includes("yup")
          ) {
            return "form";
          }
          // Swiper
          if (id.includes("swiper")) {
            return "swiper";
          }
          // HTTP client
          if (id.includes("axios")) {
            return "axios";
          }
          // Toast notifications
          if (id.includes("react-toastify")) {
            return "toastify";
          }
          // Phone input
          if (id.includes("react-phone-number-input")) {
            return "phone-input";
          }
          // jQuery and related
          if (id.includes("jquery") || id.includes("isotope") || id.includes("masonry")) {
            return "jquery-vendor";
          }
          // Other vendor libraries
          if (
            id.includes("node_modules") &&
            !id.includes("react") &&
            !id.includes("react-dom") &&
            !id.includes("react-router") &&
            !id.includes("react-hook-form") &&
            !id.includes("@hookform") &&
            !id.includes("yup") &&
            !id.includes("swiper") &&
            !id.includes("axios") &&
            !id.includes("react-toastify") &&
            !id.includes("react-phone-number-input") &&
            !id.includes("jquery") &&
            !id.includes("isotope") &&
            !id.includes("masonry")
          ) {
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 800,
  },
});
