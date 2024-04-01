export type Post = {
    emoji: string | null
    title: string
    slug: string
    description: string
    date: string
    categories: string[]
    published: boolean
    minuteSpentWriting: number
    thumbnail: string
    timeEstimates: number
}
