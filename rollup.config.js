import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import autoExternal from "rollup-plugin-auto-external";
import shebang from "rollup-plugin-preserve-shebang";
import { terser } from "rollup-plugin-terser";

const settings = ({ name }) => ({
  input: `./src/${name}.ts`,
  output: {
    file: `./dist/${name}.js`,
    format: "esm",
    exports: "default",
  },
  external: ["./index.js"],
  plugins: [
    autoExternal(),
    shebang(),
    typescript(),
    nodeResolve({ mainFields: ["module", "jsnext"] }),
    commonjs(),
    json(),
    babel(),
    terser(),
  ],
});

export default [settings({ name: "cli" }), settings({ name: "index" })];
