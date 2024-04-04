<script lang="ts">
export let emoji: string
export let title: string
export let date: string
</script>

<div class="content-head">
    <div class="flex">
        <!-- 제목 -->
        <h1 class="text-4xl pb-2 font-semibold">
            <span class="tf">{emoji ?? ''}</span>
            {title}
        </h1>
    </div>
    <p class="opacity-50 pb-2">{date}</p>
</div>
