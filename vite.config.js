import { defineConfig } from 'vite';

export default defineConfig({
  // Autres options de configuration...

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./uaadmin/assets/libs/scss/style.scss";`,
      },
    },
  },
});
