import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import filesize from "rollup-plugin-filesize";
import autoprefixer from "autoprefixer";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import pkg from "./package.json";
import json from '@rollup/plugin-json';

const INPUT_FILE_PATH = "src/CAIconButton/index.tsx";
const OUTPUT_NAME = "CAIconButton";

const GLOBALS = {
  react: "React",
  "react-dom": "ReactDOM",
  "prop-types": "PropTypes",
};

const PLUGINS = [
  postcss({
    extract: true,
    plugins: [autoprefixer],
  }),
  babel({
    babelHelpers: "runtime",
    exclude: "node_modules/**",
  }),
  resolve({
    browser: true,
    resolveOnly: [/^(?!react$)/, /^(?!react-dom$)/, /^(?!prop-types)/],
  }),
  commonjs(),
  typescript(),
  filesize(),
  json()
];

const EXTERNAL = ["react", "react-dom", "prop-types"];

// https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
const CJS_AND_ES_EXTERNALS = EXTERNAL.concat(/@babel\/runtime/);

const OUTPUT_DATA = [
  {
    file: pkg.browser,
    format: "umd",
  },
  {
    file: pkg.main,
    format: "cjs",
  },
  {
    file: pkg.module,
    format: "es",
  },
];

const config = [
  ...OUTPUT_DATA.map(({ file, format }) => {
    return {
      input: INPUT_FILE_PATH,
      output: {
        file,
        format,
        name: OUTPUT_NAME,
        globals: GLOBALS,
      },
      external: ["cjs", "es"].includes(format)
        ? CJS_AND_ES_EXTERNALS
        : EXTERNAL,
      plugins: PLUGINS,
    };
  }),
  {
    // path to your declaration files root
    input: "./build/dts/CAIconButton/index.d.ts",
    output: [{ file: "package/dts/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];

export default config;
