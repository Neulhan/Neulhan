<script lang="ts">
    export let data;
  </script>
  




  
  <svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
  </svelte:head>
  
  <article class="md">
    <div>
      <h1 class="text-4xl">{data.meta.title}</h1>
      <p>Published at {data.meta.date}</p>
    </div>
  
    <div class="my-4">
      {#each data.meta.categories as category}
        <span class="border rounded-xl py-2 px-4 mr-2 bg-slate-700"
          >&num;{category}</span
        >
      {/each}
    </div>
  
    <div>
      <svelte:component this={data.content} />
    </div>
  </article>