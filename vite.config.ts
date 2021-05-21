import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';
import vitePluginImp from 'vite-plugin-imp';

export default defineConfig({
  plugins: [
    reactRefresh(),

    tsconfigPaths(),

    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/lib/${name}/style/index.less`,
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
    alias: {
    },
  },

  server: {
    open: true,
    port: 996,
  },

  build: {
    outDir: 'build',
  },
});
