<script lang="ts">
export let data
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content="{data.meta.title}" />
</svelte:head>

<article class="container mx-auto">
    <div>
        <h1 class="text-4xl pb-2">{data.meta.title}</h1>
        <p class="opacity-50 pb-2">Published at {data.meta.date}</p>
    </div>

    <div class="my-4">
        {#each data.meta.categories as category}
            <span class="border rounded-xl py-1 px-2 mr-2 bg-slate-700"
                >&num;{category}</span>
        {/each}
    </div>

    <div class="md py-4">
        <svelte:component this="{data.content}" />
    </div>
</article>

<style lang="scss">
</style>
