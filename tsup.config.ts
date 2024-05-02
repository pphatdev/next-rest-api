import { defineConfig } from "tsup"

export default defineConfig({
    clean: true,
    dts: false,
    entry: ["./cli/index.ts"],
    format: ["esm"],
    sourcemap: true,
    minify: true,
    target: "esnext",
    outDir: "./cli/dist"
})
