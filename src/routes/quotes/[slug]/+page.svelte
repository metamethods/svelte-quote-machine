<script lang="ts">
  import Quote from "./Quote.svelte";

  import type { QuoteData } from "types/quote";

  export let data: QuoteData;
  let quote = data.quote;
</script>

{#if data.loaded}
  <div class="center quote">
    <Quote {quote} />
  </div>

  <!-- Embed -->
  <meta property="og:title" content="{quote.author}" />
  <meta property="og:description" content="“{quote.quote}”" />
  <!-- TODO: Make working og:image -->
  <!-- <meta property="og:image" content="https://quotes.alemayhu.com/api/og?quote={quote.quote}&author={quote.author}" /> -->
{:else if data}
  <h1>404</h1>
  <p>Not Found</p>
{/if}

<style>
  .center {
    display: flex;

    justify-content: center;
    align-items: center;

    margin-left: 1rem;
    margin-right: 1rem;
  }

  .quote {
    height: 100vh;
  }
</style>