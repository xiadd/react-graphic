import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default {
  input: "src/react-g.js",
  output: {
    name: 'ReactG',
    file: pkg.main,
    format: "cjs"
  },
  external: ["react", "react-dom", "@antv/g", "react-reconciler"],
  plugins: [
    babel({ exclude: 'node_modules/**' }),
  ]
};
