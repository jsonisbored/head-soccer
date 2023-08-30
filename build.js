import * as esbuild from "esbuild";


const outFile = "./app/main.js";
await esbuild.build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    outfile: outFile,
    format: "esm",
});
