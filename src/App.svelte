<style lang="scss">
</style>

<script lang="ts">
export let WORD
import Main from '@/components/main.svelte'
import Port from '@/components/portfolio.svelte'
import Foot from '@/components/footer.svelte'
</script>

<main>
  <Main WORD="{WORD}" />
  <Port />
  <Foot />
</main>
