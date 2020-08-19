import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import vue from 'rollup-plugin-vue';

export default {
  input: 'src/index.js',
  output: {
    name: 'KamiVuetifyComponents',
    exports: 'named'
  },
  plugins: [
    commonjs(),
    vue({
      compileTemplate: true,
      css: true,
    }),
    buble(),
  ],
};
