import dts from 'bun-plugin-dts'

await Bun.build({
  entrypoints: ['./src/index.ts'],
  format: 'esm',
  outdir: './dist',
  splitting: false,
  naming: "index.mjs",
  minify: true,
  plugins: [dts()],
  target: 'node',
})
