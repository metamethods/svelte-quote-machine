<script lang="ts">
  import "css/global.css";

  import type { Quote } from "types/quote";

  export let quote: Quote;

  let shareButton: HTMLButtonElement;
</script>

<div class="body">
  <div class="line"></div>

  <div class="buttons-left">
    <button class="button secondary space right" on:click="{async () => {
      navigator.clipboard.writeText(document.location.href);
      shareButton.textContent = "Copied url to clipboard!";
      await new Promise(resolve => setTimeout(resolve, 2000));
      shareButton.textContent = "Share";
    }}" bind:this={shareButton}>Share</button>
    <button class="button ghost space right">Source Code</button>
  </div>

  <div class="buttons-right">
    <button class="button secondary space left" on:click="{() => document.location.href = `/create-quote`}">Create Quote</button>
    <button class="button primary space left" on:click="{() => document.location.href = `/quotes?ignore=${quote.slug}`}">Next Quote</button>
  </div>
</div>

<style>
  button {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  button.space.right {
    margin-right: 1rem;
  }

  button.space.left {
    margin-left: 1rem;
  }

  .body {
    position: relative;

    padding-right: 1rem;
    padding-left: 1rem;
  }

  .line {
    position: absolute;

    width: 100%;
    height: 1px;

    background-color: var(--topground);
  }

  .buttons-left {
    display: flex;

    float: left;
    
    width: 50%;

    justify-content: flex-start;
    align-items: center;
  }

  .buttons-right {
    display: flex;

    float: right;

    width: 50%;
    
    justify-content: flex-end;
    align-items: center;

  }
</style>