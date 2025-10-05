import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Fonts from "unplugin-fonts/vite";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ["vue"],
      dirs: ["src/core/components", "src/modules/**/components"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/types/components.d.ts",
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      dirs: [
        "src/modules/**/composables",
        "src/modules/**/store",
        "src/core/composables",
        {
          glob: "src/modules/**/store",
          types: true,
        },
      ],
      dts: "src/types/auto-imports.d.ts",
      vueTemplate: true,
    }),

    // https://github.com/cssninjaStudio/unplugin-fonts
    Fonts({
      google: {
        // Adjust families and weights as needed
        families: [
          {
            name: "Inter",
            styles: "wght@100;200;300;400;500;600;700;800;900",
          },
          {
            name: "Playfair Display",
            styles: "wght@400;500;600;700;800;900",
          },
        ],
        display: "swap",
        preconnect: true,
        injectTo: "head-prepend",
      },
    }),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  css: {
    devSourcemap: true,
  },

  server: {
    port: 3000,
  },
});
