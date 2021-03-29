import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';
import vitePluginImp from 'vite-plugin-imp';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),

    // 在tsconfig.json里配置的路径映射到 vite 配置里
    tsconfigPaths(),

    // 按需加载
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
        // 按需加载相关 支持内联 javascript
        javascriptEnabled: true,
      },
    },
  },

  base: './',

  // 配置路径别名
  resolve: {
    alias: {
      // 已在tsconfig.json里配置路径
    },
  },

  server: {
    open: true,
    port: 996,
  },

  build: {
    // 打包文件输出
    outDir: 'build',
  },
});
