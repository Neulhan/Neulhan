import type { Post } from '@src/types'
import { htmlToText } from 'html-to-text'

export default async function getPosts() {
    let posts: Post[] = []

    const paths = import.meta.glob('/src/posts/*.md', { eager: true })
    for (const path in paths) {
        const file = paths[path]
        const slug = 'posts/' + path.split('/').at(-1)?.replace('.md', '')
        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>
            const timeEstimates = Math.round(
                htmlToText(file.default.render().html)!.length / 500
            )
            const post = { ...metadata, slug, timeEstimates } satisfies Post
            post.published && posts.push(post)
        }
    }

    posts = posts.sort(
        (first, second) =>
            new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return posts
}
