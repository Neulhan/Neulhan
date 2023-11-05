<style lang="scss">
</style>
<svelte:head>
    <title>Developer Neulhan</title>
    <meta name="description" content="개발자 늘한입니다." />
</svelte:head>

<script lang="ts">
    export let data;
  </script>
  
<section>
  <div class="container px-6 py-10 mx-auto">
    <h1 class="text-2xl font-semibold capitalize">My Post Lists</h1>
    <div class="flex flex-col mt-8 space-y-10">
      {#each data.posts as post}
        <div class="border">
          <div class="flex flex-col justify-between p-4">
            <a
              href={post.slug}
              class="text-xl font-semibold hover:underline py-2"
            >
              {post.title}
            </a>
            <p class="py-2">{post.description}</p>

            <span class="text-sm text-gray-500">On: {post.date}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>