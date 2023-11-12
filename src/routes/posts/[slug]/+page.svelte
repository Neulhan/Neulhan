<script lang="ts">
export let data
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content="{data.meta.title}" />
</svelte:head>

<article class="container p-8 mx-auto max-w-2xl bg-white rounded-xl">
    <div>
        <div class="flex">
            <h1 class="text-4xl pb-2 font-medium">{data.meta.title}</h1>
        </div>
        <p class="opacity-50 pb-2">Published at {data.meta.date}</p>
    </div>

    <div class="my-4 flex">
        {#each data.meta.categories as category}
            <button
                class="category rounded-md py-1 px-2 align-middle mr-2 bg-white font-medium">
                &num;{category}
            </button>
        {/each}
    </div>

    <div class="md py-4">
        <svelte:component this="{data.content}" />
    </div>
</article>

<style lang="scss">
.category {
    background-color: $color-green;
    color: white;
}
</style>
