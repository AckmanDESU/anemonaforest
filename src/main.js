// Import main css
import '@/assets/style/index.scss'

import DefaultLayout from '~/layouts/Default.vue'

import '@/assets/code-highlight.css'

export default function (Vue, { head }) {
    Vue.component('Layout', DefaultLayout)

    head.htmlAttrs = { lang: 'es' }
}
