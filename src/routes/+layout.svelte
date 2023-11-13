<script>
import SideNav from './SideNav.svelte'
import '@src/app.postcss'
import '@src/lib/scss/styles.scss'
import '@src/lib/scss/prism.scss'
</script>

<div class="app flex flex-col sm:flex-row">
    <SideNav />

    <main>
        <slot />
    </main>
</div>

<style lang="scss">
</style>
