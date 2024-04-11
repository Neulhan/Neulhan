import getPosts from '../posts/getPosts'

export const prerender = true

export async function GET() {
    const posts = await getPosts()

    return new Response(
        `<?xml version="1.0" encoding="UTF-8" ?>
        <urlset	xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"			
                xmlns:xhtml="https://www.w3.org/1999/xhtml"			
                xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"			
                xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"			
                xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"			
                xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">			
                <url>
                    <loc>https://blog.neulhan.com/</loc>
                    <changefreq>daily</changefreq>
                </url>
                ${posts.map((post) => {
                    return `<url>
                        <lastmod>${post.date}</lastmod>
                        <loc>https://blog.neulhan.com${post.slug}/</loc>
                        <changefreq>monthly</changefreq>
                        <priority>1</priority>
                    </url>
                    `
                })}
        </urlset>
        `.trim(),
        { headers: { 'Content-Type': 'application/xml' } }
    )
}
