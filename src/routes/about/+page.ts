import { error } from '@sveltejs/kit'
import { Converter } from 'showdown'

export const prerender = true

export async function load({ params }) {
    try {
        const portfolioURL =
            'https://raw.githubusercontent.com/Neulhan/Neulhan/master/README.md'

        const res = await fetch(portfolioURL)
        if (res.body === null) return

        const { value } = await res.body.getReader().read()
        const converter = new Converter()
        const portfolioHTML = converter.makeHtml(
            new TextDecoder().decode(value)
        )

        return {
            portfolioHTML,
        }
    } catch (e) {
        console.error(e)
        throw error(404, `Could not find`)
    }
}
