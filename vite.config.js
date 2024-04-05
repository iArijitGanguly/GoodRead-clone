import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      pages: "/src/pages",
      assets: "/src/assets",
      layouts: "/src/layouts",
      configs: "/src/config",
      routes: "/src/routes",
      redux: "/src/redux",
      helpers: "/src/helpers"
    }
  }
})
