<script lang="ts">
  import "css/global.css";

  import { quote, author } from "./store";

  let button: HTMLButtonElement;

  async function uploadQuote() {
    button.disabled = true;

    const data = await fetch("/create-quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // Subscribe to the store values
        quote: $quote,
        author: $author
      })
    });

    const reply = await data.json();
    const status = data.status;

    if (status === 200) {
      document.location.href = `/quotes/${reply.slug}`;
    } else {
      button.textContent = reply.error;
      button.classList.add("error");
      button.classList.remove("primary");
      button.disabled = true;

      await new Promise(resolve => setTimeout(resolve, 3000));

      button.textContent = "Upload Quote";
      button.classList.remove("error");
      button.classList.add("primary");
    }

    button.disabled = false;
  }
</script>

<div class="body">
  <div class="line"></div>

  <button 
    on:click={uploadQuote}
    bind:this={button}

    class="button primary" 
  >Upload Quote</button>
</div>

<style>
  button {
    margin-top: 1rem;
    margin-bottom: 1rem;
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
</style>