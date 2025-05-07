// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // <-- AÑADIDO

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
        '@layouts': path.resolve('./src/layouts'),
        '@pages': path.resolve('./src/pages'),
        '@utils': path.resolve('./src/utils'),
        '@styles': path.resolve('./src/css'),
        '@assets': path.resolve('./src/assets'),
        '@public': path.resolve('./public'),
        '@Img': path.resolve('./src/Img'),
      }
    }
  },
  experimental: {
    svg: true
  },
});
