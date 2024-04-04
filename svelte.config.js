import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { mdsvex } from 'mdsvex'

const dev = process.env.ENV === 'dev'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
    extensions: ['.md'],
    layout: {
        _: './src/lib/mdsvex/mdsvex.svelte',
    },
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter(),
        alias: {
            '@src': 'src',
        },
    },
    extensions: ['.svelte', '.md'],
    preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
    // paths: { base: dev ? '' : '/Neulhan' },
}

export default config
