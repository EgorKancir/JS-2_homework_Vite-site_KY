// import { resolve } from 'chart.js/helpers'
import { resolve } from 'path'
import {defineConfig} from 'vite'

export default defineConfig({
    base: "/JS-2_homework_Vite-site_KY",
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                index2: resolve(__dirname, "index2.html"),
                index3: resolve(__dirname, "index3.html"),
                index4: resolve(__dirname, "index4.html"),
                index5: resolve(__dirname, "index5.html")
            }
        }
    }
})