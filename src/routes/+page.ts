import type { Post } from '@src/types'

export const prerender = true

export async function load({ fetch, url }) {
    const selectedCategory = url.searchParams.get('category') || '전체'
    const response = await fetch('api/posts')
    let posts: Post[] = await response.json()

    let categories = ['전체']
    posts.forEach((post) => {
        categories = [...categories, ...post.categories]
    })
    categories = [...new Set(categories)]

    if (selectedCategory !== '전체') {
        posts = posts.filter((post) =>
            post.categories.includes(selectedCategory)
        )
    }

    return { posts, categories, selectedCategory }
}
