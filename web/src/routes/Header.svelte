<style lang="scss">
@import '@src/styles/mixins.scss';

nav {
	@include custom-flex(center, flex-start);
    .logo {
        img {
            width: 80px;
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

<script>
import { page } from '$app/stores'
import github from '$lib/images/github.svg'
import logo from '$lib/images/nh-logo.svg'
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
