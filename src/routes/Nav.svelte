<script>
const navList = [
    {
        icon: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
        href: 'https://github.com/Neulhan',
        text: '소개',
        target: '_blank',
    },
    {
        icon: 'https://images.velog.io/images/wwwssj0309/post/e2262211-93c1-46a2-b72c-345c5c22a683/1.jpg',
        href: 'https://velog.io/@neulhan',
        text: '예전 블로그',
        target: '_blank',
    },
]
</script>

<div
    class="bg-white w-full p-4 shrink-0 flex justify-between content-center border-b border-slate-200">
    <div class="logo">
        <a href="/" class="font-semibold text-2xl flex flex-nowrap">
            <span class="tf mr-2">🦉</span> 개발자 늘한
        </a>
    </div>
    <nav class="flex">
        {#each navList as nav}
            <a
                class="flex items-center py-1 px-2 hover:bg-slate-100 cursor-pointer"
                href="{nav.href}"
                target="{nav.target}">
                <img
                    class="rounded-2xl w-6 mr-2"
                    src="{nav.icon}"
                    alt="늘한 {nav.text}" />
                {nav.text}
            </a>
        {/each}
    </nav>
</div>

<style lang="scss">
</style>
