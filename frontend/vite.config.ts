import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// This is dynamically processed for the GitHub Pages CI/CD.
const repoName = process.env.REPO_NAME || "";

export default defineConfig({
  base: `${repoName}`,
  plugins: [react(), reactRefresh()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
});
