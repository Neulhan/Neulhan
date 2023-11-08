<script>
import { page } from '$app/stores'
import logo from '$lib/images/logo-full-light.svg'
</script>

<header>
    <nav>
        <div class="logo">
            <a href="/">
                <img src="{logo}" alt="neulhan logo" />
            </a>
        </div>
        <ul>
            <li
                aria-current="{$page.url.pathname === '/'
                    ? 'page'
                    : undefined}">
                <a href="/">Home</a>
            </li>
            <li
                aria-current="{$page.url.pathname === '/about'
                    ? 'page'
                    : undefined}">
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
</header>

<style lang="scss">
@import '../styles/mixins.scss';

nav {
    @include custom-flex(center, flex-start);
    .logo {
        img {
            width: 140px;
        }
    }
    ul {
        display: flex;

        li {
            padding: 4px 8px;
            list-style: none;
        }
    }
}
</style>
