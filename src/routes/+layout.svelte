<script>
import { page } from '$app/stores'
import Nav from './Nav.svelte'
import '@src/app.postcss'
import '@src/lib/scss/styles.scss'
import '@src/lib/scss/prism.scss'
</script>

<svelte:head>
    <link rel="canonical" href="https://blog.neulhan.com{$page.url.pathname}" />
</svelte:head>

<div class="app flex flex-col">
    <Nav />
    <main>
        <slot />
    </main>
</div>

<style lang="scss">
</style>
