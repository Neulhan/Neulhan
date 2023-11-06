<script lang="ts">
export let data
</script>

<svelte:head>
    <title>Developer Neulhan</title>
    <meta name="description" content="개발자 늘한입니다." />
</svelte:head>

<section>
    <div class="container mx-auto max-w-2xl">
        <h1 class="text-2xl font-semibold">글 목록</h1>
        <div class="flex flex-col mt-8 space-y-4">
            {#each data.posts as post}
                <a class="border" href="{post.slug}">
                    <div class="flex flex-col justify-between p-4">
                        <div
                            class="text-2xl font-semibold hover:underline pb-2">
                            {post.title}
                        </div>
                        {#if post.description}
                            <p class="py-2 opacity-70">{post.description}</p>
                        {/if}

                        <span class="text-sm opacity-50"
                            >작성일: {post.date}</span>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
</style>
