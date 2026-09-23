import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/NewsMag/", // 👈 أضيفي هذا السطر بدقة (مع السلايدج في البداية والنهاية)
});
