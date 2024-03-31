<script lang="ts">
export let data

let categories = ['전체']
data.posts.forEach((post) => {
    categories = [...new Set([...categories, ...post.categories])]
})

let selectedCategory = '전체'

$: posts =
    selectedCategory === '전체'
        ? data.posts
        : data.posts.filter((post) =>
              post.categories.includes(selectedCategory),
          )

function selectCategory(value: string) {
    selectedCategory = value
}
</script>

<svelte:head>
    <title>Developer Neulhan</title>
    <meta name="description" content="개발자 늘한입니다." />
</svelte:head>

<section>
    <div class="container mx-auto p-4 sm:p-8">
        <h1 class="text-2xl font-semibold">글 목록</h1>
        <div class="flex flex-wrap my-6">
            {#each categories as category}
                <button
                    on:click="{() => selectCategory(category)}"
                    class="category bg-white rounded-md text-sm font-medium mr-2 my-1 py-1 px-2 {category ==
                    selectedCategory
                        ? 'selected'
                        : ''}">
                    {category}
                </button>
            {/each}
        </div>
        <div
            class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {#each posts as post}
                <a href="{post.slug}">
                    <div
                        class="flex flex-col rounded-md justify-between bg-white overflow-hidden hover:-translate-y-1 duration-300">
                        <div class="h-32 bg-slate-300 relative">
                            <div
                                class="w-full h-full absolute bg-gradient-to-r from-gray-800 opacity-30">
                            </div>
                            {#if post.thumbnail}
                                <img
                                    src="{post.thumbnail}"
                                    alt="{post.title}"
                                    class="w-full h-full object-cover" />
                            {/if}
                        </div>
                        <div class="card p-4">
                            <div class="mb-2">
                                <span
                                    class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
                                    {post.timeEstimates > 1
                                        ? `${post.timeEstimates}분`
                                        : '1분 미만'}
                                </span>
                            </div>
                            <div class="text-lg truncate font-semibold mb-1">
                                {post.title}
                            </div>

                            <div
                                class="text-sm h-15 mb-2 opacity-70 line-clamp-3">
                                {post.description}
                            </div>

                            <div class="flex justify-between">
                                <span class="text-sm opacity-50"
                                    >{post.date}</span>
                            </div>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
.category.selected {
    background-color: $color-green;
    color: white;
}
</style>
