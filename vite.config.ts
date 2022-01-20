import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';
import vitePluginReactImp from 'vite-plugin-react-imp';

export default defineConfig({
  plugins: [
    reactRefresh(),

    tsconfigPaths(),

    vitePluginReactImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style/css.js`,
        },
      ],
    }),
  ],

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },

  base: './',

  resolve: {
    alias: {},
  },

  server: {
    open: true,
    port: 9966,
  },

  build: {
    outDir: 'build',
  },
});
