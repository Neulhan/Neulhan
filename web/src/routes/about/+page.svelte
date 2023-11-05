<script>
import { Converter } from 'showdown'
import { onMount } from 'svelte'

let portfolioHTML = ''

onMount(() => {
    const portfolioURL =
        'https://raw.githubusercontent.com/Neulhan/Neulhan/master/README.md'
    const getPortfolio = async () => {
        const res = await fetch(portfolioURL)
        if (res.body === null) return

        const { value } = await res.body.getReader().read()
        const converter = new Converter()
        portfolioHTML = converter.makeHtml(new TextDecoder().decode(value))
    }
    getPortfolio()
})
</script>

<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
    <div class="portfolio md">{@html portfolioHTML}</div>
</div>
