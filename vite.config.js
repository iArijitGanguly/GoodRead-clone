import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      Components: "/src/Components",
      Pages: "/src/Pages",
      Assets: "/src/Assets",
      Layouts: "/src/Layouts",
      Configs: "/src/Config",
      Routes: "/src/Routes",
      Redux: "/src/Redux",
      Helpers: "/src/Helpers"
    }
  }
})
