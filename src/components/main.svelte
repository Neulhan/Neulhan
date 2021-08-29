<style lang="scss">
main {
  width: 100vw;
  height: 100vh;
  background-color: white;
  @include custom-flex(center, center);
  h1 {
    font-size: 200px;
  }
}
</style>

<script>
let WORD = '滿喫'
</script>

<main>
  <h1>{WORD}</h1>
</main>
