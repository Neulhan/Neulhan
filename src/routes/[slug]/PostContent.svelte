<script lang="ts">
export let content: ConstructorOfATypedSvelteComponent
</script>

<div class="content-container md py-4">
    <svelte:component this="{content}" />
</div>

<style lang="scss">
.content-container {
    text-wrap: pretty;
    word-break: keep-all;
    word-wrap: break-word;
}
</style>
