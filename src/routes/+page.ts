import type { Post } from '@src/types'

export async function load({ fetch, url }) {
    const response = await fetch('api/posts')
    let posts: Post[] = await response.json()
    return { posts, url }
}
