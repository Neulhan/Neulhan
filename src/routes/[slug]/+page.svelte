<script lang="ts">
import Giscus from './Giscus.svelte'
import PostEnd from './PostEnd.svelte'
import PostHead from './PostHead.svelte'
import PostContent from './PostContent.svelte'

export let data
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta name="description" content="{data.meta.description}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="{data.meta.title}" />
    <meta property="og:image" content="{data.meta.thumbnail}" />
</svelte:head>

<article class="container p-4 sm:p-12 mx-auto max-w-3xl bg-white">
    <PostHead
        title="{data.meta.title}"
        date="{data.meta.date}"
        emoji="{data.meta.emoji}" />
    <PostContent content="{data.content}" />
    <hr />
    <PostEnd />
    <hr />
    <Giscus />
</article>
