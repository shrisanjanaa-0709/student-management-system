
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    host: "0.0.0.0",
    allowedHosts: ["c6ed4cb0e3c3-0af408db-5300.ws6.app"]
  }
});