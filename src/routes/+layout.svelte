<script>
import Nav from './Nav.svelte'
import '@src/app.postcss'
import '@src/lib/scss/styles.scss'
import '@src/lib/scss/prism.scss'
</script>

<div class="app flex flex-col">
    <Nav />
    <main>
        <slot />
    </main>
</div>

<style lang="scss">
</style>
