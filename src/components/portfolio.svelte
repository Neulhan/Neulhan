<style lang="scss">
.portfolio-section {
  width: 100%;
  padding: 120px 0;
  @include custom-flex(center, center);
}
</style>

<script lang="ts">
import { Converter } from 'showdown'
let portfolioHTML: string

const portfolioURL: string =
  'https://raw.githubusercontent.com/Neulhan/Neulhan/master/README.md'
const getPortfolio = async () => {
  const res: Response = await fetch(portfolioURL)
  const { value }: ReadableStreamDefaultReadResult<Uint8Array> = await res.body
    .getReader()
    .read()
  const converter: Converter = new Converter()

  portfolioHTML = converter.makeHtml(new TextDecoder().decode(value))
}
getPortfolio()
</script>

<div class="portfolio-section">
  <div class="portfolio-wrapper container">
    {@html portfolioHTML}
  </div>
</div>
