// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

// https://astro.build/config
export default defineConfig({
    fonts: [
        {
            provider: fontProviders.local(),
            name: 'Geist Mono',
            cssVariable: '--font-geist-mono',
            options: {
                variants: [
                    {
                        weight: 400,
                        style: 'normal',
                        src: [
                            './src/assets/fonts/geist-mono-v6-latin-regular.woff2',
                        ],
                    },
                    {
                        weight: 500,
                        style: 'normal',
                        src: [
                            './src/assets/fonts/geist-mono-v6-latin-500.woff2',
                        ],
                    },
                    {
                        weight: 600,
                        style: 'normal',
                        src: [
                            './src/assets/fonts/geist-mono-v6-latin-600.woff2',
                        ],
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: 'IBM Plex Mono',
            cssVariable: '--font-ibm-plex-mono',
            options: {
                variants: [
                    {
                        weight: 400,
                        style: 'normal',
                        src: [
                            './src/assets/fonts/ibm-plex-mono-v20-latin-regular.woff2',
                        ],
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: 'Manrope',
            cssVariable: '--font-manrope',
            options: {
                variants: [
                    {
                        weight: 400,
                        style: 'normal',
                        src: [
                            './src/assets/fonts/manrope-v20-latin-regular.woff2',
                        ],
                    },
                    {
                        weight: 500,
                        style: 'normal',
                        src: ['./src/assets/fonts/manrope-v20-latin-500.woff2'],
                    },
                    {
                        weight: 600,
                        style: 'normal',
                        src: ['./src/assets/fonts/manrope-v20-latin-600.woff2'],
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: 'Golos Text',
            cssVariable: '--font-golos',
            options: {
                variants: [
                    {
                        weight: 600,
                        style: 'normal',
                        src: [
                            './src/assets/fonts/golos-text-v7-latin-600.woff2',
                        ],
                    },
                    {
                        weight: 700,
                        style: 'normal',
                        src: [
                            './src/assets/fonts/golos-text-v7-latin-700.woff2',
                        ],
                    },
                ],
            },
        },
    ],
})
