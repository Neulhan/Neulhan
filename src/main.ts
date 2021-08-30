import App from './App.svelte'
import './scss/base.scss'

const app = new App({
  target: document.body,
  props: {
    WORD: '滿喫',
  },
})

export default app
