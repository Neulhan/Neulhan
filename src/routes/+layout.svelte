<script>
import Header from './Header.svelte'
import '@src/app.postcss'
import '@src/lib/scss/styles.scss'
import '@src/lib/scss/prism.scss'
</script>

<div class="app">
    <Header />

    <main>
        <slot />
    </main>

    <footer>
        <a href="mailto:neulhan@icloud.com">contact : neulhan@icloud.com</a>
    </footer>
</div>

<style lang="scss">
.app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
}

footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    a {
        font-weight: bold;
    }
}

@media (min-width: 480px) {
    footer {
        padding: 12px 0;
    }
}
</style>
