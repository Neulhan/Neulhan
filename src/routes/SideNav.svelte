<script>
import logo from '$lib/images/logo-full-light-transparent.svg'

const navList = [
    {
        href: '/about',
        text: '소개',
    },
    {
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
                class="bg-white py-1 px-2 mb-1 hover:bg-slate-100 cursor-pointer"
                href="{nav.href}"
                target="{nav.target}"
                >{nav.text}
            </a>
        {/each}
    </nav>
</div>

<style lang="scss">
</style>
