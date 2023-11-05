import type { Post } from '@src/types'

export async function load({ fetch }) {
    const response = await fetch('api/posts')
    const posts: Post[] = await response.json()
    return { posts }
}
