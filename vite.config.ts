import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
// 引入resolveld里路径alias的钩子
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // react 快速刷新
    reactRefresh(),
    // 在tsconfig.json里配置的路径可以映射到 vite 里
    tsconfigPaths(),
  ],

  // 配置相对路径
  base: './',

  // 配置路径别名
  resolve: {
    alias: {
      // 已在tsconfig.json里配置路径
    },
  },

  server: {
    // 自动打开浏览器
    open: true,
    // 端口号
    port: 996,
  },

  build: {
    // 打包文件输出
    outDir: 'build',
  },
});
