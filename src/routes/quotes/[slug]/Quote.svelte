<script lang="ts">
  import "css/global.css";

  import QuoteButtons from "./QuoteButtons.svelte";

  import type { Quote } from "types/quote";

  export let quote: Quote;
</script>

<div>
  <figure>
    <blockquote>
      <h1>&ldquo;{quote.quote}&rdquo;</h1>
    </blockquote>
    <figcaption>
      <p>— {quote.author}</p>
    </figcaption>
  </figure>

  <QuoteButtons {quote} />
</div>

<style>
  h1 {
    font-weight: 400;

    word-break: break-word;
  }

  p {
    opacity: .5;
  }

  figure {
    padding-left: .5rem;
    padding-right: .5rem;

    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  div {
    background-color: var(--foreground);

    width: 100%;
    max-width: 800px;

    overflow: hidden;

    text-align: center;

    border-radius: .5rem;
  }
</style>