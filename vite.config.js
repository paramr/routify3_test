import { svelte } from '@sveltejs/vite-plugin-svelte'
import routify from '@roxi/routify/vite-plugin'
import { defineConfig } from 'vite'

const production = process.env.NODE_ENV === 'production'

export default defineConfig({
    clearScreen: false,

    plugins: [
        routify(),
        svelte({
            emitCss: true,
            compilerOptions: {
                dev: !production,
            },
            extensions: ['.svelte'],
        }),
    ],

    server: { port: 1337 },
})
