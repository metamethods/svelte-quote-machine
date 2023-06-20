<script>
  import "css/global.css";

  import QuotePreview from "./QuotePreview.svelte";

  export let quoteObject;
</script>

<div class="center"> 
  <QuotePreview 
    bind:this={quoteObject}
  />
</div>

<style>
  .center {
    display: flex;

    justify-content: center;
    align-items: center;

    height: 100vh;

    margin-left: 1rem;
    margin-right: 1rem;
  }
</style>