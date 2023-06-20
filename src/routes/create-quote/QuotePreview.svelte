<script lang="ts">
  import "css/global.css";

  import Actions from "./Actions.svelte";

  import { quote, author } from "./store";
  import { onMount, tick } from "svelte";

  export let quoteText = "Write your quote here";
  export let authorName = "Write the author here";

  let quoteInput: HTMLSpanElement;
  let authorInput: HTMLSpanElement;

  // onMount(() => {
  //   setInterval(async () => {
  //     quoteInput.textContent = quoteText.replace(/\n/g, "");
  //     authorInput.textContent = authorName.replace(/\n/g, "");
  //   }); 
  // });

  function disableEnter(event: KeyboardEvent) {
    if (event.key !== "Enter") return;
    event.preventDefault();
  }

  $: {
    quote.set(quoteText);
    author.set(authorName);
  }
</script>

<div>
  <figure>
    <blockquote>
      <h1>&ldquo;<span contenteditable bind:textContent={quoteText} bind:this={quoteInput} on:keydown={disableEnter}></span>&rdquo;</h1>
    </blockquote>
    <figcaption>
      <p>— <span contenteditable bind:textContent={authorName} bind:this={authorInput} on:keydown={disableEnter}></span></p>
    </figcaption>
  </figure>

  <Actions />
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

  span {
    outline: none;

    border: 2px solid var(--border);
    border-radius: .5rem;

    padding: .5rem .75rem;
  }
</style>