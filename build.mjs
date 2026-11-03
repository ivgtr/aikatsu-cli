import { build } from "esbuild";
const shared = { bundle: true, platform: "node", target: "node18", packages: "external", sourcemap: true };
await Promise.all([
  build({ ...shared, entryPoints: ["src/cli.ts"], outfile: "dist/cli.js", format: "esm" }),
  build({ ...shared, entryPoints: ["src/index.ts"], outfile: "dist/index.js", format: "esm" }),
  build({ ...shared, entryPoints: ["src/index.ts"], outfile: "dist/index.cjs", format: "cjs" }),
]);
