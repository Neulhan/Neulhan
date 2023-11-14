<script>
import logo from '$lib/images/logo-full-light-transparent.svg'

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

<div class="w-64 p-4 shrink-0">
    <div class="logo mb-4">
        <a href="/">
            <img class="w-32" src="{logo}" alt="neulhan logo" />
        </a>
    </div>
    <nav class="py-4 flex flex-col">
        {#each navList as nav}
            <a
                class="flex items-center bg-white py-1 px-2 mb-1 hover:bg-slate-100 cursor-pointer"
                href="{nav.href}"
                target="{nav.target}">
                <img
                    class="rounded-2xl w-8 mr-2"
                    src="{nav.icon}"
                    alt="늘한 {nav.text}" />
                {nav.text}
            </a>
        {/each}
    </nav>
</div>

<style lang="scss">
</style>
