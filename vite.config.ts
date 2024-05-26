import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/my-portfolio-website/",
  // base: process.env.VITE_BASE || "/",
  plugins: [react()],
});
