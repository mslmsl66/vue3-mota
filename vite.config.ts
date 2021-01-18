import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import rollupResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
const { resolve } = require('path');

export default defineConfig({
  plugins: [vue()],
  alias: {
    // 一定要/@/格式
    '/@/': resolve(__dirname, 'src'),
    '/@/components': resolve(__dirname, 'src/components'),
    '/@/js': resolve(__dirname, 'src/js'),
  },
  mode: 'production',
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `$injectedColor: orange;`
  //     }
  //   }
  // },
  server: {
    port: 55554
  },
  build: {
    // 异步css chunk，跟随异步chunk注入
    cssCodeSplit: true,
    rollupOptions: {
      plugins: [
        rollupResolve(),
        babel({ babelHelpers: 'bundled' })
      ]
    },
    // terser最慢但打出来最小
    minify: 'terser'
  }
});
