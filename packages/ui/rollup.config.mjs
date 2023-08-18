import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json' assert { type: 'json' };

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: './src/index.ts', // 진입 경로
  output: [
    {
      file: 'dist/cjs.js',
      sourcemap: true,
      format: 'cjs',
    },
    {
      file: 'dist/esm.js',
      sourcemap: true,
      format: 'esm',
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    peerDepsExternal(),
    nodeResolve({
      extensions,
    }),
    commonjs(),
    babel({
      exclude: /node_modules/,
      extensions,
      include: ['src/**/*'],
    }),
    typescript({
      tsconfig: './tsconfig.json',
      exclude: ['**/*.spec.tsx', '**/*.stories.tsx', '**/jest.setup.ts'],
    }),
    terser(),
  ],
};
