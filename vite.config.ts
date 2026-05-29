import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves from /CHWINSMockup/ when deployed via Actions;
// local dev serves from /.
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/CHWINSMockup/" : "/",
  plugins: [react()],
});
