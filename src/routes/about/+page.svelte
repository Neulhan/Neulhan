<script lang="ts">
export let data
</script>

<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app" />
</svelte:head>

<div class="container mx-auto max-w-3xl min-h-screen p-4 sm:p-8 bg-white">
    <div class="portfolio md">{@html data.portfolioHTML}</div>
</div>
