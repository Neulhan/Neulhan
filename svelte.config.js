const sveltePreprocess = require('svelte-preprocess')
const autoprefixer = require('autoprefixer')
const production = !process.env.ROLLUP_WATCH

module.exports = {
  preprocess: sveltePreprocess({
    sourceMap: !production,
    scss: {
      prependData: `@use "src/scss/_definition.scss" as *;`,
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  }),
  compilerOptions: {
    dev: !production,
  },
}
