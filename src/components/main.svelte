<style lang="scss">
main {
  width: 100%;
  height: 100vh;
  background-color: white;
  @include custom-flex(center, center);
  h1 {
    font-size: 200px;
    @include mobile {
      font-size: 24vw;
    }
  }
}
</style>

<script lang="ts">
export let WORD
</script>

<main>
  <h1>{WORD}</h1>
</main>
