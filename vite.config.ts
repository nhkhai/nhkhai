import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/my-portfolio-website/",
  base: process.env.VITE_BASE_PATH || "/", // Use environment variable or default to '/'.
  plugins: [react()],
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    port: 8080,
    strictPort: true,
    // host: true,
    // host: "0.0.0.0", // Use host: '0.0.0.0' for listening on all interfaces.
    // origin: "https://0.0.0.0:8080",
  },
});
