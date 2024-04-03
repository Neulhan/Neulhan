<script lang="ts">
import { popEffect } from '@src/lib/animations/popEffect.js'

export let data

const back = (e: MouseEvent) => {
    popEffect(e)
    setTimeout(() => {
        if (document.referrer && document.referrer.includes('mysite.com')) {
            history.back()
        } else {
            location.href = '/'
        }
    }, 500)
}
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content="{data.meta.title}" />
    <meta property="og:image" content="{data.meta.thumbnail}" />
</svelte:head>

<article class="container p-4 sm:p-12 mx-auto max-w-3xl bg-white">
    <div class="content-head">
        <div class="flex">
            <!-- 제목 -->
            <h1 class="text-4xl pb-2 font-semibold">
                <span class="tf">{data.meta.emoji ?? ''}</span>
                {data.meta.title}
            </h1>
        </div>
        <p class="opacity-50 pb-2">{data.meta.date}</p>
    </div>
    <div class="my-4 flex gap-1">
        {#each data.meta.categories as category}
            <div
                class="rounded-md bg-slate-50 border border-slate-200 px-0.5 text-sm text-slate-500">
                # {category}
            </div>
        {/each}
    </div>
    <div class="content-container md py-4">
        <svelte:component this="{data.content}" />
    </div>
    <hr />
    <div class="flex justify-between flex-col sm:flex-row sm:content-start">
        <button on:click="{back}">
            <span class="tf">👈</span> 목록으로 돌아가기
        </button>
        <button on:click="{popEffect}" class="sm:mt-0 mt-2 relative">
            <span class="tf pointer-events-none">😁</span> 부족한 글 읽어주셔서 감사합니다
        </button>
    </div>
    <hr />
    <script
        src="https://giscus.app/client.js"
        data-repo="Neulhan/Neulhan"
        data-repo-id="MDEwOlJlcG9zaXRvcnkyODc0NzE2OTA="
        data-category="Announcements"
        data-category-id="DIC_kwDOESJ4Ss4CeXnk"
        data-mapping="title"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="light"
        data-lang="ko"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
    </script>
</article>

<style lang="scss">
.content-container {
    text-wrap: pretty;
    word-break: keep-all;
    word-wrap: break-word;
}
</style>
